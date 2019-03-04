import axios from 'axios';

export const blogApi = {
    url: 'http://etaxi.in.ua:8081',
    getPosts() {
        return axios.get(`${this.url}/posts`);
    }
};