import 'react-native-gesture-handler';
import React from 'react';

// where local file imported
import Router from './src/router';
import Store from './src/store';
import {LogBox} from 'react-native';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Store>
      <Router />
    </Store>
  );
};

export default App;
