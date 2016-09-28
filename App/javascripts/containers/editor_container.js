import Editor from "../pages/editor";

import {
  addArticle
} from "../actions/article_action";

import { connect } from "react-redux";

var ATTRS = {
  title:{
    placeholder: "请输入文章题目",
    title: "题目",
    attrName: "title",
    value: ""
  },
  shortDescribetion:{
    placeholder: "请输入文章内容",
    title: "内容",
    attrName: "shortDescribetion",
    value:"",
    multiline: true
  }
};

var mapStateToProps = function(state){
  return {
    title: Object.assign({}, ATTRS.title, state.editorReducer.title),
    shortDescribetion: Object.assign({}, ATTRS.shortDescribetion, state.editorReducer.shortDescribetion)
  };
};

var mapDispatchToProps = function(reducerName){
  return {
    onChangeText: function(attrName, text){
      dispatch(changeTextInputValue(reducerName, attrName, text));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);



