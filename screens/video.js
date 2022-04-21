import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground, FlatList, Linking, Button } from 'react-native';
import { Dimensions, TouchableWithoutFeedback, YellowBox } from 'react-native-web';
import MenuCool from '../components/MenuCool' ;

export default function Video({ route, navigation }) {
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
    petittext1:"",
    petittext2 :"Orniny vous montre les bienfaits de la tomate.",
    image1: require("../assets/tomate.png"),
    imageminiature: "./assets/tomate.png",
    link: "https://www.youtube.com",
  },
  {
    id: 'citrouille',
    key: '2',
    petittext1:"",
    petittext2 :"Orniny vous montre les bienfaits de la citrouille.",
    title: ' La citrouille',
    image1: require("../assets/citrouille.png"),
    imageminiature: "./assets/citrouille.png",
    link: "https://www.youtube.com",
  },
  {
    id: 'Poireau',
    key: '3',
    title: ' Le poireau',
    petittext1:"",
    petittext2 :"Orniny vous montre les bienfaits du poireau.",
    image1: require("../assets/poireau.png"),
    imageminiature: "./assets/poireau.png",
    link: "https://www.youtube.com",

  },
  {
    id: 'framboise',
    key: '4',
    title: ' La framboise',
    petittext1:"",
    petittext2 :"Orniny vous montre les bienfaits de la framboise.",
    image1: require("../assets/framboise.png"),
    imageminiature: "./assets/framboise.png",
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
      <Text style = {[{fontFamily:"NotoSans",fontSize:20,color:'rgb(256,256,256)'}]}>{item.title}</Text>
      <Text style = {[{fontFamily:"NotoSans",fontSize:15,}]}> {item.petittext1}</Text>
      <Text style = {[{fontFamily:"NotoSans",fontSize:15,}]}> {item.petittext2}</Text>
      </View>
      <View style = {styles.buttonview}>
      <Button
      title="Voir la vidéo"
      onPress={()=>Linking.openURL(item.link)}
      color="rgb(122,213,252)"
    >
    </Button>
      </View>
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
button:{
  width:"12%",
  height : "10%",
  alignSelf:"stretch",
}
,
buttonview : {
  width:"35%",
  height:"44%",
flexDirection:'row',
justifyContent:'flex-end',
alignSelf:'center',
alignItems:'flex-end'

},
});