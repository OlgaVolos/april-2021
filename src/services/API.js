import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

const getUsers  = () =>  axiosInstance.get();
const getUser  = (id) =>  axiosInstance.get('/'+id);
const getPostsOfUser  = (id) => axiosInstance.get('/' + id + '/posts');

export {getUser, getUsers, getPostsOfUser}
