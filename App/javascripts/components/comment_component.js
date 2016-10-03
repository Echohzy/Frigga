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
          <TextInput 
            style={styles.commentTextContent}
            placeholder="请输入评论"
            multiline={true}
            onChange={(event)=>this.props.onChangeText("comment", event.nativeEvent.text)}/>
        </View>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  commentTextContainer: {
    padding: 6
  },
  commentTextContent: {
    fontSize: 20,
    height: 200
  }
});


