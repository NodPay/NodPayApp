import {API_URL} from '../utils/consts';
import axios from 'axios';

export const checkValidPhoneNumber = phoneNumber => {
  return new Promise(async (resolve, reject) => {
    axios
      .get(API_URL + 'auth/valid-phone-number?phoneNumber=' + phoneNumber)
      .then(response => {
        console.log(response.data);
        resolve(response.data.isValid);
      })
      .catch(error => {
        reject(error.response.data.message);
      });
  });
};
