import {View, Text, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigatorProps} from '../../type';

export default function DetailRiwayat() {
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
            marginLeft: '28%',
          }}>
          Detail Riwayat
        </Text>
      </View>
      <View style={{marginLeft: 28, marginTop: 10}}>
        <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold'}}>
          Alamat Penjemputan
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
            gap: 10,
          }}>
          <Ionicons size={18} color={'black'} name="location" />
          <Text style={{color: 'black', fontSize: 16}}>
            JL. Kebon Jeruk, Gg. Jambu I No. 25, Jakarta Barat
          </Text>
        </View>
        <Text
          style={{
            marginTop: 20,
            color: 'black',
            fontWeight: 'bold',
            fontSize: 24,
          }}>
          Tanggal Penjemputan
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
            gap: 10,
          }}>
          <Ionicons size={18} color={'black'} name="calendar" />
          <Text style={{color: 'black', fontSize: 16}}>
            23/09/2023, 13.41 AM
          </Text>
        </View>
        <Text style={{marginTop: 20, color: 'black', fontWeight: 'bold'}}>
          Berat Sampah: 10kg
        </Text>
        <Image
          style={{marginTop: 20, width: '95%', height: 200, borderRadius: 10}}
          source={{
            uri: 'https://indonesiasustainability.com/wp-content/uploads/2022/07/Proses-Lengkap-dan-4-Contoh-Daur-Ulang-Sampah-Plastik-1-scaled.jpg',
          }}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 40,
          }}>
          <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold'}}>
            Total Biaya
          </Text>
          <Text style={{marginRight: 20, fontSize: 22, color: 'black'}}>
            Rp. 50.000
          </Text>
        </View>
      </View>
    </View>
  );
}
