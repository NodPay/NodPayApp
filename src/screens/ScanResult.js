import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import {Next} from '../assets';

//where local files imported
import {Button, Gap, InputText, PageTitle} from '../components';
import useStateContext from '../store/useStateContext';
import {color, dimens} from '../utils';

const ScanResult = ({navigation, route}) => {
  const {state, dispatch} = useStateContext();
  let {path} = route.params.data;

  const [data, setData] = useState({
    cnicNumber: 'B12454676',
    name: 'Rober Langdon',
    dateOfBirth: 'March 10, 1995',
    states: 'United States',
    image: path,
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <PageTitle
          title="CNIC"
          isBlackArrow
          titleStyle={{color: color.btn_black}}
        />
        <Gap t={dimens.default_16} />
        <Image source={{uri: path}} style={styles.image} />
        <Gap t={dimens.default_16} />
        <InputText
          label="CNIC Number"
          value={data.cnicNumber}
          onChangeText={val => setData({...data, cnicNumber: val})}
        />
        <InputText
          label="Name"
          value={data.name}
          onChangeText={val => setData({...data, name: val})}
        />
        <InputText
          label="Date of Birth"
          value={data.dateOfBirth}
          onChangeText={val => setData({...data, dateOfBirth: val})}
        />
        <InputText
          label="States"
          value={data.states}
          onChangeText={val => setData({...data, states: val})}
        />
        <Gap b={dimens.default_16} />
        <View style={styles.wrap_btn}>
          <Button
            onPress={() => {
              navigation.navigate('Register');
              dispatch({type: 'SET_ACTIVE_STEP_PAYLOAD', payload: 3});
              dispatch({type: 'SET_CNIC_DATA', payload: data});
              dispatch({type: 'SET_BUTTON', payload: false});
            }}
            title="Countinue With This"
            btnStyle={{
              backgroundColor: color.btn_black,
            }}
            titleStyle={{color: 'white'}}
            iconRight={Next}
          />
        </View>
        <Gap b={dimens.default_16} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScanResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_grey,
    paddingHorizontal: dimens.default_16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: dimens.default_12,
    resizeMode: 'cover',
  },
});
