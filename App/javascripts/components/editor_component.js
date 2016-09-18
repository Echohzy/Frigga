import React, { Component } from "react";

import {
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet
} from "react-native";

import {baseColor} from "../../stylesheets/base.js";

export default class EditorComponent extends Component {
  render(){
    return (
      <ScrollView styles={{flex: 1}}>
        <View style={styles.editorItemBlock}>
          <Text style={styles.editorItemText}>标题：</Text>
          <TextInput style={styles.editorItemInput}/>
        </View>
        <View style={styles.editorItemBlock}>
          <Text style={styles.editorItemText}>描述：</Text>
          <TextInput style={styles.editorItemInput}/>
        </View>
        <View style={styles.editorItemBlock}>
          <Text style={styles.editorItemText}>内容：</Text>
          <TextInput multiline={true} style={[styles.editorItemInput,{minHeight: 100}]}/>
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