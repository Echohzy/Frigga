import React, { Component } from "react";

import {
  View,
  StyleSheet
} from "react-native";

import ArticleContainer from "../containers/article_container";

import HeaderComponent from "../components/header_component";

export default class Article extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={{flex: 1}}>
        <HeaderComponent title={"Article"} pop={this.props.pop}/>
        <ArticleContainer push={this.props.push}/>
      </View>
    );
  }
}

