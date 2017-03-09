import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  Image
} from 'react-native';



export default class Results extends Component 
{ 
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.users)
    };
  }




  renderUsersRow(rowData){
    console.log(rowData._source.avatar);
    let imageURI = 'https://i.vimeocdn.com/portrait/58832_300x300.jpg';
    return (
        <TouchableOpacity style={styles.listButtons} >
          <View style={{flex:1, flexDirection: 'row'}}>
            <View style={{ width: 60, height: 60, flex:1, padding:10, flexDirection: 'row'}}>
              <Image style={{width: 60, height: 60, borderRadius: 30}} resizeMode={'cover'} source={{uri: String(rowData._source.avatar) }} />
              <Text style={styles.text}>{rowData._source.name}</Text>
              <View>
                <Text style={styles.second_text}>{String(rowData._source.skills.toString()).replace(/,/g , " ")}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
    );
  }

  render (){  
    return (
        <View style={styles.container}>
          <View>
            <ListView
              enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={this.renderUsersRow.bind(this)}
            />
          </View>
        </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'center', 
    backgroundColor: 'black'
  },

  text:{
    color:'white',
    fontSize: 20,
    paddingLeft: 10
  },
  second_text: {
    color:'white',
    position:'relative',
    fontSize: 10,
    top:40,
    left: -55
  },
  avatars:{
    width:70
  },
  listButtons:{
    backgroundColor: 'rgba(255,255,255,0.1)',
    height:80,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 0.5
  }
});


