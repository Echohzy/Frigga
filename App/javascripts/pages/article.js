import React, { Component } from "react";

import {
  View,
  StyleSheet
} from "react-native";

import ArticleContainer from "../containers/article_container";

export default class Article extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={{flex: 1}}>
        <ArticleContainer navigator={this.props.navigator}/>
      </View>
    );
  }
}

