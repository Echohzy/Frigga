import React, { Component } from "react";

import {
  View
} from "react-native";

import HeaderComponent from "../components/header_component";

import FooterComponent from "../components/footer_component";

import EditorComponent from "../components/editor_component";

export default class Editor extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={{flex: 1}}>
        <HeaderComponent title={"Editor"} />
        <EditorComponent {...this.props}/>
        <FooterComponent push={(route)=>this.props.push(route)} selectedItem={"Editor"} />
      </View>
    );
  }
}