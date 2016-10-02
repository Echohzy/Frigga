import Home from "../pages/home";

import { connect } from "react-redux";

import {
  addArticle,
  deleteArticle,
  commentArticle,
  likeArticle,
  fetchArticleList,
  getArticleList
} from '../actions/article_action';

function mapStateToProps(state){
  return {
    articleList: state.articleListReducer.articleList,
    account: state.accountReducer.account
  };
}

function mapDispatchToProps(dispatch){
  return {
    onLikeArticle: function(id){
      dispatch(likeArticle(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);