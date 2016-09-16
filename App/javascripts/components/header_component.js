import React, { Component } from "react";

import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome.js';

export default class HeaderComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftButtonBlock}>
          {this.props.pop ?
            <TouchableOpacity onPress={()=>this.props.pop()}>
              <Icon name="angle-left" size={30}/>
            </TouchableOpacity> : <View />}
        </View>
        <View style={styles.headerTitleBlock}>
          <Text style={styles.headerTitleBlockText}>{this.props.title}</Text>
        </View>
        <View style={styles.headerRightButtonBlock}>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    paddingTop:20,
    flexDirection: "row",
    flexWrap: "nowrap",
    borderBottomWidth: 1,
    borderColor: "#e2e6e6"
  },
  headerLeftButtonBlock: {
    width: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  headerLeftButtonBlockIcon: {

  },
  headerTitleBlock: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitleBlockText: {
    fontSize: 20
  },
  headerRightButtonBlock: {
    width: 40
  }
});