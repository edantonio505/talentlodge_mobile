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
  View
} from 'react-native';
import Landing from './components/landing';
import Skills from './components/skills';


export default class talentlodge extends Component 
{
  render() {
    return (
      <View>
        <Landing />
        <Skills />
      </View>
    );

  }
}

AppRegistry.registerComponent('talentlodge', () => talentlodge);
