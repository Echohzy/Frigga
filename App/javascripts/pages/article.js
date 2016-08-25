import React, { Component } from "react";

import {
  View,
  StyleSheet
} from "react-native";

import ArticleComponent from "../components/article_component";

export default class Article extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={{flex: 1}}>
        <ArticleComponent navigator={this.props.navigator}/>
      </View>
    );
  }
}

