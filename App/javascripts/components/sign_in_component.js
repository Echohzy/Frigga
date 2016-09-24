import React, {Component} from "react";

import {
  View,
  TextInput,
  Text
} from "react-native";

import FormInputBlockComponent from "./form_input_block_component";

export default class SignInComponent extends Component {
  render(){
    return (
      <View style={{flex:1}}>
        <FormInputBlockComponent
          {...this.props.login_name}
          onChange={this.props.onChange}/>
        <FormInputBlockComponent 
          {...this.props.password}
          onChange={this.props.onChange}/>
      </View>
    );
  }
}