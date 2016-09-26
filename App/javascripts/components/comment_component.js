import React, { Component } from 'react';
import {
  TextInput,
  View,
  ScrollView,
  Text,
  StyleSheet
} from 'react-native';

import { baseColor } from "../../stylesheets/base.js";

import Icon from 'react-native-vector-icons/FontAwesome.js';

import FormInputBlockComponent from "./form_input_block_component";

export default class CommentComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <ScrollView style={{flex: 1}}>
        <View style={styles.commentTextContainer}>
          <TextInput multiline={true} placeholder={"请输入正文"} style={styles.commentTextContent}/>
        </View>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  commentTextContainer: {
    height: 200,
    borderBottomWidth: 1,
    borderColor: baseColor.borderGrey,
    padding: 10
  },
  commentTextContent: {
    fontSize: 14,
    height: 200
  }
});


