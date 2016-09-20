import React, { Component } from "react";

import {
  View
} from "react-native";

import HeaderComponent from "../components/header_component";

import CommentComponent from "../components/comment_component";

export default class Comment extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={{flex:1}}>
        <HeaderComponent title={"Comment"} pop={this.props.pop} />
        <CommentComponent {...this.props} />
      </View>
    );
  }
};


