import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MainStackNavigator from './src/navigations/Navigator';



// Initialize Firebase
// JOHN PLS FILL WITH FIREBASE INFO
/*const firebase = require("firebase");
const firebaseConfig = {
	apiKey: "<FILL HERE JOHN>",
	authDomain: "<>",
	databaseURL: "<>",
	storageBucket: "",
};
firebase.initializeApp(firebaseConfig);*/


/*export default class App extends React.Component {
  render() {
    return <MainStackNavigator/>;
  }
}*/

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, world!</Text>
      </View>
	);
  }
}
