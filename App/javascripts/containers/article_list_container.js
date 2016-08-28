import ArticleListComponent from "../components/article_list_component";

import { connect } from 'react-redux';

import {
  addArticle,
  deleteArticle,
  commentArticle,
  likeArticle,
  fetchArticleList
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
    onFetchArticleList: function(data){
      dispatch(fetchArticleList(data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListComponent);