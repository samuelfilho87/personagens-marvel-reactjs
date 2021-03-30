import axios from 'axios';

const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public`,
  params: {
    limit: 10,
    ts: 1,
    apikey: '601eabb0f35109579283d00ecd8d8c98',
    hash: '86bce4701334238c4205d25c01bf4fd6'
  }
});

export default api;
