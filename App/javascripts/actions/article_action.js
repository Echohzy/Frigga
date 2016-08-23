const ADD_ARTICLE = "ADD_ARTICLE";
const DELETE_ARTICLE = "DELETE_ARTICLE";
const COMMENT_ARTICLE = "COMMENT_ARTICLE";
const LIKE_ARTICLE = "LIKE_ARTICLE";

function addArticle(text){
  return {
    type: ADD_ARTICLE,
    text: text
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

export {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  COMMENT_ARTICLE,
  LIKE_ARTICLE,
  addArticle,
  deleteArticle,
  commentArticle,
  likeArticle
};