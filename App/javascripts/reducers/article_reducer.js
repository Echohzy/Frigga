import {
  LIKE_ARTICLE,
  FETCH_ARTICLE
} from "../actions/article_action";

import { combineReducers } from "redux";

function article(state, action){
  switch(action.type){
    case LIKE_ARTICLE:
      return Object.assign({}, state, {like : state.like + 1});
    case FETCH_ARTICLE:
      return action.data;
    default:
      return state || {};
  }
}

var articleReducer = combineReducers({
  article: article
});

export default articleReducer;