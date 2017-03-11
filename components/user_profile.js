import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';




/*=============================================
          skill api base config
===============================================*/
    // let base = 'http://dev.talentlodge.com/api/';
    let base = 'http://192.168.0.13/api/';
// -----------------------------------------------



export default class UserProfile extends Component
{
  constructor(props) {
    super(props);
    this.state = {user: []};
  }


  getUserDetails(){
    let email = this.props.email;

    return fetch(base+'user/'+email)
      .then((response) => response.json())
      .then((details) => {
        console.log(details);
      })
      .catch((error) => {
        console.error(error);
      });
  }




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
