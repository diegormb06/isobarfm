import axios from "axios";

const api = axios.create({
  baseURL: 'https://iws-brazil-labs-iws-recruiting-bands.iwsbrazil.io/api',
});

export default api;