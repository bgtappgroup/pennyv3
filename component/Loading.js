import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

export default class Loading extends Component {
  componentDidMount() {
    const firebase = require("firebase");    // initialize firebase
    
    firebase.auth().onAuthStateChanged(user => {  // This is a built in function from firebase for authentication purpose
     
      if (user) {                          // if user true means already logged in 
        this.props.navigation.navigate('Main')   //switch to main Screen
      }
      else {   // if user is false means not logged in the app swith to Login screen
        this.props.navigation.navigate('Login')    // this line navigate to 'Login' screen
      }
    })
  }

  render() {
    
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
//  backgroundColor:'#2d2c2f',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

