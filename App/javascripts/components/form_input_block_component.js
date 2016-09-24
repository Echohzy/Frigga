import React, { Component } from "react";

import {
  View,
  Text,
  TextInput
} from "react-native";

export default class FormInputBlockComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View>
        <Text>{this.props.title}</Text>
        <TextInput
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry||false}
          onChange={(event)=>this.props.onChange(event.nativeEvent.text)}/>
      </View>
    );
  }
};

