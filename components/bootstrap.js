/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Talentlodge from './talentlodge.js';
import Results from './results.js';

export default class Bootstrap extends Component 
{ 
  render (){
    return (
      <Talentlodge />
    );
  }
}