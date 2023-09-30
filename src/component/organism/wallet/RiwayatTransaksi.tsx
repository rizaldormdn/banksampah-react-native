import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RiwayatTransaksi() {
  const data = [
    {
      id: 1,
      title: 'Pembayaran',
      desc: 'Jemput Sampah',
      date: '30 September 2023',
      price: '25.000',
      icon: 'wallet',
    },
    {
      id: 2,
      title: 'Isi Saldo',
      desc: 'Bank Transfer',
      date: '30 September 2023',
      price: '100.000',
      icon: 'card',
    },
  ];
  return (
    <View style={{marginTop: 190, marginLeft: 20}}>
      <Text style={{fontSize: 18, color: 'black'}}>RiwayatTransaksi</Text>
      {data.map(item => (
        <View style={styles.card} key={item.id}>
          <View style={{display: 'flex', flexDirection: 'row', gap: 20}}>
            <Ionicons
              name={item.icon}
              size={30}
              color={'#019BF1'}
              style={{paddingTop: 10}}
            />
            <View>
              <Text style={{fontSize: 20, color: 'black'}}>{item.title}</Text>
              <Text style={{fontSize: 12, color: 'black'}}>{item.desc}</Text>
              <Text style={{marginTop: 10, fontSize: 14, color: 'gray'}}>
                {item.date}
              </Text>
            </View>
          </View>
          <Text style={{fontSize: 18, color: 'black', paddingTop: 5}}>
            {`Rp${item.price}`}
          </Text>
        </View>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    marginTop: 20,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 10,
    marginRight: 20,
  },
});
