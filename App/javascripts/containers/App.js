import React, {Component} from 'react';

import {
  Navigator,
} from 'react-native';

import HomeContainer from "./home_container";

import ArticleContainer from "./article_container";

import SignInContainer from "./sign_in_container";

import CommentContainer from "./comment_container";

import EditorContainer from "./editor_container";

import UserContainer from './user_container';


import { connect } from "react-redux";

class App extends Component {
  constructor(props){
    super(props);
    this._renderScene = this._renderScene.bind(this);
  }
  _renderScene(route, navigator){
    var Content = "";
    if(!this.props.account.id){
      Content = SignInContainer;
    }else{
      switch(route.title){
        case "Home":
          Content = HomeContainer;
          break;
        case "Article":
          Content = ArticleContainer;
          break;
        case "SignIn":
          Content = SignInContainer;
          break;
        case "Comment":
          Content = CommentContainer;
          break;
        case "Editor":
          Content = EditorContainer;
          break;
        case "User":
          Content = UserContainer;
          break;
        default:
          Content = HomeContainer;
      }
    }
    var props = Object.assign({},{
      push: function(route, object){
        navigator.push(route, object);
      },
      pop: function(){
        navigator.pop();
      },
      ...route.props
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
}

var mapStateToProps = function(state){
  return {
    account: state.accountReducer.account
  };
}

export default connect(mapStateToProps)(App);