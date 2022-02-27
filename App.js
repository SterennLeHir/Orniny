import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native-web';
import fond from './assets/fond.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={fond} resizeMode="cover"  blurRadius = {3}>
      
      <Text style={styles.instructions} >
      To share a photo from your phone with a friend, just press the button below!
      Test de git.
      </Text>
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex:1,
    justifyContent:'center',
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  }, 
});