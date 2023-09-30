import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

export type props = {
  children: React.ReactNode;
};
export const Template = ({children}: props) => {
  return <SafeAreaView style={styles.safeAreaStyle}>{children}</SafeAreaView>;
};
const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
