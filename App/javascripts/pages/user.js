import React, { Component } from 'react';

import {
  View
} from "react-native";

import UserComponent from '../components/user_component';

import FooterComponent from '../components/footer_component';

import HeaderComponent from '../components/header_component';

export default class User extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={{flex:1}}>
        <HeaderComponent title={"User"} />
        <UserComponent {...this.props}/>
        <FooterComponent push={(route)=>this.props.push(route)} selectedItem={"User"}/>
      </View>
    );
  }
}