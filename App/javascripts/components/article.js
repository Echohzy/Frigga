import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
} from 'react-native';

var data = {
  title: "测试文章啦啦啦啦",
  content: "这是测试这是测试这是测试啦啦啦啦啦啦啦",
  like: 3,
  comment: 2,
  commentData: [{
    createdAt: new Date(2016, 8,16),
    creatorAvatar: "http://7arnu9.com1.z0.glb.clouddn.com/FvzoFNX5yrjOnJrn_wh58Pw1Q42z_xl" 
  },{

  }]
};

import Icon from 'react-native-vector-icons/FontAwesome.js';

import _ from 'lodash';

import { baseColor } from '../../stylesheets/base.js';

export default class ArticleComponent extends Component {
  render(){
    return (
      <View>
        <ScrollView>
          <View>
          </View>
        </ScrollView>
        <View>
          <TouchableHighlight>
            <View>
              <Icon name="heart-o" />
              <Text>{data.like}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View>
              <Icon name="commenting-o"/>
              <Text>{data.comment}</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}