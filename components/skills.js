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
  ListView
} from 'react-native';

var base = 'http://dev.talentlodge.com/api/';

export default class Skills extends Component 
{
  constructor(props) {
     super(props);
     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
       dataSource: ds.cloneWithRows([]),
       loaded: false
     };
     this.getTracks(this);
   }


 getTracks(element){
   fetch(base+'tracks/1',{
     method: 'GET',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     }
   })
    .then((response) => response.json())
    .then((tracks) => {
     console.log(tracks);

     element.setState({
       dataSource: element.state.dataSource.cloneWithRows(tracks),
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
         <Text>
           loading tracks
         </Text>
       </View>
     );
   }


   renderView(){
     return (
       <View>
         <Text>All Tanyas carita soundcloud tracks</Text>
         <ListView dataSource={this.state.dataSource} renderRow={(rowData) => <Text>{rowData.title}</Text>}/>
       </View>
     );
   }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    } else {
      return this.renderView(this);
    }   
  }
}


