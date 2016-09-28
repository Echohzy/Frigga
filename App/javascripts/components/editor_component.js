import React, { Component } from "react";

import {
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet
} from "react-native";

import {baseColor} from "../../stylesheets/base.js";

import FormInputBlockComponent from "./form_input_block_component";

export default class EditorComponent extends Component {
  render(){
    return (
      <ScrollView styles={{flex: 1}}>
        <FormInputBlockComponent
          {...this.props.title}
          onChange={this.props.onChangeText}/>
        <FormInputBlockComponent
          {...this.props.shortDescribetion}
          onChange={this.props.onChangeText}/>
      </ScrollView>
    );
  }
};

var styles = StyleSheet.create({
  editorItemBlock: {
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 6
  },
  editorItemText: {
    fontSize: 16,
    padding: 4
  },
  editorItemInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: baseColor.borderGrey,
    borderRadius: 2,
    fontSize: 16,
    backgroundColor: "#fff",
    minHeight: 20,
    paddingLeft: 4
  }
});