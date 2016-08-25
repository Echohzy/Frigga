import React, { Component } from "react";

import {
  View,
  StyleSheet,
} from "react-native";

import ArticleListContainer from "../containers/article_list_container";

export default class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={{flex: 1}}>
        <ArticleListContainer navigator={this.props.navigator}/>
      </View>
    );
  }
}


var styles = StyleSheet.create({

});