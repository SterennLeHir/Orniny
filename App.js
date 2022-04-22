import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground,Button, Pressable } from 'react-native';
import { Dimensions } from 'react-native-web';


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
    
    </View>

       <View style={styles.container}>

      <ImageBackground
        style={styles.back}
        source={require('./assets/fond.jpg')}
        blurRadius={40}>
             <View style = {styles.titreSport}>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.vert]}>Le </Text>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.bleu]}>quiz </Text>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.rouge]}>du</Text>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.jaune]}>jour</Text>
    </View>
<View style= {styles.zonequizz}>
    
      <Text style={styles.question}>les yaourts rendent-ils nos os solides ?</Text>
      
        <Image source={'./assets/OrninyThinking.png'} resizeMode="contain" style={{height:"70%",width:"80%"}}>

        </Image>
      
     <View style = {styles.boutongauche}>
      
      
    <Pressable onPress={boutonvrai}>
    <Text style = {styles.textButton}>Vrai</Text>
    </Pressable>
     </View>
     <View style= {styles.boutondroite}>
     <Pressable onPress={boutonfaux} >
     <Text style = {styles.textButton}>Faux</Text>
    </Pressable>
     </View>
    </View>
</ImageBackground>
  </View>
  </View>
  )
}

const boutonvrai =() =>{
  
  
  
}
const boutonfaux =() =>{
  

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
  item: {
    margintop: 24,
    padding: 30,
    backgroundColor: '#44497B',
    fontSize: 24

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
zonequizz: {
  width : "70%",
  alignSelf:'center',
  
  height :"80%",
  backgroundColor : "rgb(68,73,123)"
},
question : {
marginTop :"5%",
position:'absolute',
alignSelf :'center',
fontSize:30
},
boutongauche:{
alignSelf:"flex-start",
backgroundColor:"rgb(0,0,0)",
marginTop: "40%",
marginBottom: "20%",
marginLeft:"5%",
width:"50%",
lenght:"100%"
},
boutongauche:{
  alignSelf:"flex-start",
  backgroundColor:"rgb(0,0,0)",
  marginTop: "40%",
  marginBottom: "20%",
  marginLeft:"5%",
  width:"50%",
  lenght:"100%"
},
orniny: {
  
  width:"50%",
  height:"50%"
},
textButton:{
  fontFamily:"Pacifico",

  fontSize: 18,
  color:"rgb(255,251,162)",
},
});
