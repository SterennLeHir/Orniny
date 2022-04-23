import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground,Button, Pressable } from 'react-native';
import { Dimensions } from 'react-native-web';
import MenuCool from '../components/MenuCool' ;

export default function  Quiz ({ route, navigation }) {
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
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.vert]}>Le </Text>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.bleu]}>quiz </Text>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.rouge]}>du </Text>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.jaune]}>jour</Text>
    </View>
<View style= {styles.zonequizz}>
    
      <Text style={styles.question}>les yaourts rendent-ils nos os solides ?</Text>
      
        <Image source= {require('../assets/OrninyThinking.png')} style={styles.orniny}/>

      
      
     <View style = {styles.boutongauche}>
      
      
    <Pressable onPress={() => navigation.navigate('Vrai',Orniny)}>
    <Text style = {styles.textButton}>Vrai</Text>
    </Pressable>
     </View>
     <View style= {styles.boutondroite}>
     <Pressable onPress={()=> navigation.navigate('Faux',Orniny) } >
     <Text style = {styles.textButton}>Faux</Text>
    </Pressable>
     </View>
    </View>
</ImageBackground>
  </View>
  </View>
  )
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
  back: {
    width: windowWidth * 1,
    height: windowHeight * 1,
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


zonequizz: {
  width : "70%",
  alignSelf:'center',
  
  height :"80%",
  backgroundColor : "rgb(68,73,123)"
},
question : {
  color:"rgb(256,256,256)",
marginTop :"5%",
position:'absolute',
alignSelf :'center',
fontSize:30
},
boutongauche:{
  width:"22%",
  height:"15%",
  justifyContent:'center',
 alignSelf:"flex-start",
 borderRadius: 10,
 borderColor:"rgb(255,251,162)",
 borderWidth: 3,
   alignItems: "center",
  marginLeft:"5%",
  position:"absolute",
  top:"70%"
},
boutondroite:{
  width:"22%",
 height:"15%",
 justifyContent:'center',
 position:"absolute",
 top:"70%",
alignSelf:"flex-end",
borderRadius: 10,
borderColor:"rgb(255,251,162)",
borderWidth: 3,
  alignItems: "center",
  marginRight:"5%"
},
orniny: {
  alignItems:'center',
  alignSelf:"center",
  width:"30%",
  height:"60%",
  position:"absolute",
  top:"20%"
},
textButton:{
  fontFamily:"Pacifico",

  fontSize: 30,
  color:"rgb(255,251,162)",
},
});
