import React, { Component } from "react";

import {
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet,
  AlertIOS
} from "react-native";

import {baseColor} from "../../stylesheets/base.js";

import FormInputBlockComponent from "./form_input_block_component";

export default class EditorComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <ScrollView styles={{flex: 1}}>
        <View style={styles.editorItemBlock}>
          <Text style={styles.editorItemText}>标题：</Text>
          <TextInput
            style={styles.editorItemInput}
            placeholder={"请输入文章标题"}
            onChange={(event)=>this.props.onChangeText("title", event.nativeEvent.text)}/>
        </View>
        <View style={styles.editorItemBlock}>
          <Text style={styles.editorItemText}>描述：</Text>
          <TextInput 
            style={styles.editorItemInput}
            placeholder={"请输入文章描述"}
            onChange={(event)=>this.props.onChangeText("short_describetion", event.nativeEvent.text)}/>
        </View>
        <View style={styles.editorItemBlock}>
          <Text style={styles.editorItemText}>内容：</Text>
          <TextInput 
            style={[styles.editorItemInput,{height: 120}]}
            placeholder={"请输入文章内容"}
            onChange={(event)=>this.props.onChangeText("content", event.nativeEvent.text)}
            multiline={true}/>
        </View>
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
    fontSize: 20,
    padding: 4
  },
  editorItemInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: baseColor.borderGrey,
    borderRadius: 2,
    fontSize: 20,
    backgroundColor: "#fff",
    paddingLeft: 4
  }
});