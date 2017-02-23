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
  ListView,
  TextInput
} from 'react-native';



/*============================================= 
          skill api base config
===============================================*/
  var base = 'http://dev.talentlodge.com/api/skills';
  // var base = 'http://192.168.0.13/api/skills';
// -----------------------------------------------



export default class Skills extends Component 
{
  constructor(props) {
     super(props);
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
       dataSource: ds.cloneWithRows([]),
       loaded: false,
       text: ''
     };
     this.getTracks();
   }


 getTracks(){
   fetch(base,{
     method: 'GET',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     }
   })
    .then((response) => response.json())
    .then((tracks) => {
     console.log(tracks);

     this.setState({
       dataSource: this.state.dataSource.cloneWithRows(tracks),
       loaded: true
     });
    })
    .catch((error) => {
      console.error(error);
   })
   .done();
 }

  

   renderLoadingView() {
     return (
       <View>
         <Text style={styles.text}>
           loading tracks
         </Text>
       </View>
     );
   }

   renderView(){
     return (
       <View  style={styles.listContainer}>
         <ListView dataSource={this.state.dataSource} renderRow={this.renderList}/>
       </View>
     );
   }

   renderList(rowData) {
    return (
      <Text style={styles.listItems}>
        {rowData.name}
      </Text>

    );
   }

   

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    } else {
      return this.renderView();
    }   
  }
}


var styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  listItems: {
    color: 'white',
    textAlign:'center',
    fontSize: 20,
    margin:10,
  }
});
