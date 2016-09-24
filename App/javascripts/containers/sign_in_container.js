import SignIn from "../pages/sign_in";

import { changeTextInputValue } from "../actions/form_action";

import { connect } from "react-redux";

var ATTRS = {
  login_name: {
    placeholder: "请输入用户名",
    value:"",
    title: "用户名"
  },
  password: {
    placeholder: "请输入密码",
    value: "",
    title: "密码",
    secureTextEntry: true
  }
};

var mapStateToProps = function(state){
  return {
    login_name: Object.assgin({},ATTRS.login_name, state.signInReducer.login_name),
    password: Object.assign({},ATTRS.password, state.signInReducer.password)
  };
};

var mapDispatchToProps = function(reducerName){
  function(dispatch){
    return {
      onChangeText: function(reducerName, attrName, text){
        dispatch(changeTextInputValue(reducerName, attrName, text));
      }
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);