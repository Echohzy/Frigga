import React, {Component} from 'react';

import {
  NavigatorIOS
} from 'react-native';

import {
  baseColor
} from '../../stylesheets/base.js';

import HomeContainer from "../containers/home_container";

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <NavigatorIOS 
        initialRoute={{
          component : HomeContainer,
          title : "Home"
        }}
        itemWrapperStyle={{backgroundColor: baseColor.bodyBackground}}
        style={{flex: 1}}/>
    );
  } 
};