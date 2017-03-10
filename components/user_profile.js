import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';



export default class UserProfile extends Component
{
  render (){
    return (
        <View style={styles.container} >
          <Text style={styles.text}>{this.props.email}</Text>
        </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black'
  },
  text: {
    color: 'white'
  }
});
