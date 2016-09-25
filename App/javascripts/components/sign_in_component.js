import React, {Component} from "react";

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";

import FormInputBlockComponent from "./form_input_block_component";

export default class SignInComponent extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={styles.signInFormContainer}>
        <FormInputBlockComponent
          {...this.props.login_name}
          onChange={this.props.onChangeText}/>
        <FormInputBlockComponent 
          {...this.props.password}
          onChange={this.props.onChangeText}/>
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
  }
});