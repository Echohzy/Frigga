import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Home extends Component {
  render(){
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.mainText}>I am Frigga!</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mainText: {
    fontSize: 30,
    fontWeight: "bold"
  }
});
