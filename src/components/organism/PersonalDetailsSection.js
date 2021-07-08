import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

// where local files imported
import {color, dimens, fonts} from '../../utils';
import {Gap} from '../atoms';
import {SectionTitle, InputPhoto, InputText, InputOption} from '../moleculs';

const PersonalDetailsSection = ({isFamilyRelation, withoutSectionTitle}) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    age: '',
    gender: '',
    email: '',
    shortBio: '',
  });

  const [familyRelation, setFamilyRelation] = useState('');

  console.log(user);

  if (isFamilyRelation) {
    return (
      <View>
        <SectionTitle
          containerStyle={{
            padding: 0,
            // paddingHorizontal: dimens.default_16,
          }}
          title="Family and Relation"
          titleStyle={{color: 'black', fontSize: dimens.default_22}}
          subtitle="Enter your father, mother or spouse name"
          subTitleStyle={{
            color: color.grey,
            fontSize: dimens.default_16,
          }}
        />
        <InputText
          value={familyRelation}
          onChangeText={value => setFamilyRelation(value)}
        />
        <Gap b={dimens.default_16} />
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled">
      {!withoutSectionTitle && (
        <SectionTitle
          containerStyle={{
            padding: 0,
            // paddingHorizontal: dimens.default_16,
          }}
          title="Personal Details"
          titleStyle={{color: 'black', fontSize: dimens.default_22}}
          subtitle="Tell us more about you"
          subTitleStyle={{
            color: color.grey,
            fontSize: dimens.default_16,
          }}
        />
      )}
      <Gap t={dimens.default_16} />
      <InputPhoto />
      <InputText
        label="First Name"
        value={user.firstName}
        onChangeText={value => setUser({...user, firstName: value})}
      />
      <InputText
        label="Last Name"
        value={user.lastName}
        onChangeText={value => setUser({...user, lastName: value})}
      />
      <InputText
        label="Username"
        value={user.username}
        onChangeText={value => setUser({...user, username: value})}
      />
      <InputText
        label="Age"
        keyboardType="number-pad"
        value={user.age}
        onChangeText={value => setUser({...user, age: value})}
      />
      <Gap t={dimens.default_16} />
      <InputOption user={user} setUser={setUser} />
      <InputText
        label="Email"
        value={user.email}
        keyboardType="email-address"
        onChangeText={value => setUser({...user, email: value})}
      />
      <InputText
        label="Short Bio"
        value={user.shortBio}
        onChangeText={value => setUser({...user, shortBio: value})}
      />
      <Gap b={dimens.default_16} />
    </ScrollView>
  );
};

export default PersonalDetailsSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
