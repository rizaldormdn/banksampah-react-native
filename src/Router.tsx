import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackNavigatorParamList} from '../type';
import BottomTabs from './BottomTab';
import ListRiwayat from './pages/ListRiwayat';
import DetailRiwayat from './pages/DetailRiwayat';
import EditProfile from './pages/EditProfile';

export default function Router() {
  const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="ListRiwayat" component={ListRiwayat} />
        <Stack.Screen name="DetailRiwayat" component={DetailRiwayat} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
