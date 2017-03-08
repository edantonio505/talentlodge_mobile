import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView
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
    console.log(rowData);
    return (
      <View>
        <Text style={styles.words}>{rowData._source.name} {rowData._source.skills.toString()}</Text>
      </View>

    );
  }

  render (){  
    return (
      <View style={styles.viewContainer}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderUsersRow.bind(this)}
        />
      </View>
    );
  }
}



var styles = StyleSheet.create({
  viewContainer : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#00B2EE',
    alignItems: 'center'
  },
  words: {
    paddingTop: 20,
    color: 'white'
  }
});