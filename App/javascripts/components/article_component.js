import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome.js';

import _ from 'lodash';

import { baseColor } from '../util/base_style.js';

import CommentComponent from './comment_component.js';

import UserComponent from "./user_component.js";

export default class ArticleComponent extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.onFetchArticle(this.props.articleId);
  }
  handleDeleteArticle(){
    this.props.onDeleteArticle(this.props.article.id);
    this.props.pop();
  }
  render(){
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, paddingTop: 6}}>
          <View style={styles.articleContentContainer}>
            <View style={styles.articleAuthorContainer}>
              <View>
                <Image source={{uri: this.props.article.author_avatar}} style={styles.articleAuthorAvatar}/>
              </View>
              <View style={styles.articleAuthorDetail}>
                <Text style={styles.articleAuthorNickName}>{this.props.article.nick_name}</Text>
                <Text>{this.props.article.created_at?this.props.article.created_at.toString().slice(0, 24):''}</Text>
              </View>
              {
                this.props.account.id === this.props.article.author_id?
                <View style={styles.articleDeleteButtonContainer}>
                  <TouchableOpacity onPress={()=>this.handleDeleteArticle()}>
                    <Icon name={"trash"} size={16} style={{color: baseColor.borderGrey}}/>
                  </TouchableOpacity>
                </View>:
                <View />
              }
            </View>
            <View><Text style={styles.articleContentTitleText}>{this.props.article.title}</Text></View>
            <View><Text>{this.props.article.content}</Text></View>
          </View>
          <View style={styles.articleCommentContainer}>
            {
              _.map(this.props.article.commentData, function(item,index){
                return (
                  <View key={index} style={styles.articleCommentBlock}>
                    <View style={styles.articleCommentCreator}>
                      <View>
                        <Image source={{uri: item.creator_avatar}} style={styles.articleCommentCreatorImage}/>
                      </View>
                      <View>
                        <TouchableOpacity><Text>{item.creator_nick_name}</Text></TouchableOpacity>
                        <Text>{item.created_at.toString().slice(0,24)}</Text>
                      </View>
                    </View>
                    <View style={styles.articleCommentContent}>
                      <Text>{item.content}</Text>
                    </View>
                  </View>
                );
              }, this)
            }
          </View>
        </ScrollView>
        <View style={styles.articleBottomContainer}>
          <TouchableOpacity underlayColor={"#333"}  activeOpacity={0.5} style={styles.articleBottomButton}>
            <View style={styles.articleBottomBlock}>
              <Icon name="heart-o" style={styles.articleBottomIcon}/>
              <Text style={styles.articleBottomText}>{this.props.article.like||0}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.articleBottomLine} />
          <TouchableOpacity style={styles.articleBottomButton} underlayColor={"#333"} activeOpacity={0.5} onPress={()=>this.props.push({title:"Comment",props: {articleId: this.props.article.id}})}>
            <View style={styles.articleBottomBlock}>
              <Icon name="commenting-o" style={styles.articleBottomIcon}/>
              <Text style={styles.articleBottomText}>{this.props.article.comment||0}</Text>
            </View>
          </TouchableOpacity>
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
    borderTopWidth: 1,
    borderColor: baseColor.borderGrey,
  },
  articleBottomLine: {
    borderRightWidth:1,
    borderColor: baseColor.borderGrey,
    marginTop: 10,
    marginBottom: 10
  },
  articleBottomBlock: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: baseColor.backgroundWhite
  },
  articleBottomButton: {
    flex: 1,
    backgroundColor:baseColor.backgroundWhite 
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
  },
  articleDeleteButtonContainer: {
    flex: 1,
    paddingRight: 6,
    alignItems:"flex-end"
  }
});