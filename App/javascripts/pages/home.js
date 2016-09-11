import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import ArticleListContainer from "../containers/article_list_container";

import EditorComponent from "../components/editor_component";

import FooterComponent from "../components/footer_component";

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: "home"
    };
    this.changeView = this.changeView.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }
  changeView(item){
    this.setState({view: item});
  }
  renderContent(){
    var Content = "";
    switch(this.state.view){
      case "home":
        return Content = ArticleListContainer;
      case "editor":
        return Content = EditorComponent;
      default:
        return Content = ArticleListContainer;
    }
  }
  render(){
    var Content = this.renderContent();
    return (
      <View style={{flex: 1}}>
        <Content navigator={this.props.navigator}/>
        <FooterComponent changeView={this.changeView} selectedItem={this.state.view} />
      </View>
    );
  }
}


var styles = StyleSheet.create({

});