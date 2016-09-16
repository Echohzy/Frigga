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
        <TouchableOpacity style={styles.footerItem} onPress={()=>this.props.push({title:"Home"})}>
          <View>
            <Icon style={this.props.selectedItem === "Home"?[styles.footerItemIcon, {color: "#ee6d00"}]:styles.footerItemIcon} name="home" size={24}/>
            <Text style={this.props.selectedItem==="Home" ? [styles.footerItemText,{color: "#ee6d00"}]:styles.footerItemText}>首页</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={()=>this.props.push({title: "Editor"})}>
          <View>
            <Icon style={this.props.selectedItem === "Editor"?[styles.footerItemIcon, {color: "#ee6d00"}]:styles.footerItemIcon} name="plus" size={24}/>
            <Text style={this.props.selectedItem==="Editor" ? [styles.footerItemText,{color: "#ee6d00"}]:styles.footerItemText}>新建</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={()=>this.props.push({title: "User"})}>
          <View>
            <Icon style={this.props.selectedItem === "User"?[styles.footerItemIcon, {color: "#ee6d00"}]:styles.footerItemIcon} name="user" size={24}/>
            <Text style={this.props.selectedItem==="User" ? [styles.footerItemText,{color: "#ee6d00"}]:styles.footerItemText}>用户</Text>
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