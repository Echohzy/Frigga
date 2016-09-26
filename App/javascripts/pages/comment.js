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
    }else{
      var params = {
        articleId: this.props.articleId,
        comment: this.props.comment.value,
        ...this.props.account
      }
      this.props.onCommentSubmit(params);
    }
  }
  render(){
    return (
      <View style={{flex:1}}>
        <HeaderComponent 
          title={"Comment"} 
          pop={this.props.pop} 
          rightButton={
            <TouchableOpacity onPress={()=>this.handleSubmitComment()}>
              <Text style={{fontSize: 16}}>完成</Text>
            </TouchableOpacity>
          }/>
        <CommentComponent {...this.props} />
      </View>
    );
  }
};


