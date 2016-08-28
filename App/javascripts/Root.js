import articleListReducer from "./reducers/article_list_reducer";

import accountReducer from "./reducers/account_reducer";

import articleReducer from "./reducers/article_reducer";

import React, {Component} from "react";

import {Provider} from "react-redux";

import App from "./pages/App";

import { createStore, combineReducers } from "redux";

var store = createStore(
  combineReducers({
    articleListReducer: articleListReducer,
    articleReducer: articleReducer,
    accountReducer: accountReducer
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