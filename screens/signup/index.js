/**
 * 章节: 07-02
 * 演示 Alert 功能的使用
 * FilePath: /07-02/Alert/signup/index.js
 * @Parry
 */

import React, {Component} from 'react'
import {
  AppRegistry,
  Plantform,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  ImageBackground,
  Button,
  Alert,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const { width, height } = Dimensions.get("window");

const background = require("./signup_bg.png");
const backIcon = require("./back.png");
const personIcon = require("./signup_person.png");
const lockIcon = require("./signup_lock.png");
const emailIcon = require("./signup_email.png");
const birthdayIcon = require("./signup_birthday.png");

export default class LoginScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
        userName: '',
        email: '',
        password: ''
      };
    }

    render() {
      return (
        <View style={styles.container}>
          <ImageBackground
            source={background}
            style={[styles.container, styles.bg]}
            resizeMode="cover">
            <View style={styles.headerContainer}>

              <View style={styles.headerIconView}>
                <TouchableOpacity style={styles.headerBackButtonView}>
                  <Image source={backIcon} style={styles.backButtonIcon} resizeMode="contain"/>
                </TouchableOpacity>
              </View>

              <View style={styles.headerTitleView}>
                <Text style={styles.titleViewText}>Register</Text>
              </View>

            </View>

            <View style={styles.inputsContainer}>

              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image source={personIcon} style={styles.inputIcon} resizeMode="contain"/>
                </View>
                <TextInput
                  style={[styles.input, styles.whiteFont]}
                  placeholder="User Name"
                  placeholderTextColor="#FFF"
                  underlineColorAndroid='transparent'
                  value={this.state.userName}
                  onChangeText=
                  {(userName)=>this.setState({userName})}/>
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image source={emailIcon} style={styles.inputIcon} resizeMode="contain"/>
                </View>
                <TextInput
                  style={[styles.input, styles.whiteFont]}
                  placeholder="E-mail"
                  placeholderTextColor="#FFF"
                  value={this.state.email}
                  onChangeText=
                  {(email)=>this.setState({email})}/>
              </View>

              <View style={styles.inputContainer}>
                <View style={styles.iconContainer}>
                  <Image source={lockIcon} style={styles.inputIcon} resizeMode="contain"/>
                </View>
                <TextInput
                  secureTextEntry={true}
                  style={[styles.input, styles.whiteFont]}
                  placeholder="Password"
                  placeholderTextColor="#FFF"
                  value={this.state.password}
                  onChangeText=
                  {(password)=>this.setState({password})}/>
              </View>

            </View>

            <View style={styles.footerContainer}>

              <TouchableHighlight
                onPress={this
                .register
                .bind(this)}>
                <View style={styles.signup}>
                  <Text style={styles.whiteFont}>Register</Text>
                </View>
              </TouchableHighlight>

              <TouchableOpacity>
                <View style={styles.signin}>
                  <Text style={styles.greyFont}>Registed？<Text style={styles.whiteFont}>
                      Login</Text>
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      );
    }

    register() {
      if (this.state.userName == '' || this.state.email == '' || this.state.password == '') {
        Alert.alert('Notice!', 'Please check the information completion', [
          {
            text: 'Confirm',
            onPress: () => console.log('Call back the function after user pressing the confirm button.')
          }
        ])
      }
    }
  }

  let styles = StyleSheet.create({
    container: {
      flex: 1
    },
    bg: {
      paddingTop: 30,
      width: null,
      height: null
    },
    headerContainer: {
      flex: 1
    },
    inputsContainer: {
      flex: 3,
      marginTop: 50
    },
    footerContainer: {
      flex: 1
    },
    headerIconView: {
      marginLeft: 10,
      backgroundColor: 'transparent'
    },
    headerBackButtonView: {
      width: 25,
      height: 25
    },
    backButtonIcon: {
      width: 25,
      height: 25
    },
    headerTitleView: {
      backgroundColor: 'transparent',
      marginTop: 25,
      marginLeft: 25
    },
    titleViewText: {
      fontSize: 40,
      color: '#fff'
    },
    inputs: {
      paddingVertical: 20
    },
    inputContainer: {
      borderWidth: 1,
      borderBottomColor: '#CCC',
      borderColor: 'transparent',
      flexDirection: 'row',
      height: 75
    },
    iconContainer: {
      paddingHorizontal: 15,
      justifyContent: 'center',
      alignItems: 'center'
    },
    inputIcon: {
      width: 30,
      height: 30
    },
    input: {
      flex: 1,
      fontSize: 20
    },
    signup: {
      backgroundColor: '#FF3366',
      paddingVertical: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 15
    },
    signin: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent'
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#FFF'
    }
  })
