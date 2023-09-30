import React from 'react';
import {View, ScrollView} from 'react-native';
import Article from '../component/organism/home/Article';
import Header from '../component/organism/home/Header';
import Layanan from '../component/organism/home/Layanan';
import Riwayat from '../component/organism/home/Riwayat';

export default function Home() {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <Header />
      <Layanan />
      <Riwayat />
      <Article />
      <View style={{marginBottom: '15%'}} />
    </ScrollView>
  );
}
