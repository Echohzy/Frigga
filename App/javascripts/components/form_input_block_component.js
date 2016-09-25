import React, { Component } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet
} from "react-native";

export default class FormInputBlockComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={styles.inputBlockContainer}>
        <Text style={styles.inputBlockText}>{this.props.title+":"}</Text>
        <TextInput
          style={styles.inputBlockContent}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry||false}
          onChange={(event)=>this.props.onChange(this.props.attrName, event.nativeEvent.text)}/>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  inputBlockContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    marginBottom: 10,
    height: 20
  },
  inputBlockText: {
    width: 80,
    fontSize: 20,
  },
  inputBlockContent: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#e2e6e6",
    borderRadius: 4
  }
});

