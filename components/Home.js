import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import Firebase from './Firebase';

export default function Home(){
  
  Firebase.auth().signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});

  return(
    <View style={estilo.container}>
<Text> Oi Tudo bem com vc? </Text>
    </View>
  );
}

const estilo = StyleSheet.create({
container:{
flex:1,
alignContent: 'center',
justifyContent: 'center',
alignItems: 'center'
}
});