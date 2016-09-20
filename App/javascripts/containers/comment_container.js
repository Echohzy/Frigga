import Comment from "../pages/comment";

import {
  changeCommentText
} from "../actions/article_action";

import {
  connect
} from "react-redux";

var mapStateToProps = function(state){
  return {
    comment: state.commentReducer.comment
  };
};

var mapDispatchToProps = function(dispatch){
  return {
    onCommentTextChange: function(value){
      dispatch(changeCommentText(value));
    }
  };
};



