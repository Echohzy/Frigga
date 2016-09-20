import {
  CHANGE_COMMENT_TEXT
} from "../actions/article_action";

import { combineReducers } from "redux";

function comment(state="", action){
  switch(action.type){
    case CHANGE_COMMENT_TEXT:
      return action.value;
    default:
      return state;
  }
}

var commentReducer = combineReducers({
  comment: comment
});

export default commentReducer;