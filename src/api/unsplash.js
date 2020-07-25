import axios from 'axios';
// by using create we make a customize version of it 
export default axios.create({
  baseURL:'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID HGZZbQmrfhvhBgq5VufA_HJ0rP1Fr6qyePvS8-yp_Kc'
  }

});
