import {account} from "../../../database";

const ASYNC_ACCOUNT = "ASYNC_ACCOUNT";
const SET_ACCOUNT = "SET_ACCOUNT";
const SIGN_IN = "SIGN_IN";

function asyncAccount(params){
  return {
    type: ASYNC_ACCOUNT,
    account: params
  };
}

function setAccount(params){
  return {
    type: SET_ACCOUNT,
    params: params
  };
}

function signIn(params){

  return function(dispatch){
    if(params.login_name === account.user_name&&params.password === account.password){
      dispatch(asyncAccount(account));
    }
  };
}

export {
  ASYNC_ACCOUNT,
  SET_ACCOUNT,
  SIGN_IN,
  asyncAccount,
  setAccount,
  signIn
};
