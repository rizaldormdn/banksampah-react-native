import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigatorProps} from '../../type';

export default function EditProfile() {
  const navigation = useNavigation<RootStackNavigatorProps>();
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 30,
        }}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={24}
          color={'black'}
        />
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            margin: 'auto',
            marginLeft: '31%',
          }}>
          Edit Profile
        </Text>
      </View>
      <View></View>
    </View>
  );
}
