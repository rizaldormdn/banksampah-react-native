import React from 'react';
import {FlatList} from 'react-native';
import {StyleSheet, View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header() {
  const data = [
    {id: 1, icon: 'wallet-outline', title: 'Isi Saldo'},
    {id: 2, icon: 'card-outline', title: 'Transfer Bank'},
    {id: 3, icon: 'wallet-outline', title: 'Transfer'},
    {id: 4, icon: 'card-outline', title: 'Tarik Koin'},
    {id: 5, icon: 'wallet-outline', title: 'Kode Bayar'},
    {id: 6, icon: 'card-outline', title: 'Bayar'},
  ];
  return (
    <View
      style={{
        height: 150,
        backgroundColor: '#019BF1',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          top: 20,
        }}>
        <Text style={{fontSize: 20, color: 'white'}}>Rp200.000</Text>
        <Text style={{fontSize: 20, color: 'white'}}>20.000</Text>
      </View>
      <View style={styles.container}>
        <FlatList
          style={{width: '100%'}}
          numColumns={3}
          data={data}
          renderItem={({item}) => (
            <View
              style={{paddingHorizontal: 5, paddingVertical: 10}}
              key={item.id}>
              <View style={{width: 100}}>
                <Ionicons
                  name={item.icon}
                  size={50}
                  color={'#019BF1'}
                  style={{textAlign: 'center'}}
                />
                <Text
                  style={{color: '#019BF1', textAlign: 'center', fontSize: 12}}>
                  {item.title}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
    position: 'absolute',
    top: 90,
    left: 20,
    width: '90%',
    borderRadius: 10,
    borderColor: '#019BF1',
    borderWidth: 0.5,
  },
});
