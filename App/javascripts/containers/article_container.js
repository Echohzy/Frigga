import Article from "../pages/article";

import { connect } from "react-redux";

import {
  fetchArticle
} from "../actions/article_action";

var mapStateToProps = function(state, ownProps){
  return {
    article: state.articleReducer.article,
    account: state.accountReducer.account
  };
};

var mapDispatchToProps = function(dispatch){
  return {
    onFetchArticle: function(data){
      dispatch(fetchArticle(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);