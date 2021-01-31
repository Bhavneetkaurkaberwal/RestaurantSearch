import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Prbx93COTb5e13yXEO2BqUYOdzj09FWiON9WNqe5_4y0-gn8Z0fiLOVO01fqd4YsfQFdKVdm0bxaa8R_xarSNrFAmRJNB2X5nBE-nOUg7aH2iY4MsL77z69To-IIYHYx'
    }
});