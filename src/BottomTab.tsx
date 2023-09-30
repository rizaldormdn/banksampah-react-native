import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Wallet from './pages/Wallet';

const Tabs = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#019BF1',
        },
      }}>
      <Tabs.Screen
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={'white'}
            />
          ),
        }}
        name="Homebottom"
        component={Home}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons
              name={focused ? 'wallet' : 'wallet-outline'}
              size={size}
              color={'white'}
            />
          ),
        }}
        name="walletbottom"
        component={Wallet}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <Ionicons
              name={focused ? 'person' : 'person-outline'}
              size={size}
              color={'white'}
            />
          ),
        }}
        name="profilebottom"
        component={Profile}
      />
    </Tabs.Navigator>
  );
}
