import React, { Component } from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Image,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome.js';

import _ from 'lodash';

import ArticleComponent from './article.js';

var data = [
  {
    id: 1,
    title: "测试文章测",
    shortDescribetion: "这是一篇测试文章啦啦啦啦",
    like: 2,
    comment: 4,
    release_date: new Date()
  },
  {
    id: 2,
    title: "这还是测试文章啦啦啦",
    shortDescribetion: "啦啦啦这是测试测试测试啦",
    like: 2,
    comment: 4,
    release_date: new Date()
  },
  {
    id: 3,
    title: "并不知道该说什么",
    shortDescribetion: "测试测试测试",
    like: 2,
    comment: 4,
    release_date: new Date()
  },
  {
    id: 4,
    title: "奥运会",
    shortDescribetion: "里约大冒险",
    like: 2,
    comment: 4,
    release_date: new Date()
  },
  {
    id: 5,
    title: "一本正经的测试文章",
    shortDescribetion: "啦啦啦啦啦啦啦",
    like: 2,
    comment: 4,
    release_date: new Date()
  },
  {
    id: 6,
    title: "并不知道该说什么",
    shortDescribetion: "测试测试测试",
    like: 2,
    comment: 4,
    release_date: new Date()
  },
  {
    id: 7,
    title: "并不知道该说什么",
    shortDescribetion: "测试测试测试",
    like: 10,
    comment: 14,
    release_date: new Date()
  },
];

import {baseColor} from "../../stylesheets/base.js";

export default class Home extends Component {
  constructor(props){
    super(props);
    this.showArticle = this.showArticle.bind(this);
  }
  showArticle(){
    this.props.navigator.push({
      title: "article",
      component: ArticleComponent
    });
  }
  render(){
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={{flex: 1}}>
          {
            _.map(data, function(item){
              return (
                <TouchableHighlight key={item.id} onPress={()=>this.showArticle()}>
                  <View style={styles.articleBlockContainer}>
                    <View style={styles.articleBlockTitleContent}>
                      <Text style={styles.articleBlockTitle}>{item.title}</Text>
                    </View>
                    <View style={styles.articleShortDescribtionContent}>
                      <Text style={styles.articleShortDescribtion}>{item.shortDescribetion}</Text>
                    </View>
                    <View style={styles.articleDetail}>
                      <TouchableHighlight>
                        <View style={styles.articleDetailItem}>
                          <Icon style={styles.articleDetailIcon} name={"heart-o"} size={14}/>
                          <Text style={styles.articleDetailText}>{item.like}</Text>
                        </View>
                      </TouchableHighlight>
                      <TouchableHighlight>
                        <View style={styles.articleDetailItem}>
                          <Icon style={styles.articleDetailIcon} name={"commenting-o"} size={14} />
                          <Text style={styles.articleDetailText} >{item.comment}</Text>
                        </View>
                      </TouchableHighlight>
                      <View>
                        <Text style={styles.articleDetailText}>{item.release_date.toString().slice(0, 24)}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableHighlight>
              )
            }, this)
          }
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  articleBlockContainer: {
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: baseColor.borderGray,
    backgroundColor: baseColor.backgroundWhite,
    marginBottom: 6
  },
  articleBlockTitleContent: {
    padding: 6
  },
  articleBlockTitle: {
    fontSize: 18,
    color: "#2b2b2b",
    fontWeight: "bold"
  },
  articleShortDescribtionContent: {
    paddingLeft: 6,
    paddingRight: 6
  },
  articleShortDescribtion: {
    color: "#2b2b2b"
  },
  articleBlockImage: {
    flex: 1,
    height: 200,
    marginTop: 6,
    resizeMode: "cover"
  },
  articleDetail: {
    padding: 6,
    flexDirection: "row",
    flexWrap: "nowrap"
  },
  articleDetailItem: {
    flexDirection: "row",
    flexWrap: "nowrap",
    marginRight: 4
  },
  articleDetailIcon: {
    marginRight: 4,
    color: baseColor.textGrey
  },
  articleDetailText: {
    fontSize: 14,
    color: baseColor.textGrey
  }
});
