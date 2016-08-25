import React, { Component } from 'react';

import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome.js';

import _ from 'lodash';

import Article from '../pages/article.js';

import { articleList } from "../../../database.js";

import {baseColor} from "../../stylesheets/base.js";

export default class ArticleListComponent extends Component {
  constructor(props){
    super(props);
    this.showArticle = this.showArticle.bind(this);
  }
  showArticle(){
    this.props.navigator.push({
      title: "article",
      component: Article
    });
  }
  render(){
    return (
        <ScrollView style={{flex: 1}}>
          {
            _.map(this.props.articleList, function(item){
              return (
                <TouchableHighlight style={{marginBottom: 6}} key={item.id} underlayColor={"#333"} onPress={()=>this.showArticle()}>
                  <View style={styles.articleBlockContainer}>
                    <View style={styles.articleAvatarBlock}>
                      <Image source={{uri: item.avatar}} style={styles.articleAvatar}/>
                    </View>
                    <View style={{flex: 1}}>
                      <View style={styles.articleBlockTitleContent}>
                        <Text style={styles.articleBlockTitle}>{item.title}</Text>
                      </View>
                      <View style={styles.articleShortDescribtionContent}>
                        <Text style={styles.articleShortDescribtion}>{item.shortDescribetion}</Text>
                      </View>
                      <View style={styles.articleDetail}>
                        <TouchableOpacity onPress={()=>this.props.onLikeArticle(item.id)}>
                          <View style={styles.articleDetailItem}>
                            <Icon style={styles.articleDetailIcon} name={"heart-o"} size={14}/>
                            <Text style={styles.articleDetailText}>{item.like}</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <View style={styles.articleDetailItem}>
                            <Icon style={styles.articleDetailIcon} name={"commenting-o"} size={14} />
                            <Text style={styles.articleDetailText} >{item.comment}</Text>
                          </View>
                        </TouchableOpacity>
                        <View>
                          <Text style={styles.articleDetailText}>{item.release_date.toString().slice(0, 24)}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableHighlight>
              )
            }, this)
          }
        </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  mainText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  articleBlockContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: baseColor.borderGrey,
    backgroundColor: baseColor.backgroundWhite,
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
  },
  articleAvatar: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  articleAvatarBlock: {
    width: 52,
    justifyContent: "center",
    alignItems: "center"
  }
});
