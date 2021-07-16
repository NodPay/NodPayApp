import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useNavigation} from '@react-navigation/native';

//where local files imported
import {AddMoney, CashACheck, CloseRed, TransferToBank} from '../../assets';
import {dimens, fonts} from '../../utils';
import {Gap} from '../atoms';
import {MainActionList} from '../moleculs';

const MainAction = ({mainActionRef}) => {
  const navigation = useNavigation();

  return (
    <RBSheet
      ref={mainActionRef}
      height={375}
      openDuration={250}
      customStyles={{
        container: {
          borderTopLeftRadius: dimens.default_16,
          borderTopRightRadius: dimens.default_16,
          padding: dimens.default,
        },
      }}>
      <View>
        <View
          style={{
            paddingVertical: dimens.default,
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => mainActionRef.current.close()}>
            <Image source={CloseRed} style={{height: 40, width: 40}} />
          </TouchableOpacity>
          <Text style={styles.title}>What would you like to do?</Text>
        </View>
        <Gap t={dimens.supersmall} />
        <MainActionList
          icon={AddMoney}
          title="Add Money"
          description="Transfer money to your nod balance"
          onPress={() => navigation.navigate('QRCode')}
        />
        <MainActionList
          icon={TransferToBank}
          title="Transfer to Bank"
          description="Transfer money to your bank account"
          onPress={() => navigation.navigate('TransferToBank')}
        />
        <MainActionList
          icon={CashACheck}
          title="Cash A check"
          description="Cash a check directly to your nod balance"
          onPress={() => navigation.navigate('CashACheck')}
        />
      </View>
    </RBSheet>
  );
};

export default MainAction;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.noto_bold,
    fontSize: dimens.default_18,
    textAlign: 'center',
    flex: 1,
  },
});