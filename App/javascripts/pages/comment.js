import React, { Component } from "react";

import {
  View,
  TouchableOpacity,
  Text,
  AlertIOS
} from "react-native";

import HeaderComponent from "../components/header_component";

import CommentComponent from "../components/comment_component";

export default class Comment extends Component {
  constructor(props){
    super(props);
  }
  handleSubmitComment(){
    if(!this.props.comment.value){
      AlertIOS.alert(
       '错误',
       '评论不能为空'
      );
      return;
    }
    var params = {
      articleId: this.props.articleId,
      comment: {
        content: this.props.comment.value,
        created_at: new Date(),
        creator_nick_name: this.props.account.nick_name,
        creator_avatar: this.props.account.avatar,
      }
    };
    this.props.onCommentSubmit(params);
    this.props.onFetchArticle(this.props.articleId);
    this.props.pop();
  }
  render(){
    return (
      <View style={{flex:1}}>
        <HeaderComponent 
          title={"Comment"} 
          pop={this.props.pop} 
          rightButton={
            <TouchableOpacity style={{padding:4,backgroundColor:"#ee6d00",borderRadius:2}} onPress={()=>this.handleSubmitComment()}>
              <Text style={{fontSize: 14, color:"#fff"}}>完成</Text>
            </TouchableOpacity>
          }/>
        <CommentComponent {...this.props} />
      </View>
    );
  }
};


