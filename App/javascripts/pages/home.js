import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import ArticleListComponent from "../components/article_list_component";

import FooterComponent from "../components/footer_component";

import HeaderComponent from "../components/header_component";

export default class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={{flex: 1}}>
        <HeaderComponent title={"Home"} />
        <ArticleListComponent {...this.props} />
        <FooterComponent push={(route)=>this.props.push(route)} selectedItem={"Home"} />
      </View>
    );
  }
}
