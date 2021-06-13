import React, {useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

// where local file imported
import {Loading, Logo} from '../components';
import {color, wait} from '../utils';

const Loader = ({navigation}) => {
  useEffect(() => {
    wait(500).then(() => navigation.replace('GetStarted'));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Loading size="large" color={color.loading} />
      <Logo titleStyle={{color: color.btn_black}} />
    </SafeAreaView>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
