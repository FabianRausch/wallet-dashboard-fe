import { useState, useEffect } from 'react';
import { changeCurrency, getCurrencyConfig } from '../api/walletApi';

export const useCurrencyConfig = () => {
    const [ currentCurrency, setCurrentCurrency ] = useState('');
    const [currencies, setCurrencies] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const triggerCurrencyConfig= async() => {
        try {
            setLoading(true);
            const currenyConfig = await getCurrencyConfig();
            setCurrentCurrency(currenyConfig.selected);
            setCurrencies(currenyConfig.currencies)
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    const triggerChangeCurrency = async(currency) => {
        try {
            setLoading(true);
            await changeCurrency(currency);
            await triggerCurrencyConfig();
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
    useEffect(() => {
        triggerCurrencyConfig();
    }, []);
    return [currentCurrency, currencies, triggerChangeCurrency, loading];
}