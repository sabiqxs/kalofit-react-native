import React from 'react';
import { StyleSheet,
    AppRegistry,
    Text,
    View } from 'react-native';
import Routers from "./Router";

export default class App extends React.Component {
  render() {
    return (
        <Routers/>
    );
  }
}

AppRegistry.registerComponent('KaloFit', () => App);
