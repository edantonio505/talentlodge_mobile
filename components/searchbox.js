import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
    

let border_radius =  8;

export default class Searchbox extends Component {

    constructor() {
      super(); 
      this.state = {
        search: ''
      };
    }



    updateSearch(event)
    {   

        console.log(event.nativeEvent.text);
    }




    render() {
        return (
            
                <View style={styles.inputContainer}>
                    <TextInput 
                        underlineColorAndroid="rgba(0, 0, 0, 0)" 
                        style={styles.searchBox} 
                        placeholder="Search for a skill" 
                        onChange={this.updateSearch}
                    />
                </View>
                
        );
    }
}


var styles = StyleSheet.create({
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
    }
});