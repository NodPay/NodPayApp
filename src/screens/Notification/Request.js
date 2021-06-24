import React, {useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import moment from 'moment';

//where local files imported
import {dimens} from '../../utils';
import {RequestMoneyItem} from '../../components';
import {People1} from '../../assets';

const NotificationRequest = () => {
  const [notifRequestData, setNotifRequestData] = useState([
    {
      photo: People1,
      name: 'Connor',
      action: 'request you money',
      info: 'For groceries',
      date: '2m',
      type: 'out',
      amount: 125,
      isRequested: false,
    },
    {
      photo: People1,
      name: 'You',
      action: 'requested Bruno',
      info: 'For groceries',
      date: '1m',
      type: 'in',
      amount: 75,
      isRequested: true,
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      {notifRequestData.map((item, index) => (
        <RequestMoneyItem
          key={index}
          photo={item.photo}
          name={item.name}
          action={item.action}
          info={item.info}
          date={item.date}
          type={item.type}
          amount={item.amount}
          isRequested={item.isRequested}
        />
      ))}
    </ScrollView>
  );
};

export default NotificationRequest;

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimens.default_16,
  }
});
