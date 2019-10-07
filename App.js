import React from 'react';
import {StyleSheet, Text, View, StatusBar, Image, ImageBackground,
  TextInput, Alert, TouchableOpacity, Dimensions} from 'react-native';
//import {imagebutton} from 'react-native-image-button-text'
import MenuItem from './components/MenuItem';
import Header from './components/Header';

const {height, width} = Dimensions.get("window");

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Header title="Plant a Tree"/>
        <View style={styles.column}>
        <Text style={styles.columnText}>Log in</Text>
        </View>
        <View style={styles.menuContainer}>
          <MenuItem itemImage={require('./assets/news.png')}/>
          <MenuItem itemImage={require('./assets/Upload.png')}/>
          <MenuItem itemImage={require('./assets/FruitTree.png')}/>
          <MenuItem itemImage={require('./assets/HedgeTree.png')}/>
          <MenuItem itemImage={require('./assets/EvergreenTree.png')}/>
          <MenuItem itemImage={require('./assets/NZNativeTree.png')}/>
          <MenuItem itemImage={require('./assets/GumTree.png')}/>
          <MenuItem itemImage={require('./assets/PalmTree.png')}/>
          <MenuItem itemImage={require('./assets/HardwoodTree.png')}/>
          </View>
          
      </View> 
    );  
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  column:{
    width:'100%',
    height:70,
    paddingTop:10,
    backgroundColor:'grey',
    alignItems:'center',
    justifyContent:'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  columnText:{
      color:'black',
      fontSize:25,
      fontWeight:'700',
  },
  MenuItem:{
    width: '50%',
    height: '50%',
    padding:20,
    backgroundColor:'green',
    borderColor:'black',
    borderWidth:2,
  },
  image:{
    width:'100%',
    height:'100%',
    opacity:0.8,
    borderColor:'black',
    borderWidth:3,
  },

  menuContainer:{
    height: '40%',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  overlayContainer:{
    flex:1,
    backgroundColor:'black',

  }
});