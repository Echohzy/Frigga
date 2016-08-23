import {
  SET_ACCOUNT,
  ASYNC_ACCOUNT,
} from "../actions/account_action";

import { combineReducers } from 

function account(state, action){
  switch(action.type){
    case SET_ACCOUNT:
      return Object.assign({}, state, action.params);
    case ASYNC_ACCOUNT:
      return action.account;
    default:
      return state || {};
  }
}

export default combineReducers({account: account});