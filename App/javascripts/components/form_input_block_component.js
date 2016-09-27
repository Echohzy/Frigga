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
        { this.props.title ? 
          <View style={styles.inputBlockTextBlock}>
            <Text style={styles.inputBlockText}>{this.props.title+":"}</Text>
          </View> : <View />}
        <View style={styles.inputBlock}>
          <TextInput
            style={this.props.multiline ? [styles.inputBlockContent,{height: 80}]: styles.inputBlockContent}
            placeholder={this.props.placeholder}
            secureTextEntry={this.props.secureTextEntry||false}
            multiline={this.props.multiline||false}
            onChange={(event)=>this.props.onChange(this.props.attrName, event.nativeEvent.text)}/>
        </View>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  inputBlockContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    marginBottom: 20,
  },
  inputBlockTextBlock: {
    height: 30,
    width: 80,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  inputBlockText: {
    fontSize: 20,
  },
  inputBlock: {
    flex:1,
    borderWidth: 1,
    borderColor: "#e2e6e6",
    padding:4
  },
  inputBlockContent: {
    flex: 1,
  }
});

