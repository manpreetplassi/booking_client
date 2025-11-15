import axios from "axios";

export const Axios = axios.create({
    baseURL: 'https://some-domain.com/api/',
  timeout: 6000,
  headers: {'X-Custom-Header': 'foobar'}
})