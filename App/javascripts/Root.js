import React, {Component} from 'react';


import articleListReducer from "./reducers/article_list_reducer";

import accountReducer from "./reducers/account_reducer";

import articleReducer from "./reducers/article_reducer";

import signInReducer from "./reducers/sign_in_form_reducer";

import commentReducer from "./reducers/comment_reducer";

import App from "./containers/App";

import {Provider} from "react-redux";

import { createStore, combineReducers, applyMiddleware } from "redux";

import { articleList, account } from "../../database";

import ReduxThunk from "redux-thunk";

var store = createStore(
  combineReducers({
    articleListReducer: articleListReducer,
    articleReducer: articleReducer,
    accountReducer: accountReducer,
    signInReducer: signInReducer,
    commentReducer: commentReducer
  }),
  {
    articleListReducer: {
      articleList: articleList
    }
  },
  applyMiddleware(ReduxThunk)
);

export default class Root extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}