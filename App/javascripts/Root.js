import React, {Component} from 'react';

import {
  NavigatorIOS,
  Navigator,
} from 'react-native';

import HomeContainer from "./containers/home_container";

import ArticleContainer from "./containers/article_container";

import SignInContainer from "./containers/sign_in_container";

import articleListReducer from "./reducers/article_list_reducer";

import accountReducer from "./reducers/account_reducer";

import articleReducer from "./reducers/article_reducer";

import signInReducer from "./reducers/sign_in_form_reducer";

import {Provider} from "react-redux";

import { createStore, combineReducers, applyMiddleware } from "redux";

import ReduxThunk from "redux-thunk";

var store = createStore(
  combineReducers({
    articleListReducer: articleListReducer,
    articleReducer: articleReducer,
    accountReducer: accountReducer,
    signInReducer: signInReducer
  }),
  applyMiddleware(ReduxThunk)
);

export default class Root extends Component {
  constructor(props){
    super(props);
    this._renderScene = this._renderScene.bind(this);
  }
  _renderScene(route, navigator){
    var Content = "";
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
      default:
        Content = SignInContainer;
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
      <Provider store={store}>
        <Navigator 
          initialRoute={{title : "SignIn", index: 0}}
          renderScene={this._renderScene}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid}
          style={{flex: 1}}/>
      </Provider>
    );
  }
}