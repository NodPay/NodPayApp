import {API_URL} from '../utils/consts';
import axios from 'axios';

export const checkValidPhoneNumber = phoneNumber => {
  return new Promise(async (resolve, reject) => {
    axios
      .post(API_URL + '/auth/valid-phone-number', {
        phoneNumber: phoneNumber,
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

export const getVerificationCode = phoneNumber => {
  return new Promise(async (resolve, reject) => {
    axios
      .post(API_URL + '/auth/send-verification-code', {
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
      .post(API_URL + '/auth/validate-verification-code', {
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
      cnicName,
      cnicDob,
      cnicStates,
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
      familyRelationName === '' ||
      address === '' ||
      cnicImage === '' ||
      cnicNumber === '' ||
      cnicName === '' ||
      cnicDob === '' ||
      cnicStates === '' ||
      password === ''
    ) {
      console.log('Invalid fields');
      reject('No form fields should be empty.');
    } else {
      axios
        .post(API_URL + '/auth/signup', {
          phoneNumber: phoneNumber,
          profileImage: 'placeholderProfileImage',
          firstName: firstName,
          lastName: lastName,
          username: username,
          age: age,
          gender: gender,
          email: email,
          familyRelationName: familyRelationName,
          address: address,
          cnicImage: 'placeholderCNICImage',
          cnicNumber: cnicNumber,
          cnicName: cnicName,
          cnicDob: cnicDob,
          cnicStates: cnicStates,
          password: password,
        })
        .then(response => {
          console.log('Successful signup');
          console.log(response);
          resolve(response.data);
        })
        .catch(error => {
          console.log("Couldn't signup");
          console.log(error);
          reject('Unable to signup');
        });
    }
  });
};

export const phoneLogin = (phoneNumber, password) => {
  console.log('phoneNumber', phoneNumber);
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL + '/auth/phone-login', {
        phoneNumber: phoneNumber,
        password: password,
      })
      .then(response => {
        console.log(response);
        resolve(response.data);
      })
      .catch(err => {
        console.log(err);
        reject('Unable to login using phone number');
      });
  });
};

export const emailLogin = (email, password) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API_URL + '/auth/email-login', {email: email, password: password})
      .then(response => {
        console.log(response);
        resolve(response.data);
      })
      .catch(err => {
        console.log(err);
        reject('Unable to login with email');
      });
  });
};
