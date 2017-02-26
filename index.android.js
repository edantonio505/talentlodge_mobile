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
  ListView,
  Keyboard,
  Animated,
  TouchableOpacity
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
      dataSource: ds.cloneWithRows([]),
      w: new Animated.Value(300),
      f: new Animated.Value(1)
    };
    this.getTracks()
  }



  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
  }



  _keyboardDidShow () {
    Animated.timing(
      this.state.w, {
        toValue: 100,
        duration: 200
      }
    ).start();

    Animated.timing(
      this.state.f, {
        toValue: 0,
        duration: 200
      }
    ).start();
    
  }

  _keyboardDidHide () {
    Animated.timing(
         this.state.w, {
           toValue: 300, 
           duration: 200
         }
       ).start();

    Animated.timing(
         this.state.f, {
           toValue: 1,
           duration: 200
         }
       ).start();
  }


  updateSearch(event)
  {   
      this.setState({
          searchText: event.nativeEvent.text
      })

      this.getTracks();
  }





  filterTracks(searchText, skills) 
  {
    let text = searchText.toLowerCase();
    return skills.filter(
      (skill) => {
        return skill.name.toLowerCase().indexOf(text) !== -1;
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
     .then((skills) => {
        
          let filtered = this.filterTracks(this.state.searchText, skills)
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





  render() {
    return (

      <View style={styles.container}>

          {/* animate logo here */}
          <Animated.View style={[styles.logoCenter, {flex: this.state.f}]}>
            <Animated.View style={[styles.logoContainer, {flex: this.state.f, width: this.state.w}]}>
              <Image style={styles.logo} source={require('./image/talentlodgelogo2.png')} />
            </ Animated.View>
          </ Animated.View>
          {/* end animate logo here*/}

        
         <View  style={styles.inputContainer}>
             <TextInput 
                 underlineColorAndroid="rgba(0, 0, 0, 0)" 
                 style={styles.searchBox} 
                 placeholder="Search for a skill" 
                 onChange={this.updateSearch.bind(this)}
             />
         </View>


        <View style={styles.listContainer} >
          <View  style={styles.listContainer}>
             <ListView 
              enableEmptySections={true}
              dataSource={this.state.dataSource} renderRow={this.renderList.bind(this)}/>
           </View>
        </View>
    </View>
    );

  }


  _onPressButton(skill){

      skill = skill.replace(" ", "+");
      console.log(skill);
  }


  renderList(rowData) {
    var that
    return (
      <TouchableOpacity 
      key={rowData.id}
      onPress={() => this._onPressButton(rowData.name)} 
      carita={rowData.name}
      style={{
        height: 70, 
        flex:1,
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 0.2,
        backgroundColor: 'rgba(255,255,255,0.1)'
      }}>
        <Text style={styles.listItems}>{rowData.name}</Text>
      </TouchableOpacity>
    );
   }


}


var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#111', 
  },
  logoCenter: {
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
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
    inputContainer: {
        paddingBottom: 2,
        paddingTop: 20
    },

  searchBox:{
        backgroundColor:'rgb(255,255,255)',
        textAlign:'center'
    },
    listContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'
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
    },
    bubblechoice: {
    height: window.height/8.335,
    borderRadius: (window.height/8.3350)/2,
    marginRight: 2,
    width: window.height/8.335,
  }
});


AppRegistry.registerComponent('talentlodge', () => talentlodge);
