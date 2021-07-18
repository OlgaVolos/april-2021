import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/"
});
const getUsers  = () => axiosInstance.get('/users');
const getUserPosts  = (id) => axiosInstance('/users/' + id + '/posts');

export {getUsers, getUserPosts}
