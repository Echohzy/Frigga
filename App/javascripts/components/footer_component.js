import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome.js';

import {baseColor} from "../../stylesheets/base.js";

export default class FooterComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.footerItem} onPress={()=>this.props.changeView("home")}>
          <View>
            <Icon style={styles.footerItemIcon} name="home" size={24}/>
            <Text style={styles.footerItemText}>首页</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={()=>this.props.changeView("editor")}>
          <View>
            <Icon style={styles.footerItemIcon} name="plus" size={24}/>
            <Text style={styles.footerItemText}>新建</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={()=>this.props.changeView("user")}>
          <View>
            <Icon style={styles.footerItemIcon} name="user" size={24}/>
            <Text style={styles.footerItemText}>用户</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  footerContainer: {
    flexWrap: "nowrap",
    flexDirection: "row",
    height: 50,
    borderTopWidth: 1,
    borderColor: baseColor.borderGrey
  },
  footerItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  footerItemIcon: {
    color: baseColor.textGrey
  },
  footerItemText: {
    fontSize: 12,
    marginTop: 4,
    color: baseColor.textGrey
  }
});