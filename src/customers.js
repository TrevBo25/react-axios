import axios from 'axios';
import apiURL from './api';

export const getCustomerList = function() {
  return axios.get(apiURL).then(response => {
    return response.data;
  })
}

export const postCustomer = function(obj) {
  return axios.post(apiURL, obj).then(resp => resp.data);
}
