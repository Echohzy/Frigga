import HomeComponent from "../components/home";

import { connect } from 'react-redux';

import {
  addArticle,
  deleteArticle,
  commentArticle,
  likeArticle
} from '../actions/article_action';


function mapStateToProps(state){
  return {
    articleList: state.home.articleList
  };
}

function mapDispatchToProps(dispatch){
  return {
    onLikeArticle: function(id){
      dispatch(likeArticle(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);