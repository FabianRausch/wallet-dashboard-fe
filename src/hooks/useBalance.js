import { useEffect, useState, useCallback } from 'react';
import { getAddressBalance } from '../api/walletApi';

export const useBalance = (address, currentCurrency,rate) => {
    const [ balance, setBalance ] = useState();
    const [ ethBalance, setEthBalance ] = useState();
    const [ balanceCurrency, setBalanceCurrency ] = useState();
    const [ loading, setLoading ] = useState(false);

    const triggerBalance = useCallback((async() => {
        try {
            setLoading(true);
            const {balance, eth, currency} = await getAddressBalance(address)
            setEthBalance(eth)
            setBalance(balance);
            setBalanceCurrency(currency)
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }), [address])

    useEffect(() => {
        address && triggerBalance();
    }, [address, triggerBalance, currentCurrency, rate])
    return [balance, ethBalance, balanceCurrency, loading];
}