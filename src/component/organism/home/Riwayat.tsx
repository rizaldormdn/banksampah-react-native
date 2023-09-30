import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardRiwayat from '../../molecules/CardRiwayat';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigatorProps} from '../../../../type';

export default function Riwayat() {
  const navigation = useNavigation<RootStackNavigatorProps>();
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, color: 'black'}}>Riwayat</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
          }}>
          <Text
            onPress={() => navigation.navigate('ListRiwayat')}
            style={{fontSize: 16, color: '#FF7F33', marginBottom: 2}}>
            lihat semua
          </Text>
          <Ionicons name="arrow-forward" size={18} color={'#FF7F33'} />
        </View>
      </View>
      <CardRiwayat />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 18,
  },
});
