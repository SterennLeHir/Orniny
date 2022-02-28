import * as React from "react";
import { Image, StyleSheet, Text, View ,ImageBackground} from 'react-native';
import fond from '../assets/fond.jpg';
import ConnexionCard from "../components/ConnexionCard";

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={fond} resizeMode="cover" blurRadius = {10}>
        <ConnexionCard navigation = {navigation}/>
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
    width: '100%',
    height:'100%',
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
});