import articleListReducer from "../reducers/article_list";

import React, {Component} from "react";

import {Provider} from "react-redux";

import App from "./App";

import { createStore, combineReducers } from "redux";

var store = createStore(combineReducers({home: articleListReducer}));

export default class Root extends Component {
  render(){
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

