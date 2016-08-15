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

export default class CommentComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={{flex: 1}}>
        <View style={styles.commentTextContainer}>
          <TextInput placeholder={"请输入正文"} style={{height: 200}}/>
        </View>
        <View>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  commentTextContainer: {
    height: 200,
    borderBottomWidth: 1,
    borderColor: baseColor.borderGrey
  }
});


