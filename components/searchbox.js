import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
    

let border_radius =  8;

export default class Searchbox extends Component {
    render() {
        return (
            
                <View style={styles.inputContainer}>
                <TextInput style={styles.searchBox} placeholder="Search for a skill" />
                </View>
                
        );
    }
}


var styles = StyleSheet.create({


    inputContainer: {
        padding:20,
         
        
      
    },

  searchBox:{
        backgroundColor:'white',
        borderTopRightRadius: border_radius,
        borderTopLeftRadius: border_radius,
        borderBottomLeftRadius: border_radius,
        borderBottomRightRadius: border_radius,
        textAlign:'center'
    }
});