import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MainStackNavigator from './src/navigations/Navigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, world!</Text>
      </View>
	);
  }
}
