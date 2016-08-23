import articleListReducer from "../reducers/article_list_reducer";

import accountReducer from "../reducers/accountReducer";

import React, {Component} from "react";

import {Provider} from "react-redux";

import App from "./App";

import { createStore, combineReducers } from "redux";

var store = createStore(
  combineReducers({
    articleList: articleListReducer,
    account: accountReducer
  })
);

export default class Root extends Component {
  render(){
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

