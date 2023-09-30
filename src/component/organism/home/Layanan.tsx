import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Layanan() {
  const data = [
    {id: 1, title: 'Jemput Sampah', icon: '../../assets/vespa.jpg'},
    {id: 2, title: 'Bank Sampah', icon: '../../assets/vespa.jpg'},
  ];
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, color: 'black'}}>Layanan</Text>
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
      <FlatList
        style={{
          marginTop: 20,
        }}
        nestedScrollEnabled={true}
        scrollEnabled={false}
        numColumns={10}
        data={data}
        renderItem={({item}) => (
          <View
            key={item.id}
            style={{
              width: 100,
              marginHorizontal: 10,
              backgroundColor: '#F3FAFF',
              padding: 20,
              borderRadius: 10,
            }}>
            <Image
              style={{width: 60, height: 60, borderRadius: 100}}
              source={require('../../../assets/vespa.jpg')}
            />
            <Text style={{textAlign: 'center', color: 'black'}}>
              {item.title}
            </Text>
          </View>
        )}
      />
      {/* </ScrollView> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 26,
  },
});
