import 'react-native-gesture-handler';
import React from 'react';

// where local file imported
import Router from './src/router';
import Store from './src/store';

const App = () => {
  return (
    <Store>
      <Router />
    </Store>
  );
};

export default App;
