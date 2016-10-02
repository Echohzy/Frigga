import React, { Component } from "react";

import {
  View,
  TouchableOpacity,
  Text,
  AlertIOS
} from "react-native";

import HeaderComponent from "../components/header_component";

import FooterComponent from "../components/footer_component";

import EditorComponent from "../components/editor_component";

var ARTICLE_KEYS = {title: "标题", short_describetion: "描述", content: "内容"};

export default class Editor extends Component {
  constructor(props){
    super(props);
  }
  handleSubmitArticle(){

    for(var key in ARTICLE_KEYS){
      if(!this.props[key].value){
        AlertIOS.alert("错误",ARTICLE_KEYS[key]+"不能为空！");
        return;
      }
    }
    var params = {
      title: this.props.title.value,
      short_describetion: this.props.short_describetion.value,
      content: this.props.content.value,
      author_avatar: this.props.account.avatar,
      created_at: new Date(),
      nick_name: this.props.account.nick_name
    };
    this.props.onSubmitArticle(params);
  }
  render(){
    return (
      <View style={{flex: 1}}>
        <HeaderComponent title={"Editor"} 
          rightButton={
            <TouchableOpacity style={{padding:4,backgroundColor:"#ee6d00",borderRadius:2}} onPress={()=>this.handleSubmitArticle()}>
              <Text style={{fontSize: 14, color:"#fff"}}>完成</Text>
            </TouchableOpacity>
          }/>
        <EditorComponent {...this.props}/>
        <FooterComponent push={(route)=>this.props.push(route)} selectedItem={"Editor"} />
      </View>
    );
  }
}