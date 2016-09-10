import React, { Component } from "react";

import {
  View,
  StyleSheet,
} from "react-native";

import ArticleListContainer from "../containers/article_list_container";
import FooterComponent from "../components/footer_component";

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: "home"
    };
    this.changeView = this.changeView.bind(this);
  }
  changeView(item){
    this.setState({view: item});
  }
  render(){
    return (
      <View style={{flex: 1}}>
        <ArticleListContainer navigator={this.props.navigator}/>
        <FooterComponent changeView={this.changeView} selectedItem={this.state.view} />
      </View>
    );
  }
}


var styles = StyleSheet.create({

});