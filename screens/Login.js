import * as React from "react";
import { Image, StyleSheet, Text, View ,ImageBackground} from 'react-native';
import fond from '../assets/fond.jpg';
import img from '../assets/OrninyObese.png';
import ConnexionCard from "../components/ConnexionCard";

export default function Login({navigation}) {
  let Orniny = {
    image : img,
    ptsPhysique : 0, // points santé du jour
    ptsMental : 0, // points de bonheur du jour
    variete : [],
    sante : 10,
    bonheur: 10,
    maxSantePhysique : 100,
    maxSanteMentale : 100,
    poids : 220,
    sasiete : 0,
    repus: false
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