module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  rules: {
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'prettier/prettier': ['error'],
  },
};
