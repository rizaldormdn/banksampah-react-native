import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar, Button} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header() {
  return (
    <View
      style={{
        height: 150,
        backgroundColor: '#019BF1',
      }}>
      <View style={styles.notification}>
        <Ionicons name="notifications-outline" size={33} color={'white'} />
      </View>
      <View style={styles.container}>
        <Avatar.Image
          style={styles.avatar}
          source={require('../../../assets/vespa.jpg')}
          size={40}
        />
        <View>
          <Text style={{color: 'black', fontSize: 16}}>Hi, Jhon Doe</Text>
          <Text style={{color: 'black', marginTop: 5, fontSize: 12}}>
            Saldo Anda: Rp100.000
          </Text>
        </View>
        <Button
          onPress={() => {}}
          color={'#FF7F33'}
          mode="contained"
          buttonColor="#FF7F33">
          isi saldo
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  notification: {
    top: 25,
    left: 340,
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'white',
    position: 'absolute',
    top: 100,
    left: 20,
    width: '90%',
    borderRadius: 10,
    borderColor: '#019BF1',
    borderWidth: 0.5,
  },
  avatar: {
    position: 'absolute',
    bottom: 65,
    left: 24,
    backgroundColor: 'white',
    borderColor: '#019BF1',
    borderWidth: 1,
  },
});
