import {View, Text} from 'react-native';
import React from 'react';
import Header from '../component/organism/profil/Header';
import Riwayat from '../component/organism/profil/Riwayat';

export default function Profile() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <Riwayat />
    </View>
  );
}
