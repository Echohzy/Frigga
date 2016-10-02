import Editor from "../pages/editor";

import {
  addArticle,
} from "../actions/article_action";

import {
  changeTextInputValue
} from "../actions/form_action";

import { connect } from "react-redux";

var mapStateToProps = function(state){
  return {
    title: state.editorReducer.title,
    short_describetion: state.editorReducer.short_describetion,
    content: state.editorReducer.content,
    account: state.accountReducer.account
  };
};

var mapDispatchToProps = function(reducerName){
  return function(dispatch){
    return {
      onChangeText: function(attrName, text){
        dispatch(changeTextInputValue(reducerName, attrName, text));
      },
      onSubmitArticle: function(params){
        dispatch(addArticle(params));
      }
    };
  };
};

export default connect(mapStateToProps, mapDispatchToProps("editorReducer"))(Editor);



