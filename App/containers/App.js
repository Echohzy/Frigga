import React, {Component} from 'react';

import {
  NavigatorIOS
} from 'react-native';

import Home from "../components/home";

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <NavigatorIOS 
        initialRoute={{
          component : Home,
          title : "Home"
        }}
        style={{flex: 1}}/>
    );
  } 
};