const ADD_ARTICLE = "ADD_ARTICLE";
const DELETE_ARTICLE = "DELETE_ARTICLE";
const COMMENT_ARTICLE = "COMMENT_ARTICLE";
const LIKE_ARTICLE = "LIKE_ARTICLE";
const FETCH_ARTICLELIST = "FETCH_ARTICLELIST";
const FETCH_ARTICLE = "FETCH_ARTICLE";

function addArticle(data){
  return {
    type: ADD_ARTICLE,
    data: data
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

export {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  COMMENT_ARTICLE,
  LIKE_ARTICLE,
  FETCH_ARTICLELIST,
  FETCH_ARTICLE,
  addArticle,
  deleteArticle,
  commentArticle,
  likeArticle,
  fetchArticleList,
  fetchArticle
};