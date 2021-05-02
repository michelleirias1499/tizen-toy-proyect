import axios from 'axios';
//URL BASE PARA LOS REQUEST

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  //   baseURL: 'http://api.tvmaze.com',
});

export default instance;
