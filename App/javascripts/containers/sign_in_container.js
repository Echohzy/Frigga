import SignIn from "../pages/sign_in";

import { changeTextInputValue } from "../actions/form_action";

import { signIn } from "../actions/account_action";

import { connect } from "react-redux";

var ATTRS = {
  login_name: {
    placeholder: "请输入用户名",
    value:"",
    title: "用户名",
    attrName: "login_name"
  },
  password: {
    placeholder: "请输入密码",
    value: "",
    title: "密 码",
    secureTextEntry: true,
    attrName: "password"
  }
};

var mapStateToProps = function(state){
  return {
    login_name: Object.assign({},ATTRS.login_name, state.signInReducer.login_name),
    password: Object.assign({},ATTRS.password, state.signInReducer.password),
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps("signInReducer"))(SignIn);