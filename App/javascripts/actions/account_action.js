const ASYNC_ACCOUNT = "ASYNC_ACCOUNT";
const SET_ACCOUNT = "SET_ACCOUNT";

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

export {
  ASYNC_ACCOUNT,
  SET_ACCOUNT,
  asyncAccount,
  setAccount
};
