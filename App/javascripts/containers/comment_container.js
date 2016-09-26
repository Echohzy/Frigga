import Comment from "../pages/comment";

import {
  commentArticle
} from "../actions/article_action";

import {
  changeTextInputValue
} from "../actions/form_action"

import {
  connect
} from "react-redux";

var ATTRS = {
  comment: {
    placeholder: "请输入评论",
    value:"",
    title: "评论",
    attrName: "comment",
    multiline:true
  }
};

var mapStateToProps = function(state){
  return {
    comment: state.commentReducer.comment,
    account: state.accountReducer.account
  };
};

var mapDispatchToProps = function(reducerName){
  return function (dispatch){
    return {
      onChangeText: function(attrName, text){
        dispatch(changeTextInputValue(text));
      },
      onCommentSubmit: function(params){
        dispatch(commentArticle(params));
      }
    };
  };
};

export default connect(mapStateToProps, mapDispatchToProps("commentReducer"))(Comment);


