/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import RotasAplicativo from './src/routes';
const AppContainer = createAppContainer(RotasAplicativo);
import ReactoTron from './src/config/ReactotronConfig';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
