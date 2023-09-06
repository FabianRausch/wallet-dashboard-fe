import { useEffect, useState, useCallback } from 'react';
import { editExchangeRates, getExchangeEthRates, updateToRealExchangeEthRates } from '../api/walletApi';

export const useExchangeEthRates = (currentCurrency) => {
    const [ rate, setRate ] = useState();
    const [ loading, setLoading ] = useState(false);

    const triggerExchangeEthRates = useCallback(async() => {
        try {
            setLoading(true);
            const exchangeEthRates = await getExchangeEthRates();
            setRate(exchangeEthRates[currentCurrency]);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }, [currentCurrency])

    const triggerEditExchangeRates = async(value) => {
        try {
            setLoading(true);
            await editExchangeRates(value);
            await triggerExchangeEthRates();
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    const triggerRealRates = async() => {
        try {
            setLoading(true);
            await updateToRealExchangeEthRates();
            await triggerExchangeEthRates();
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        triggerExchangeEthRates();
    }, [currentCurrency, triggerExchangeEthRates])
    
    return [triggerEditExchangeRates, triggerRealRates, rate, loading];
}