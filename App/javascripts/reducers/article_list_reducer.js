import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  COMMENT_ARTICLE,
  LIKE_ARTICLE
} from "../actions/article_action";

import { combineReducers } from "redux";

import _ from "lodash";

var data = require("../../../database");

function articleList(state, action){
  switch(action.type){
    case COMMENT_ARTICLE:
      return _.map(state, function(item){
        if(item.id === action.id){
          return Object.assign({}, item, {comment: item.comment+1});
        }
        return item;
      });
    case LIKE_ARTICLE:
      return _.map(state, function(item){
        if(item.id === action.id){
          return Object.assign({}, item, {like: item.like+1});
        }
        return item;
      });
    case ADD_ARTICLE:
      return [action.article, ...state];
    case DELETE_ARTICLE:
      return _.filter(state, function(item){
        return item.id === action.id;
      });
    default:
      return state||data.articleList;
  };
}

var articleListReducer = combineReducers({
  articleList: articleList
});

export default articleListReducer;

