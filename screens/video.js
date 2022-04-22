import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground, FlatList, Linking, Button ,Pressable } from 'react-native';
import MenuCool from '../components/MenuCool' ;

export default function video({ route, navigation }) {
    let Orniny = route.params;
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
        <MenuCool navigation= {navigation} params= {Orniny}/>
    </View>
    </View>

       <View style={styles.container}>

      <ImageBackground
        style={styles.back}
        source={require('../assets/fond.jpg')}
        blurRadius={40}>
             <View style = {styles.titreSport}>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.vert]}>Les </Text>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.bleu]}>vidéos </Text>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.rouge]}>d'</Text>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.jaune]}>Orniny</Text>
    </View>
    
    
      
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
    title: ' La tomate',
    petittext2 :"Orniny vous montre les bienfaits de la tomate.",
    image1: require("../assets/tomate.png"),
    link: "https://www.youtube.com",
  },
  {
    id: 'citrouille',
    key: '2',
    petittext2 :"Orniny vous montre les bienfaits de la citrouille.",
    title: ' La citrouille',
    image1: require("../assets/citrouille.png"),
    link: "https://www.youtube.com",
  },
  {
    id: 'Poireau',
    key: '3',
    title: ' Le poireau',
    petittext2 :"Orniny vous montre les bienfaits du poireau. ",
    image1: require("../assets/poireau.png"),
    link: "https://www.youtube.com",

  },
  {
    id: 'framboise',
    key: '4',
    title: ' La framboise',
    petittext2 :"Orniny vous montre les bienfaits de la framboise.",
    image1: require("../assets/framboise.png"),
    link: "https://www.youtube.com",


  }
]

const renderIte = ({ item }) => {
  return (
    <View style={styles.casebackground} >
      <View style={styles.Imagelist}>
      <Image source={item.image1} resizeMode="contain" style={{width:"100%",height:"100%"}}/>
      </View>
      <View style={styles.textsurleslegumes}>
      <Text style = {[{fontFamily:"NotoSans",fontSize:25,color:"rgb(255,251,162)"}]}>{item.title}</Text>
      
      <Text style = {[{fontFamily:"NotoSans",fontSize:20,marginTop:"5%",color:'rgb(256,256,256)'}]}> {item.petittext2}</Text>
      </View>
      <View style = {styles.buttonview}>
      <Pressable onPress={() =>  Linking.openURL(item.link)}>
            <Text style = {styles.textButton}>Voir la video</Text>
          </Pressable>
      </View>
    </View>
  );  

}




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
  width:"100%",
  height:"100%"
  
  },
  textsurleslegumes:{
    marginLeft:"5%",
alignContent:"space-between",
alignSelf:"center"

  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  back: {
    width: "100%",
    height: "100%"
  },
casebackground:{
borderRadius:5,
backgroundColor:"rgba(68,73,123,1)",
width:"80%",
height:"70%",
marginBottom:"10%",
alignSelf:"center",
flexDirection:"row"
},
  Imagelist: {
    
    marginLeft:"5%",
    width: "10%",
    height: "100%",
    alignItems:"center",
    alignSelf:"auto"
  },
  titreSport: {    
    width:"40%",
    height:"10%",
    marginTop:"2%",
    marginBottom:"2%",
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
    borderBottomColor:"rgb(87,241,167)",
    borderBottomWidth:1,
},
listeScroll: {
  flex:1,
  width:"80%",
  height:"30%",
  backgroundColor: "rgba(68,73,123,0.44)",
  justifyContent:"center",
  alignSelf:"center",
  alignItems:"center"
},
buttonview : {
 width:"22%",
 height:"25%",
 justifyContent:'flex-end',
 position:"absolute",
alignSelf:"center",
borderRadius: 10,
borderColor:"rgb(255,251,162)",
borderWidth: 3,
  alignItems: "center",
  left:"70%"
  
 
  
},
textButton:{
  fontFamily:"Pacifico",

  fontSize: 18,
  color:"rgb(255,251,162)",
},
});