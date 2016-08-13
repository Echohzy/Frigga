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

var data = [
  {
    id: "1",
    title: "测试文章测",
    shortDescribetion: "这是一篇测试文章啦啦啦啦",
    image: "./AuthorAvatar.png",
    like: 2,
    comment: 4
  }
];

export default class Home extends Component {
  render(){
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={{flex: 1}}>
          {
            _.map(data, function(item){
              return (
                <TouchableHighlight key={item.id}>
                  <View style={styles.articleBlockContainer}>
                    <View style={styles.articleBlockTitleContent}>
                      <Text style={styles.articleBlockTitle}>{item.title}</Text>
                    </View>
                    <View style={styles.articleShortDescribtionContent}>
                      <Text style={styles.articleShortDescribtion}>{item.shortDescribetion}</Text>
                    </View>
                    <View>
                      {item.image ? <Image source={require("../../images/test1.jpg")} style={styles.articleBlockImage}/> : <View />}
                    </View>
                    <View style={styles.articleDetail}>
                      <TouchableHighlight>
                        <View style={styles.articleDetailItem}>
                          <Icon name={"heart-o"} size={14}/>
                          <Text>{item.like}</Text>
                        </View>
                      </TouchableHighlight>
                      <TouchableHighlight>
                        <View style={styles.articleDetailItem}>
                          <Icon name={"commenting-o"} size={14} />
                          <Text>{item.comment}</Text>
                        </View>
                      </TouchableHighlight>
                    </View>
                  </View>
                </TouchableHighlight>
              )
            })
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
    backgroundColor: "red",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "lightgrey"
  },
  articleBlockTitleContent: {
    padding: 6
  },
  articleBlockTitle: {
    fontSize: 20,
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
  }
});
