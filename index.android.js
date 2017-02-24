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
  KeyboardAvoidingView,
  TextInput,
  ListView
} from 'react-native';

let border_radius =  8;


/*============================================= 
          skill api base config
===============================================*/
  var base = 'http://dev.talentlodge.com/api/skills';
  // var base = 'http://192.168.0.13/api/skills';
// -----------------------------------------------

 
export default class talentlodge extends Component 
{ 
  constructor() {
    super(); 
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      searchText: '',
      tracks: {},
      dataSource: ds.cloneWithRows([])
    };
    this.getTracks()
  }



  updateSearch(event)
  {   
      this.setState({
          searchText: event.nativeEvent.text
      })

      this.getTracks();
  }





  filterTracks(searchText, tracks) {
    let text = searchText.toLowerCase();
    return tracks.filter(
      (track) => {
        return track.name.toLowerCase().indexOf(text) !== -1;
      }
    );
    
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
        
          let filtered = this.filterTracks(this.state.searchText, tracks)
        // 
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(filtered)
          });
     })
     .catch((error) => {
       console.error(error);
    })
    .done();
  }


  renderList(rowData) {
    return (
      <Text style={styles.listItems}>
        {rowData.name}
      </Text>

    );
   }




  render() {
    return (

      <View style={styles.container}>
          <View style={styles.logoCenter}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('./image/talentlodgelogo2.png')} />
          </View>
          </View>

        <KeyboardAvoidingView behavior="padding">
          <View  style={styles.inputContainer}>
              <TextInput 
                  underlineColorAndroid="rgba(0, 0, 0, 0)" 
                  style={styles.searchBox} 
                  placeholder="Search for a skill" 
                  onChange={this.updateSearch.bind(this)}
              />
          </View>
        </KeyboardAvoidingView>


        <View style={styles.listContainer} >
          <View  style={styles.listContainer}>
             <ListView 
              enableEmptySections={true}
              dataSource={this.state.dataSource} renderRow={this.renderList}/>
           </View>
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
  },
    inputContainer: {
        paddingBottom:10,
        paddingLeft: 20,
        paddingRight: 20
    },

  searchBox:{
        backgroundColor:'rgb(255,255,255)',
        borderTopRightRadius: border_radius,
        borderTopLeftRadius: border_radius,
        borderBottomLeftRadius: border_radius,
        borderBottomRightRadius: border_radius,
        textAlign:'center'
    },
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


AppRegistry.registerComponent('talentlodge', () => talentlodge);
