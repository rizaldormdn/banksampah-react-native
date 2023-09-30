import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar, Button} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RootStackNavigatorProps} from '../../../../type';

export default function Header() {
  const navigation = useNavigation<RootStackNavigatorProps>();
  return (
    <View
      style={{
        height: 150,
        backgroundColor: '#019BF1',
      }}>
      <View style={styles.notification}>
        <Text style={{fontSize: 16, color: 'white'}}>Logout</Text>
        <Ionicons name="log-out" size={24} color={'white'} />
      </View>
      <View style={styles.container}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 15,
          }}>
          <Avatar.Image
            source={require('../../../assets/vespa.jpg')}
            size={40}
          />
          <View style={{width: '70%'}}>
            <Text style={{color: 'black', fontSize: 16, marginTop: 8}}>
              Jhon Doe
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons size={18} name="location" color={'gray'} />
              <Text style={{color: 'black', fontSize: 14}}>
                JL. Kebon Jeruk, Gg. Jambu I No. 25, Jakarta Barat
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Ionicons name="call" size={18} color={'gray'} />
              <Text style={{fontSize: 14, color: 'black'}}>087740902822</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                marginTop: 15,
              }}>
              <Ionicons name="mail" color={'gray'} size={18} />
              <Text
                style={{
                  fontSize: 14,
                  marginTop: 5,
                  color: 'black',
                  paddingBottom: 5,
                }}>
                jhondoe@gmail.com
              </Text>
            </View>
          </View>
          <View style={{marginTop: 2}}>
            <Ionicons
              name="create"
              color={'gray'}
              size={20}
              onPress={() => navigation.navigate('EditProfile')}
            />
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
            width: '100%',
          }}>
          <Text style={{color: 'gray'}}>Saldo Saya: Rp100.000</Text>
          <Button
            onPress={() => {}}
            color={'#FF7F33'}
            mode="contained"
            buttonColor="#FF7F33">
            isi saldo
          </Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  notification: {
    top: 35,
    left: 290,
    padding: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  container: {
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
    bottom: 70,
    left: 24,
    backgroundColor: 'white',
    borderColor: '#019BF1',
    borderWidth: 1,
  },
});
