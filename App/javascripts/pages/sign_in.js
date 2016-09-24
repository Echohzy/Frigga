import React, { Component } from "react";

import {
  View
} from 'react-native';

import SignInComponent from "../components/sign_in_component";

export default class SignIn extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={{flex:1}}>
        <SignInComponent 
        {...this.props}/>
      </View>
    );
  }
}
