import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Header from '../component/organism/wallet/Header';
import RiwayatTransaksi from '../component/organism/wallet/RiwayatTransaksi';

export default function Wallet() {
  return (
    <View style={{flex: 1}}>
      <Header />
      <RiwayatTransaksi />
    </View>
  );
}
