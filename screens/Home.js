import * as React from "react";
import { Image, View ,ImageBackground, StyleSheet} from 'react-native';
import MenuCool from '../components/MenuCool'
import Orniny from '../assets/Horniny FAT.png';
import fond from '../assets/fond.jpg';
import AlimentsBar from "../assets/class/Aliment";

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.bordure}>
      <MenuCool navigation= {navigation}/>
      </View>

      <ImageBackground source={fond} resizeMode="stretch" style={styles.imageFond}>
      <Image style={styles.OrninyStyle} source={Orniny} resizeMode = 'contain' />
     </ImageBackground>


    <View style={styles.bordure}>
      <AlimentsBar />
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageFond: {
    flex: 64,
    //transform: [{ rotate: "90deg" }],
    justifyContent: "flex-end",
  },
  OrninyStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
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

