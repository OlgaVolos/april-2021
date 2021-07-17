import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

let getUsers = () => axiosInstance.get('/users');
let getPosts = () => axiosInstance.get('/posts');
let getComments = () => axiosInstance.get('/comments');

export {getUsers, getPosts, getComments}
