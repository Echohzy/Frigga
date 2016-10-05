import React, {Component} from "react";

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";

import { baseColor } from "../util/base_style";

import Icon from 'react-native-vector-icons/FontAwesome.js';

export default class SignInComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={styles.signInFormContainer}>
        <View style={styles.formInputBlock}>
          <View style={styles.formInputIconBlock}>
            <Icon name={"user"} size={30} style={styles.formInputIcon}/>
          </View>
          <TextInput
            style={styles.inputBlock}
            placeholder={"请输入用户名"}
            onChange={(event)=>this.props.onChangeText("login_name", event.nativeEvent.text)}/>
        </View>
        <View style={styles.formInputBlock}>
          <View style={styles.formInputIconBlock}>
            <Icon name={"lock"} size={30} style={styles.formInputIcon}/>
          </View>
          <TextInput 
            style={styles.inputBlock}
            secureTextEntry={true}
            onChange={(event)=>this.props.onChangeText("password", event.nativeEvent.text)}
            placeholder={"请输入密码"}/>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={()=>this.props.onSignIn({login_name: this.props.login_name.value, password: this.props.password.value})}>
          <Text style={styles.submitButtonText}>登录</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  signInFormContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom:30
  },
  submitButton:{
    height: 40,
    width: 80,
    backgroundColor: "#2666b5",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonText:{
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20
  },
  formInputBlock:{
    flexDirection: "row",
    flexWrap: "nowrap",
    borderWidth: 1,
    borderColor: baseColor.borderGrey,
    marginBottom: 20,
    padding: 4,
    justifyContent: "center"
  },
  formInputIconBlock:{
    width: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  formInputIcon:{
    color: baseColor.borderGrey,
  },
  inputBlock:{
    flex: 1,
    marginLeft: 2,
    justifyContent:"center"
  }
});