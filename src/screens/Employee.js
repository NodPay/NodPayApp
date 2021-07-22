import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {Button, EmployeeItem, Gap, PageTitle} from '../components';

const Employee = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={color.bg_grey} />
      <PageTitle
        title="Employee"
        titleStyle={{color: color.btn_black}}
        isBlackArrow
      />
      {/* Employee Count */}
      <View
        style={{
          paddingTop: dimens.default,
          paddingHorizontal: dimens.default,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={[styles.wrapper, {marginRight: 8}]}>
          <Text style={styles.number}>8</Text>
          <Text style={styles.description}>Total Employee</Text>
        </View>
        <View
          style={[
            styles.wrapper,
            {
              marginLeft: 8,
              backgroundColor: color.green3,
              borderColor: color.green,
            },
          ]}>
          <Text style={[styles.number, {color: color.green}]}>6</Text>
          <Text style={styles.description}>Currently Online</Text>
        </View>
        {/* Employee Count End */}
      </View>
      <View style={{padding: dimens.default}}>
        <Text
          style={[
            styles.number,
            {color: color.btn_black, fontSize: dimens.default_18},
          ]}>
          Your Employee
        </Text>
        <Gap t={dimens.default} />
        {/* Employe list */}

        <EmployeeItem isOnline />

        {/* Employe list end */}
      </View>
      {/* Bottom */}
      <View style={styles.bottom}>
        <Button
          title="+ New Employee"
          titleStyle={{color: color.btn_white}}
          btnStyle={{backgroundColor: color.btn_black}}
        />
      </View>
      {/* Bottom End */}
    </SafeAreaView>
  );
};

export default Employee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_grey,
  },
  wrapper: {
    borderWidth: 2,
    borderColor: color.bg_color,
    justifyContent: 'center',
    alignItems: 'center',
    height: 78,
    flex: 1,
    borderRadius: 16,
    backgroundColor: color.purple,
  },
  number: {
    fontFamily: fonts.sofia_bold,
    fontSize: 24,
    color: color.bg_color,
  },
  description: {
    fontFamily: fonts.sofia_regular,
    fontSize: 14,
    color: color.btn_black,
  },
  bottom: {
    paddingVertical: dimens.default_16,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: dimens.default_16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
