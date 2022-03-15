import * as React from "react";
import { Text, View ,ImageBackground, StyleSheet} from 'react-native';
import MenuCool from '../components/MenuCool'
import fond from '../assets/fond.jpg';
import ListeAliments from '../components/ListeAliments'

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.bordure}>
      <MenuCool navigation= {navigation}/>
      </View>
      <ImageBackground source={fond} resizeMode="stretch" style={styles.image}>
      <Text style={styles.text}>Hey bitch :3</Text>
      
    </ImageBackground>
    <View style={styles.bordure}></View>
    
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 64,
    //transform: [{ rotate: "90deg" }],
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  bordure : {
    flex: 8,
    flexDirection: 'row-reverse',
    backgroundColor: "rgb(68,73,123)"
  }
});

