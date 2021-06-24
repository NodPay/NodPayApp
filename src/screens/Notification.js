import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, SafeAreaView, Image} from 'react-native';
import moment from 'moment';

//where local files imported
import {color, dimens} from '../utils';
import {PageTitle, SectionTitle, EmptyState, NotifActivityItem} from '../components';
import {ContactBackground, EmptyData, People1} from '../assets';

const Notification = () => {
  const [notifActivityData, setNotifActivityData] = useState([
    {
      photo: People1,
      name: 'Thania',
      action: 'request you money',
      info: 'For groceries',
      date: moment().subtract(1, "minutes"),
      type: 'out',
      amount: 75,
      isUnread: true,
    },
    {
      photo: People1,
      name: 'John',
      action: 'accept your friend request',
      info: '',
      date: moment().subtract(3, "hours"),
      type: '',
      amount: 0,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'Ben',
      action: 'paid you money',
      info: 'For groceries',
      date: moment().subtract(1, "days"),
      type: 'in',
      amount: 125,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'Charles',
      action: 'commented on your post',
      info: 'For groceries',
      date: moment().subtract(1, "days"),
      type: '',
      amount: 0,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'Connor',
      action: 'request you money',
      info: 'For groceries',
      date: moment().subtract(1, "days"),
      type: 'out',
      amount: 125,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'John',
      action: 'commented on your post',
      info: 'For groceries',
      date: moment().subtract(3, "days"),
      type: '',
      amount: 0,
      isUnread: false,
    },
    {
      photo: People1,
      name: 'Diana',
      action: 'request you money',
      info: 'For groceries',
      date: moment().subtract(4, "days"),
      type: 'out',
      amount: 125,
      isUnread: false,
    },
  ]);
  const [notifRequestData, setNotifRequestData] = useState(null);

  today = () => {
    var result = moment().hours(0);   
    return result._d;
  };

  yesterday = () => {
    var result = moment().subtract(1,'days').hours(0);   
    return result._d;
  };

  thisWeek = () => {
    var result = moment().subtract(7,'days').hours(0);   
    return result._d;
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Notifications"
        titleStyle={{color: color.btn_black}}
      />
      {notifActivityData == null && (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <EmptyState
            icon={EmptyData}
            iconSize={72}
            content={`You currently have\nno notifications`}
          />
        </View>
      )}
      <ScrollView>
        <SectionTitle
          title="Today"
          titleStyle={{
            fontSize: dimens.default_16,
          }}
          containerStyle={{
            paddingVertical: 0,
            paddingHorizontal: dimens.default_16,
            marginBottom: -20
          }}
        />
        {notifActivityData.filter((item) => item.date > today()).map((item, index) => (
          <NotifActivityItem
            key={index}
            photo={item.photo}
            name={item.name}
            action={item.action}
            info={item.info}
            date={item.date}
            type={item.type}
            amount={item.amount}
            isUnread={item.isUnread}
          />
        ))}
        <SectionTitle
          title="Yesterday"
          titleStyle={{
            fontSize: dimens.default_16,
          }}
          containerStyle={{
            paddingVertical: 0,
            paddingHorizontal: dimens.default_16,
            marginBottom: -20
          }}
        />
        {notifActivityData.filter((item) => item.date <= today() && item.date > yesterday()).map((item, index) => (
          <NotifActivityItem
            key={index}
            photo={item.photo}
            name={item.name}
            action={item.action}
            info={item.info}
            date={item.date}
            type={item.type}
            amount={item.amount}
            isUnread={item.isUnread}
          />
        ))}
        <SectionTitle
          title="This Week"
          titleStyle={{
            fontSize: dimens.default_16,
          }}
          containerStyle={{
            paddingVertical: 0,
            paddingHorizontal: dimens.default_16,
            marginBottom: -20
          }}
        />
        {notifActivityData.filter((item) => item.date <= today() && item.date <= yesterday() && item.date > thisWeek()).map((item, index) => (
          <NotifActivityItem
            key={index}
            photo={item.photo}
            name={item.name}
            action={item.action}
            info={item.info}
            date={item.date}
            type={item.type}
            amount={item.amount}
            isUnread={item.isUnread}
          />
        ))}
      </ScrollView>
      <Image source={ContactBackground} style={styles.bg_contact} />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg_greyy,
  },
  bg_contact: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    width: '100%',
    resizeMode: 'stretch',
  },
});
