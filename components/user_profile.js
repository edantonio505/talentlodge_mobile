import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import md5 from 'md5';


export default class UserProfile extends Component
{

  render (){
    console.log(this.props.user);

    if(this.props.user == undefined)
    {
      return (<View style={styles.container}><Text style={styles.text}>Loading</Text></View>);
    } else {
      return (
          <View style={styles.container} >
            <View style={{flexDirection:'column', flex:1, marginTop: 20}}>
              <View style={{height:100,flexDirection: 'row'}}>
                <View style={{justifyContent: 'center', width: 200, height:100, flexDirection:'row'}}>
                  <Image style={{width: 100, height: 100, borderRadius: 30}}
                  source={{uri: 'https://www.gravatar.com/avatar/'+md5(this.props.user.email)}} />
                </View>

                <View style={{ width: 200, height:100, flexDirection:'row'}}>
                  <Text style={styles.text}>{this.props.user.name}</Text>
                </View>
              </View>

              <View style={styles.about}>
                <Text style={{color:'white'}}>{this.props.user.profile.soundcloud}</Text>
              </View>
            </View>
          </View>
      );
    }



  }
}


var styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent:'center',
    backgroundColor:'black'
  },
  text: {
    color: 'white',
    fontSize: 20

  },
  about:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: 'white',
    height:70,
    marginTop: 20
  }
});
