import { useState, useEffect } from 'react';
import { addAddress, deleteAddress, getAddresses, updateFavoriteAddres } from '../api/walletApi';

export const useAddresses = () => {
    const [ addresses, setAddresses ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const fetchAddresses = async() => {
        try {
            setLoading(true);
            setAddresses(await getAddresses());
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    const triggerAddAddress = async (addressId) => {
        try {
            setLoading(true);
            await addAddress(addressId);
            await fetchAddresses();
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    const triggerFavorite = async(addressId, favorite) => {
        setAddresses(addresses.map((address) => address.id === addressId ? {...address, favorite} : address));
        try {
            // setLoading(true);
            await updateFavoriteAddres(addressId, favorite);
            // setLoading(false);
        } catch (error) {
            // setLoading(false);
        }
    }

    const triggerDelete = async(addressId) => {
        try {
            setLoading(true);
            await deleteAddress(addressId);
            await fetchAddresses();
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAddresses();
    }, [])

    return [addresses, triggerAddAddress, triggerFavorite, triggerDelete, loading];
}