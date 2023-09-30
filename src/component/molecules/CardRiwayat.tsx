import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigatorProps} from '../../../type';

export default function CardRiwayat() {
  const navigation = useNavigation<RootStackNavigatorProps>();
  return (
    <View
      style={{
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 0.5,
        padding: 10,
        marginRight: 15,
        marginTop: 10,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text style={{color: 'black'}}>30 September 2023</Text>
        <Text style={{color: 'black'}}>+15pt</Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text style={{fontSize: 18, color: 'black'}}>Berat sampah: 4kg</Text>
        <Text style={{fontSize: 18, color: 'black'}}>Rp15.000</Text>
      </View>
      <Button
        onPress={() => navigation.navigate('DetailRiwayat')}
        mode="contained"
        buttonColor="#FF7F33">
        Lihat Detail
      </Button>
    </View>
  );
}
