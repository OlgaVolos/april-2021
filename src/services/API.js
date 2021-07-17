import axios from 'axios'

let axiosInstance = axios.create({
    baseURL: 'https://fakestoreapi.com/products'

});

const getProducts  = () =>
    axiosInstance.get();
const getProduct  = (id) =>
    axiosInstance.get('/' +id)
;

export {getProducts, getProduct};
