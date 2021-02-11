import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default class Profile extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Hello from PROFILE</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
