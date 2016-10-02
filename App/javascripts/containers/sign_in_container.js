import SignIn from "../pages/sign_in";

import { changeTextInputValue } from "../actions/form_action";

import { signIn } from "../actions/account_action";

import { connect } from "react-redux";

var mapStateToProps = function(state){
  return {
    login_name: state.signInReducer.login_name,
    password: state.signInReducer.password,
    account: state.accountReducer.account
  };
};

var mapDispatchToProps = function(reducerName){
  return function(dispatch){
    return {
      onChangeText: function(attrName, text){
        dispatch(changeTextInputValue(reducerName, attrName, text));
      },
      onSignIn: function(params){
        dispatch(signIn(params));
      }
    };
  };
};

export default connect(mapStateToProps, mapDispatchToProps("signInReducer"))(SignIn);