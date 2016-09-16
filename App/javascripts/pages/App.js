import React, {Component} from 'react';

import {
  NavigatorIOS,
  Navigator,
} from 'react-native';

import {
  baseColor
} from '../../stylesheets/base.js';

import Home from "./home";

import Article from "./article.js";

import Editor from "./editor.js";



export default class App extends Component {
  constructor(props){
    super(props);
    this._renderScene = this._renderScene.bind(this);
  }
  _renderScene(route, navigator){
    var Content = "";
    switch(route.title){
      case "Home":
        Content = Home;
        break;
      case "Article":
        Content = Article;
        break;
      case "Editor":
        Content = Editor;
        break;
      default:
        Content = "Home";
    }

    var props = Object.assign({},{
      push: function(route, object){
        navigator.push(route, object);
      },
      pop: function(){
        navigator.pop();
      }
    });

    return <Content {...props} />
  }
  render(){
    return (
      <Navigator 
        initialRoute={{title : "Home", index: 0}}
        renderScene={this._renderScene}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid}
        style={{flex: 1}}/>
    );
  } 
};