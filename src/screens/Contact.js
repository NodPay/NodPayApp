import React, {useState, useRef, useMemo, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import AlphabetList from 'react-native-flatlist-alphabet';

//where local files imported
import {color, dimens, fonts} from '../utils';
import {Button, ContactItem, Gap, InputSearch, PageTitle} from '../components';
import {
  ContactBackground,
  NoContact,
  CloseRed,
  Facebook,
  FacebookWhite,
} from '../assets';

const Contact = ({navigation}) => {
  const [friendData, setFriendData] = useState([]);
  const [getContact, setGetContact] = useState(true);
  const [isContact, setIsContact] = useState(false);
  const [isFacebook, setIsFacebook] = useState(false);
  const [search, setSearch] = useState('');

  // ref
  const bottomSheetRef = useRef();

  // variables
  const snapPoints = useMemo(() => ['0%', '100%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  var initialData = [
    {
      id: 0,
      name: 'Andi',
      phoneNumber: '+62 696969699696',
      added: false,
    },
    {
      id: 1,
      name: 'Bae',
      phoneNumber: '+62 696969699696',
      added: false,
    },
    {
      id: 3,
      name: 'Garry',
      phoneNumber: '+62 696969699696',
      added: false,
    },
    {
      id: 4,
      name: 'Widy',
      phoneNumber: '+62 696969699696',
      added: false,
    },
    {
      id: 5,
      name: 'Talha',
      phoneNumber: '+62 696969699696',
      added: true,
    },
    {
      id: 6,
      name: 'Gagan',
      phoneNumber: '+62 696969699696',
      added: true,
    },
    {
      id: 7,
      name: 'Muhammad',
      phoneNumber: '+62 696969699696',
      added: true,
    },
  ];

  const [data, setData] = useState(initialData);

  const onSearch = () => {
    let filtered = initialData.filter(
      item => item.name.toLowerCase() == search.toLowerCase(),
    );
    setData(filtered);
  };

  const onAdd = item => {
    item.added = true;
    let a = data.filter(res => res.id != item.id);
    let b = a.concat(item).sort((a, b) => a.id - b.id);
    setData(b);
    setFriendData(data);
  };

  const EmptyState = () => {
    return (
      <View style={styles.empty_state_container}>
        <Image source={NoContact} style={styles.icons} />
        <Text style={styles.desc}>
          You currently have no friend. Find who you know by connecting your
          NodPay to your phone contact or Facebook
        </Text>
      </View>
    );
  };

  const RenderGetContact = () => {
    return (
      <View>
        <Text style={styles.add_friend_section_desc}>
          Connect with Facebook to see your frend that use NodPay
        </Text>
        <View
          style={{
            paddingHorizontal: dimens.default_16,
            paddingVertical: dimens.default_16,
          }}>
          <Button
            iconLeft={FacebookWhite}
            title="Sign in with Facebook"
            onPress={() => {
              setIsFacebook(true);
              setIsContact(false);
            }}
            btnStyle={{
              backgroundColor: '#548EFF',
              borderColor: color.btn_white,
              borderWidth: 1,
              marginBottom: dimens.supersmall,
            }}
            titleStyle={{fontFamily: fonts.sofia_bold, color: 'white'}}
          />
          <InputSearch
            placeholder="Filter by Name"
            value={search}
            onChangeText={val => {
              setSearch(val);
            }}
            onSubmitEditing={() => {
              if (search == '') {
                setData(initialData);
              } else {
                onSearch();
              }
            }}
          />
        </View>
      </View>
    );
  };

  const RenderFacebook = () => {
    return (
      <View
        style={{
          paddingLeft: dimens.default_16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={Facebook} height={40} width={40} />
          <Text
            style={{
              fontFamily: fonts.sofia_regular,
              textAlign: 'left',
              color: color.grey,
              fontSize: dimens.default_18,
              padding: dimens.default_16,
            }}>
            You currently have{' '}
            <Text style={{color: '#6366E4', fontFamily: fonts.sofia_bold}}>
              19 friends
            </Text>{' '}
            {`using \nNodPay on Facebook`}{' '}
          </Text>
        </View>
        <InputSearch
          placeholder="Filter by Name"
          value={search}
          onChangeText={val => {
            setSearch(val);
          }}
          onSubmitEditing={() => {
            if (search == '') {
              setData(initialData);
            } else {
              onSearch();
            }
          }}
        />
        <Gap t={dimens.default_16} />
      </View>
    );
  };

  // render contact state
  const [id, setId] = useState('');
  const [show, setShow] = useState(false);

  const RenderContact = () => {
    const [current, setCurrent] = useState(0);

    const btn = [
      {
        title: 'All',
      },
      {
        title: 'Local',
      },
      {
        title: 'International',
      },
    ];

    const FilterButton = ({title, onPress, index}) => {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPress}
          style={{
            paddingHorizontal: 15,
            marginLeft: 8,
            height: 25,
            borderRadius: 10,
            backgroundColor: current === index ? color.bg_color : 'lightgray',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: fonts.sofia_regular,
              color: current === index ? 'white' : color.bg_color,
              fontSize: dimens.default_16,
            }}>
            {title}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View>
        <KeyboardAvoidingView
          behavior="height"
          style={{paddingHorizontal: dimens.default_16}}>
          <InputSearch
            placeholder="Friend Name, Phone Number"
            backgroundColor="white"
          />
        </KeyboardAvoidingView>
        <Gap t={dimens.default_16} />
        <View style={{flexDirection: 'row', paddingLeft: dimens.default_16}}>
          {btn.map((item, index) => {
            return (
              <FilterButton
                index={index}
                title={item.title}
                onPress={() => setCurrent(index)}
              />
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <PageTitle
        isBlackArrow
        title="Contacts"
        titleStyle={{color: color.btn_black}}
        navigation={navigation}
      />
      {friendData == null && (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <EmptyState />
        </View>
      )}
      {friendData != null && <RenderContact />}
      <Gap t={dimens.default_16} />
      <AlphabetList
        style={{flex: 1}}
        data={[
          {
            id: 0,
            key: 'a',
            value: 'Andi',
            name: 'Andi',
            phoneNumber: '+62 699 6969',
          },
          {
            id: 2,
            key: 'b',
            value: 'Bae',
            name: 'Bae',
            phoneNumber: '+62 699 6969',
          },
          {
            id: 3,
            key: 'g',
            value: 'Garry',
            name: 'Garry',
            phoneNumber: '+62 699 6969',
          },
        ]}
        renderSectionHeader={section => (
          <View
            style={{
              paddingLeft: dimens.default_16,
              paddingVertical: 8,
            }}>
            <Text
              style={{
                color: color.btn_black,
                fontFamily: fonts.sofia_bold,
                marginLeft: 8,
              }}>
              {section.title}
            </Text>
          </View>
        )}
        renderItem={item => (
          <ContactItem
            {...item}
            isContact
            show={item.id == id && show == true ? true : false}
            onBlock={() => {
              setShow(false);
              setId('');
            }}
            onReport={() => {
              setShow(false);
              setId('');
            }}
            onUnfriend={() => {
              setShow(false);
              setId('');
            }}
            onPress={() => {
              setId(item.id);
              setShow(true);
            }}
          />
        )}
      />
      <View style={styles.wrapBtn}>
        <Button
          onPress={() => bottomSheetRef.current?.expand()}
          title="+ Add Friend"
          btnStyle={{backgroundColor: color.btn_black}}
          titleStyle={{color: color.btn_white_2}}
        />
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View
          style={{
            flex: isContact || isFacebook ? 0 : 1,
            backgroundColor: 'white',
            paddingVertical: dimens.medium,
          }}>
          <PageTitle
            isCloseMode
            title="Add Friends"
            titleStyle={{color: color.btn_black}}
            navigation={navigation}
            onPressClose={() => {
              bottomSheetRef.current?.close();
              setGetContact(true);
              setIsFacebook(false);
              setIsContact(false);
            }}
          />
          {getContact && (
            <View style={styles.add_friend_section}>
              <Text style={styles.add_friend_section_desc}>
                By allowing access to your contact or Facebook you can connect
                with your friend that use NodPay
              </Text>
            </View>
          )}
          {getContact && (
            <View
              style={{
                paddingHorizontal: dimens.default_16,
                marginBottom: dimens.default_16,
              }}>
              <Button
                iconLeft={FacebookWhite}
                title="Sign in with Facebook"
                onPress={() => {
                  setGetContact(false);
                  setIsFacebook(true);
                }}
                btnStyle={styles.btnSigninWithFacebook}
                titleStyle={{fontFamily: fonts.sofia_bold, color: 'white'}}
              />
              <Button
                onPress={() => {
                  setGetContact(false);
                  setIsContact(true);
                }}
                title="Allow Contact Access"
                btnStyle={styles.btnAllowContactAccess}
                titleStyle={{color: color.btn_white_2}}
              />
            </View>
          )}
        </View>
        {isContact && <RenderGetContact />}
        {isContact && (
          <BottomSheetFlatList
            keyExtractor={item => item.id}
            data={data}
            renderItem={({item}) => (
              <ContactItem {...item} onPress={() => onAdd(item)} />
            )}
          />
        )}
        {isFacebook && <RenderFacebook />}
        {isFacebook && (
          <BottomSheetFlatList
            keyExtractor={item => item.id}
            data={data}
            renderItem={({item}) => (
              <ContactItem {...item} onPress={() => onAdd(item)} />
            )}
          />
        )}
      </BottomSheet>
      <Image source={ContactBackground} style={styles.bg_contact} />
    </SafeAreaView>
  );
};

export default Contact;

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
    zIndex: -2,
    width: '100%',
    resizeMode: 'stretch',
  },
  icons: {
    height: 101,
    width: 101,
    resizeMode: 'cover',
  },
  empty_state_container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: dimens.large_48,
  },
  desc: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_16,
    color: '#818386',
    textAlign: 'center',
    marginTop: dimens.default_16,
  },
  wrapBtn: {
    padding: dimens.default_22,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    fontFamily: fonts.sofia_bold,
    fontSize: dimens.default_18,
    textAlign: 'center',
    padding: dimens.default_16,
  },
  close_icon: {
    height: dimens.large_40,
    width: dimens.large_40,
  },
  add_friend_section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  add_friend_section_desc: {
    fontFamily: fonts.sofia_regular,
    fontSize: dimens.default_18,
    padding: dimens.default_16,
    color: color.grey,
    textAlign: 'center',
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
  btnAllowContactAccess: {
    backgroundColor: color.btn_black,
    marginBottom: -8,
    height: 44,
  },
  btnSigninWithFacebook: {
    backgroundColor: '#548EFF',
    borderColor: color.btn_white,
    borderWidth: 1,
    marginBottom: dimens.supersmall,
  },
});
