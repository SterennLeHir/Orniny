import * as React from "react";
import { Image, StyleSheet, Text, View ,ImageBackground} from 'react-native';
import fond from '../assets/fond.jpg';
import img from '../assets/Orniny_FAT.png';
import ConnexionCard from "../components/ConnexionCard";

export default function Login({navigation}) {
  let Orniny = {
    image : img,
    ptsPhysique : 10,
    ptsMental : 10,
  maxSantePhysique : 100,
  maxSanteMentale : 100,
  santeMentale : 15,
  poids : 200,
  sasiete : 0,
  }
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={fond} resizeMode="cover" blurRadius = {10}>
        <ConnexionCard navigation = {navigation} params = {Orniny}/>
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