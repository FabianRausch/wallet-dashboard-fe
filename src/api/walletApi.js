import axios from 'axios'
axios.defaults.baseURL = process.env.REACT_APP_DASHBOARD_WALLET_BASE_URL;

export const addAddress = (address) => 
    axios.post('/addresses/add', {id: address})
      .then()
      .catch((error) => console.log(error));

export const getAddresses = () => 
    axios.get('/addresses')
    .then((res) => res.data.addresses)
    .catch((error) => console.log(error));


export const updateFavoriteAddres = ({id, favorite}) => 
    axios.put('/addresses/favorite', {
        id,
        favorite
      })
      .then()
      .catch( (error) => console.log(error));

export const deleteAddress = (id) => 
    axios.delete(`/addresses/detete/${id}`)
    .then()
    .catch( (error) => console.log(error))

export const getAddressBalance = (id) => 
    axios.get(`/addresses/balance/${id}`)
  .then((res) => res.data)
  .catch((error) => console.log(error))

export const getCurrencyConfig = () => 
    axios.get('/user/config/currency')
    .then((res) => res.data)
    .catch((error) => console.log(error))

export const changeCurrency = (currency) => 
    axios.put('/user/config/currency', {currency})
      .then()
      .catch((error) => console.log(error));

export const getExchangeEthRates = () => 
    axios.get('/eth/rates')
  .then( (res) => res.data)
  .catch((error) => console.log(error))

export const updateToRealExchangeEthRates = () => 
    axios.put('/eth/real-rates')
  .then( (res) => console.log(res))
  .catch((error) => console.log(error))

export const editExchangeRates = (value) => 
    axios.put('/eth/rates', { value })
      .then()
      .catch((error) => console.log(error));
