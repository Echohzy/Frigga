import ArticleListComponent from "../components/article_list_component";

import { connect } from 'react-redux';

import {
  addArticle,
  deleteArticle,
  commentArticle,
  likeArticle
} from '../actions/article_action';



function mapStateToProps(state){
  return {
    articleList: state.articleList.articleList,
    account: state.account.account
  };
}

function mapDispatchToProps(dispatch){
  return {
    onLikeArticle: function(id){
      dispatch(likeArticle(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleListComponent);