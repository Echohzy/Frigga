import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

var data = {
  title: "测试文章啦啦啦啦",
  content: "这是测试这是测试这是测试啦啦啦啦啦啦啦",
  author_avatar: "http://7arnu9.com1.z0.glb.clouddn.com/FvzoFNX5yrjOnJrn_wh58Pw1Q42z_xl",
  created_at: new Date(2016,8,8),
  nick_name: "Canaan",
  like: 3,
  comment: 2,
  commentData: [{
    created_at: new Date(2016, 8,16),
    creator_nick_name: "Canaan",
    creator_avatar: "http://7arnu9.com1.z0.glb.clouddn.com/FvzoFNX5yrjOnJrn_wh58Pw1Q42z_xl",
    id: 1,
    content: "这是测试用的评论" 
  },{
    created_at: new Date(2016, 8,16),
    creator_nick_name: "Canaan",
    creator_avatar: "http://7arnu9.com1.z0.glb.clouddn.com/FvzoFNX5yrjOnJrn_wh58Pw1Q42z_xl",
    id: 2,
    content: "这是测试用的评论"
  }]
};

import Icon from 'react-native-vector-icons/FontAwesome.js';

import _ from 'lodash';

import { baseColor } from '../../stylesheets/base.js';

export default class ArticleComponent extends Component {
  render(){
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, paddingTop: 6}}>
          <View style={styles.articleContentContainer}>
            <View style={styles.articleAuthorContainer}>
              <View>
                <Image source={{uri: data.author_avatar}} style={styles.articleAuthorAvatar}/>
              </View>
              <View style={styles.articleAuthorDetail}>
                <Text style={styles.articleAuthorNickName}>{data.nick_name}</Text>
                <Text>{data.created_at.toString().slice(0, 24)}</Text>
              </View>
            </View>
            <View><Text style={styles.articleContentTitleText}>{data.title}</Text></View>
            <View><Text>{data.content}</Text></View>
          </View>
          <View style={styles.articleCommentContainer}>
            {
              _.map(data.commentData, function(item){
                return (
                  <View key={item.id} style={styles.articleCommentBlock}>
                    <View style={styles.articleCommentCreator}>
                      <View>
                        <Image source={{uri: item.creator_avatar}} style={styles.articleCommentCreatorImage}/>
                      </View>
                      <View>
                        <Text>{item.creator_nick_name}</Text>
                        <Text>{item.created_at.toString().slice(0,24)}</Text>
                      </View>
                    </View>
                    <View style={styles.articleCommentContent}>
                      <Text>{item.content}</Text>
                    </View>
                  </View>
                );
              })
            }
          </View>
        </ScrollView>
        <View style={styles.articleBottomContainer}>
          <TouchableHighlight style={{flex: 1, borderRightWidth: 1, borderColor: baseColor.borderGrey}}>
            <View style={styles.articleBottomBlock}>
              <Icon name="heart-o" style={styles.articleBottomIcon}/>
              <Text style={styles.articleBottomText}>{data.like}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{flex: 1}}>
            <View style={styles.articleBottomBlock}>
              <Icon name="commenting-o" style={styles.articleBottomIcon}/>
              <Text style={styles.articleBottomText}>{data.comment}</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  articleScrollView: {
    flex: 1
  },
  articleBottomContainer: {
    height: 50,
    flexDirection: "row",
    flexWrap: "nowrap",
    padding: 6,
    borderTopWidth: 1,
    borderColor: baseColor.borderGrey,
    backgroundColor: baseColor.backgroundWhite
  },
  articleBottomBlock: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center"
  },
  articleBottomIcon: {
    fontSize: 18,
    color: baseColor.textGrey,
    marginRight: 4
  },
  articleBottomText: {
    fontSize: 18,
    color: baseColor.textGrey
  },
  articleContentContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: baseColor.borderGrey,
    backgroundColor: baseColor.backgroundWhite,
    padding: 8
  },
  articleContentTitleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 8
  },
  articleAuthorContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    marginBottom: 6
  },
  articleAuthorAvatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 6
  },
  articleAuthorDetail: {
    flex: 1
  },
  articleAuthorNickName: {
    fontSize: 14,
    marginBottom: 6,
    fontWeight: "bold"
  },
  articleCommentContainer: {
    borderTopWidth: 1,
    borderColor: baseColor.borderGrey,
    backgroundColor: baseColor.backgroundWhite,
    marginTop: 8
  },
  articleCommentBlock: {
    padding: 8,
    borderBottomWidth: 1,
    borderColor: baseColor.borderGrey
  },
  articleCommentCreator: {
    flexDirection: "row",
    flexWrap: "nowrap"
  },
  articleCommentCreatorImage: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  articleCommentContent: {
    marginTop: 6
  }
});