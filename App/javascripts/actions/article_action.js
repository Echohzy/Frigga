import {
  articleList,
  article
} from "../../../database";

import _ from "lodash";

const ADD_ARTICLE = "ADD_ARTICLE";
const DELETE_ARTICLE = "DELETE_ARTICLE";
const COMMENT_ARTICLE = "COMMENT_ARTICLE";
const LIKE_ARTICLE = "LIKE_ARTICLE";
const FETCH_ARTICLELIST = "FETCH_ARTICLELIST";
const FETCH_ARTICLE = "FETCH_ARTICLE";
const CHANGE_COMMENT_TEXT = "CHANGE_COMMENT_TEXT";

var id = 1;

function addArticle(params){
  id ++;
  return {
    type: ADD_ARTICLE,
    data: {
      id: id,
      ...params
    }
  };
}

function deleteArticle(id){
  return {
    type: DELETE_ARTICLE,
    id: id
  };
}

function commentArticle(params){
  return {
    type: COMMENT_ARTICLE,
    ...params
  };
}

function likeArticle(id){
  return {
    type: LIKE_ARTICLE,
    id: id
  };
}

function fetchArticleList(data){
  return {
    type: FETCH_ARTICLELIST,
    data: data
  };
}

function fetchArticle(data){
  return {
    type: FETCH_ARTICLE,
    data: data
  };
}

function changeCommentText(value){
  return {
    type: CHANGE_COMMENT_TEXT,
    value: value
  };
}

function getArticle(id){
  return function(dispatch, getState){
    var articleList = getState().articleListReducer.articleList;
    dispatch(fetchArticle(_.find(articleList,function(item){
      return item.id === id;
    })))
  }
}

export {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  COMMENT_ARTICLE,
  LIKE_ARTICLE,
  FETCH_ARTICLELIST,
  FETCH_ARTICLE,
  CHANGE_COMMENT_TEXT,
  addArticle,
  deleteArticle,
  commentArticle,
  likeArticle,
  changeCommentText,
  getArticle
};