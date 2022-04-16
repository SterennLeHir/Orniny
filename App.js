import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground, FlatList, Linking, Button } from 'react-native';
import { Dimensions, TouchableWithoutFeedback } from 'react-native-web';

import logo from './assets/logo.png'

export default function App() {
  return (
    <View>
    <View style={styles.bordureHaut}>
    <View style={{flexGrow:1,height:'100%',justifyContent:'center',alignItems:'center',flexDirection: 'row'}}>
        <Text style={[styles.titre,styles.vert]}>O</Text>
        <Text style={[styles.titre,styles.bleu]}>r</Text>
        <Text style={[styles.titre,styles.rouge]}>n</Text>
        <Text style={[styles.titre,styles.jaune]}>i</Text>
        <Text style={[styles.titre,styles.vert]}>n</Text>
        <Text style={[styles.titre,styles.bleu]}>y</Text>
    </View>
    <View style={{height:"100%",position:"absolute",right:"2%"}}>
    </View>
    </View>

       <View style={styles.container}>

      <ImageBackground
        style={styles.back}
        source={require('./assets/fond.jpg')}
        blurRadius={40}>
          <FlatList
          data={DATA}
          renderItem={renderIte}>
            </FlatList>
      </ImageBackground>
    </View>
    </View>
    
  )
}



const DATA = [
  {
    id: "tomate",
    key: '1',
    title: 'La tomate',
    image1: require("./assets/tomate.png"),
    imageminiature: "./assets/tomate.png",
    link: "https://www.youtube.com/watch?v=Td2bsJIaC5M&list=RDMMTd2bsJIaC5M&start_radio=1",
  },
  {
    id: 'citrouille',
    key: '2',
    title: 'La citrouille',
    image1: require("./assets/citrouille.png"),
    imageminiature: "./assets/citrouille.png",
    link: "https://www.youtube.com/watch?v=2s5KNg_5_LA",
  },
  {
    id: 'Poireau',
    key: '3',
    title: 'Le poireau',
    image1: require("./assets/poireau.png"),
    imageminiature: "./assets/poireau.png",
    link: "https://www.youtube.com/watch?v=Td2bsJIaC5M&list=RDMMTd2bsJIaC5M&start_radio=1",

  },
  {
    id: 'framboise',
    key: '4',
    title: 'la framboise',
    image1: require("./assets/framboise.png"),
    imageminiature: "./assets/framboise.png",
    link: "https://www.youtube.com/watch?v=Td2bsJIaC5M&list=RDMMTd2bsJIaC5M&start_radio=1",


  }
]

const renderIte = ({ item }) => {
  return (
    <View style={styles.casebackground} >
      <Image source={item.image1} resizeMode="contain" style={{width:"60%",height:"60%"}}/>
<Text style = {[{fontFamily:"Pacifico",fontSize:20,}]}>{item.title}</Text>
<Button
style={styles.Button}
      Title="Voir la vidéo"
      onPress={Linking.openURL(item.link)}
    >

    </Button>
    </View>
  );  

}



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles = StyleSheet.create({
  bordureHaut: {
    top:0,
    height:"10%",
    width:"100%",
    justifyContent:"center",
    backgroundColor: "rgb(68,73,123)"
},
  titre:{
    fontFamily:"Pacifico",
    fontSize: 36,
},
vert:{
    color:"rgb(87,241,167)",
},
bleu:{
 color:"rgb(122,213,252)",
},
rouge:{
 color:"rgb(245,123,123)",
},
jaune:{
 color:"rgb(255,251,162)",
},
container: {
  flex:1,
  flexDirection:'column',
  alignItems:"center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  back: {
    width: windowWidth * 1,
    height: windowHeight * 1,
  },
casebackground:{
ImageBackground:"rgb(0,0,0)",
width:"80%",
height : "20%"
},
  Imagelist: {
    width: 20,
    height: 15,
  },
  item: {
    margintop: 24,
    padding: 30,
    backgroundColor: '#44497B',
    fontSize: 24

  },
  titreSport: {
    width:"30%",
    height:"10%",
    marginTop:"2%",
    marginBottom:"2%",
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    borderBottomColor:"rgb(87,241,167)",
    borderBottomWidth:3,
},

});