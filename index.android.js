/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import Landing from './components/landing';
import Skills from './components/skills';
import Searchbox from './components/searchbox';
  
export default class talentlodge extends Component 
{
  render() {
    return (

      <View style={styles.container}>
          <View style={styles.logoCenter}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('./image/talentlodgelogo2.png')} />
          </View>
          </View>

        <KeyboardAvoidingView behavior="padding">
          <Searchbox />
        </KeyboardAvoidingView>
        <View style={styles.listContainer} >
          <Skills />
        </View>
      </View>
    );

  }
}


var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black', 
  },
  logoCenter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer:{
    flex: 1,
    flexDirection: 'column',
    width: 300,
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
});


AppRegistry.registerComponent('talentlodge', () => talentlodge);
