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
        reject('Unable to validate phone number');
      });
  });
};

export const getVerificationCode = phoneNumber => {
  return new Promise(async (resolve, reject) => {
    axios
      .post(API_URL + 'auth/send-verification-code', {
        phoneNumber: phoneNumber,
      })
      .then(response => {
        console.log(response.data);
        resolve('Sent Verification Code');
      })
      .catch(error => {
        reject('Unable to send verification code');
      });
  });
};

export const validateVerificationCode = (phoneNumber, code) => {
  return new Promise(async (resolve, reject) => {
    axios
      .post(API_URL + 'auth/validate-verification-code', {
        phoneNumber: phoneNumber,
        code: code,
      })
      .then(response => {
        console.log(response.data);
        resolve(response.data.isValid);
      })
      .catch(error => {
        reject('Unable to validate phone number');
      });
  });
};

export const signup = formRegister => {
  return new Promise((resolve, reject) => {
    const {
      phoneNumber,
      profileImage,
      firstName,
      lastName,
      username,
      age,
      gender,
      email,
      bio,
      familyRelationName,
      address,
      cnicImage,
      cnicNumber,
      password,
    } = formRegister;
    if (
      phoneNumber === '' ||
      profileImage === '' ||
      firstName === '' ||
      lastName === '' ||
      username === '' ||
      age === '' ||
      gender === '' ||
      email === '' ||
      bio === '' ||
      familyRelationName === '' ||
      address === '' ||
      cnicImage === '' ||
      cnicNumber === '' ||
      password === ''
    ) {
      reject('No form fields should be empty.');
    }
    axios
      .post(API_URL, 'auth/signup', {
        phoneNumber: phoneNumber,
        profileImage: profileImage,
        firstName: firstName,
        lastName: lastName,
        username: username,
        age: age,
        gender: gender,
        email: email,
        bio: bio,
        familyRelationName: familyRelationName,
        address: address,
        cnicImage: cnicImage,
        cnicNumber: cnicNumber,
        password: password,
      })
      .then(response => {
        resolve('Successful signup');
      })
      .catch(error => {
        reject('Unable to signup');
      });
  });
};
