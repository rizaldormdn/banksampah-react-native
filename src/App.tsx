/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Template} from './component/template/Template';
import Router from './Router';
import {StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <Template>
      <StatusBar barStyle={'light-content'} backgroundColor={'#001524'} />
      <Router />
    </Template>
  );
}

export default App;
