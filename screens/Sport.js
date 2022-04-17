import { Image, View ,ImageBackground, StyleSheet, Text, FlatList,TextInput,Animated,TouchableHighlight} from 'react-native';
import MenuCool from '../components/MenuCool' ;
import fond from '../assets/fond.jpg';
import * as React from "react";
import { DraxProvider, DraxView } from 'react-native-drax';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { useEffect, useRef } from 'react';


export default function SportScreen({ route, navigation }) {
    let Orniny = route.params;
    const [textD, setTextD] = React.useState('');
    const [textKm, setTextKm] = React.useState('');
    const [faitSport, setFaitSport] = React.useState(false);

    const [compteurPhy, setCompteurPhy] = React.useState(Orniny.ptsPhysique);
  const [compteurMent, setCompteurMent] = React.useState(Orniny.ptsMental);
  const [compteurSas, setCompteurSas] = React.useState(Orniny.sasiete);

  const counterPhy = useRef(new Animated.Value(0)).current;
  const counterMent = useRef(new Animated.Value(0)).current;
  const counterSas = useRef(new Animated.Value(0)).current;

  function sport(nomSport) {
      let varPhy = 0 ;
      let varMent = 0 ;
      let varSas = 0 ;
      if (nomSport == "Course à pied") {
          varPhy = 10 + 0.5 * (parseInt(textD)*parseFloat(textKm)) ;
          varMent = -5 - 0.25 * (parseInt(textD)*parseFloat(textKm));
          varSas = -5 - 0.25 * (parseInt(textD)*parseFloat(textKm));
      } 
      else if (nomSport == "Ping Pong") {
        varPhy = 5 + 0.25 * parseInt(textD);
        varMent = -5 - 0.25 * parseInt(textD);
        varSas = 0 ;
    } 
    else if (nomSport == "Balle au prisonnier") {
        varPhy = 5 + 0.25 * parseInt(textD);
        varMent = 5 + 0.25 * parseInt(textD);
        varSas = -5 - 0.25 * parseInt(textD);
    } ;
    Orniny.ptsMental = Orniny.ptsMental + varMent ;
    Orniny.ptsPhysique = Orniny.ptsPhysique + varPhy ;
    Orniny.sasiete = Orniny.sasiete + varSas ;
    setCompteurMent(Orniny.ptsMental) ;
    setCompteurPhy(Orniny.ptsPhysique) ;
    setCompteurSas(Orniny.sasiete);
    setFaitSport(true) ;
  };

  useEffect(() => {
    load(compteurPhy,compteurMent,compteurSas) ;
    if (compteurPhy >= 100) {
      setCompteurPhy(0);
    }
    if (compteurMent >= 100) {
      setCompteurMent(0);
    } 
    if (compteurSas >= 100) {
      setCompteurSas(0);
    } 
  }, [compteurPhy,compteurMent,compteurSas]);

  const load = (compteurPhy,compteurMent,compteurSas) => {
    Animated.parallel([Animated.timing(counterPhy, {
      toValue: compteurPhy,
      duration: 500,
      useNativeDriver: false,
    }), Animated.timing(counterMent, {
      toValue: compteurMent,
      duration: 500,
      useNativeDriver: false,
    }),Animated.timing(counterSas, {
      toValue: compteurSas,
      duration: 500,
      useNativeDriver: false,
    })]).start();
  };
  

  const widthPhy = counterPhy.interpolate({
  inputRange: [0, 100],
  outputRange: ["0%", "100%"],
  extrapolate: "clamp"
})
const widthMent = counterMent.interpolate({
  inputRange: [0, 100],
  outputRange: ["0%", "100%"],
  extrapolate: "clamp"
})
const widthSas = counterSas.interpolate({
  inputRange: [0, 100],
  outputRange: ["0%", "100%"],
  extrapolate: "clamp"
})

const [quelSport, setQuelSport] = React.useState('');


    return (
    <GestureHandlerRootView style={{flex:1}}>
    <DraxProvider>
    
    <View style= {styles.container}>
    {/* Barre latérale */}
    {/*<View style={styles.bordureHaut}>
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
    </View>*/}

<View style={styles.bordureHaut}>
      
      <View style={{width:'35%',height:'80%',alignItems:'center',justifyContent:'space-between',flexDirection:'column'}}>
  
    <View style={{flexDirection:'row',justifyContent:'center',flexWrap:"nowrap",width:"100%",height:"33%",alignItems:'center',flexGrow:1}}>
    <Text style={[styles.titre,styles.vert,{fontSize:10,width:"20%"}]}>Santé Physique</Text>
    <View style={styles.progressBarV}>
        <Animated.View
          style={
            ([StyleSheet.absoluteFill], 
            { backgroundColor: "rgb(87,241,167)", width:widthPhy })
          }></Animated.View>
      </View></View>

      <View style={{flexDirection:'row',justifyContent:'center',flexWrap:"nowrap",width:"100%",height:"33%",alignItems:'center',flexGrow:1}}>
      <Text style={[styles.titre,styles.jaune,{fontSize:10,width:"20%"}]}>Santé Mentale</Text>
      <View style={styles.progressBarJ}>
      
        <Animated.View
          style={
            ([StyleSheet.absoluteFill], 
            { backgroundColor: 'rgb(255,251,162)', width:widthMent })
          }></Animated.View>
      </View></View>

      <View style={{flexDirection:'row',justifyContent:'center',flexWrap:"nowrap",width:"100%",height:"33%",alignItems:'center',flexGrow:1}}>
      <Text style={[styles.titre,styles.bleu,{fontSize:10,width:"20%"}]}>Sasiété</Text>
      <View style={styles.progressBarB}>
        <Animated.View
          style={
            ([StyleSheet.absoluteFill], 
            { backgroundColor: "rgb(122,213,252)", width:widthSas })
          }></Animated.View>
      </View></View>
      </View>
      
      <View style={{flexGrow:1,height:'100%',justifyContent:'center',alignItems:'center',flexDirection: 'row'}}>
        <Text style={[styles.titre,styles.vert]}>O</Text>
        <Text style={[styles.titre,styles.bleu]}>r</Text>
        <Text style={[styles.titre,styles.rouge]}>n</Text>
        <Text style={[styles.titre,styles.jaune]}>i</Text>
        <Text style={[styles.titre,styles.vert]}>n</Text>
        <Text style={[styles.titre,styles.bleu]}>y</Text>

      </View>

      <View style={{width:'35%',height:'100%',flexDirection: 'row-reverse'}}>
      <MenuCool navigation= {navigation} params ={Orniny}/>
      </View>

      </View>

    {/* Contenu principale */}
    <ImageBackground source={fond} resizeMode="stretch" style = {{width:"100%",flexGrow:1}}>
    <View style = {styles.titreSport}>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.vert]}>Le </Text>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.bleu]}> sport </Text>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.rouge]}>  de </Text>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.jaune]}> Orniny</Text>
    </View>

    <View style = {styles.listeScroll}>
        <FlatList
        horizontal = {true}
        data = {[
            {key: "Course à pied", source: require('../assets/courseAPied.png')},
            {key: "Ping Pong", source: require('../assets/pingPong.png')},
            {key: "Balle au prisonnier", source: require('../assets/BalleAuPrisonnier.png')},
        ]}
        renderItem = {({item}) => 
        <TouchableHighlight style= {(quelSport == item.key) ? styles.caseSportActive : styles.caseSport} onPress={() => setQuelSport(item.key)} 
        activeOpacity = {0.7} underlayColor= "rgb(66,47,107)">
        <View style = {{flex:1,justifyContent:"space-evenly",alignItems:"center",flexDirection:"column",}}>
            <Text style={[{fontFamily:"Pacifico", fontSize: 20,},styles.jaune]}> {item.key}</Text>
            <Image source={item.source} resizeMode="contain" style={{width:"60%",height:"60%"}}/>
        </View>
        </TouchableHighlight>
        }
        />
    </View>

    <View style = {styles.panneau}>
        <View style = {(!faitSport) ? styles.casePanneau : [styles.casePanneau, {opacity:0.4}]}> 
            <View style = {{height:"80%",width:"40%",position:"absolute",left:"2%",top:"10%",borderRadius:5,alignItems:"center",justifyContent:"center"}}> 
            <Text style={{fontFamily:"Pacifico", fontSize: 30,color:"rgb(68,73,123)"}}>Durée (en min)</Text>
            </View>
            <View style = {{height:"80%",width:"55%",position:"absolute",right:"2%",top:"10%",backgroundColor:"rgb(68,73,123)",borderRadius:5,alignItems:"center",justifyContent:"center"}}> 
            <TextInput
        style={{height:"90%",width:"90%",fontFamily:"Pacifico", fontSize: 20,color:"rgb(255,255,255)"}}
        placeholder="0"
        placeholderTextColor="rgb(245,245,245)"
        onChangeText={newText => setTextD(newText)}
        defaultValue={textD}
        editable = {((!faitSport))}
        keyboardType = "numeric"
      />
            </View>
        </View>
        <View style = {(quelSport == ("Course à pied") && (!faitSport)) ? styles.casePanneau : [styles.casePanneau, {opacity:0.4}]}> 
        <View style = {{height:"80%",width:"40%",position:"absolute",left:"2%",top:"10%",borderRadius:5,alignItems:"center",justifyContent:"center"}}> 
        <Text style={{fontFamily:"Pacifico", fontSize: 20,color:"rgb(68,73,123)"}}>Kilomètres parcourus</Text>
        </View>
            <View style = {{height:"80%",width:"55%",position:"absolute",right:"2%",top:"10%",backgroundColor:"rgb(68,73,123)",borderRadius:5,alignItems:"center",justifyContent:"center"}}> 
            <TextInput
        style={{height:"90%",width:"90%",fontFamily:"Pacifico", fontSize: 20,color:"rgb(255,255,255)"}}
        placeholder="0"
        placeholderTextColor="rgb(245,245,245)"
        onChangeText={newText => setTextKm(newText)}
        defaultValue={textKm}
        editable = {(quelSport == ("Course à pied") && (!faitSport))}
        keyboardType = "numeric"
      />
            </View>

        </View>
        <TouchableHighlight style= {(!faitSport) ? {borderRadius: 5, width:"75%", height:"27%", backgroundColor: "rgb(122,213,252)",borderWidth:3,borderColor:"rgb(245,123,123)"} : {borderRadius: 5, width:"75%", height:"27%", backgroundColor: "rgb(122,213,252)",borderWidth:3,borderColor:"rgb(245,123,123)", opacity:0.4,} }
        onPress = {() => sport(quelSport)} disable = {faitSport}>
        <View style = {{flex:1,alignItems:"center", justifyContent:"center",backgroundColor:"rgb(68,73,123)"}}> 
            <Text style={{fontFamily:"Pacifico", fontSize: 30,color:"rgb(245,123,123)"}}>Faire du sport</Text>
        </View>
        </TouchableHighlight>
    </View>

    <Image source={Orniny.image} resizeMode="contain" style={styles.OrninyStyle}></Image>

    </ImageBackground>
    

    </View>
    </DraxProvider>
    </GestureHandlerRootView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        alignItems:"center",
    },
    icone: {
        alignItems: "center",
        justifyContent: "center",
    },
    caseSport: {
        height:"90%",
        flex:1,
        width:400,
        top:"5%",
        marginLeft:"10%",
        marginRight:"10%",
        backgroundColor:"rgb(68,73,123)",
        borderRadius:10,
        opacity: 0.6,
    },
    caseSportActive: {
        height:"90%",
        flex:1,
        width:400,
        top:"5%",
        marginLeft:"10%",
        marginRight:"10%",
        backgroundColor:"rgb(68,73,123)",
        borderRadius:10,
        borderWidth:3,
        borderColor:"rgb(255,251,162)",
    },
    bordureHaut: {
        top:0,
        height:"10%",
        width:"100%",
        justifyContent:"center",
        backgroundColor: "rgb(68,73,123)"
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
    listeScroll: {
        flex:1,
        width:"100%",
        height:"30%",
        backgroundColor: "rgba(68,73,123,0.44)"
    },
    panneau: {
        alignSelf: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        justifyContent:"space-evenly",
        width:"50%",
        height:"35%",
        marginTop:"3%",
        marginLeft:"5%",
        marginBottom:"3%",
        backgroundColor: "rgb(68,73,123)",
        borderRadius: 15,
    },
    casePanneau: {
        borderRadius: 5,
        width:"75%",
        height:"27%",
        backgroundColor: "rgb(122,213,252)",
        alignItems:"center",
        justifyContent:"center",
    },
    OrninyStyle: {
        position: "absolute",
        top:"52.5%",
        right:"5%",
        width:"35%",
        height:"45%",
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

    progressBarJ: {
        height: 10,
        flexDirection: 'row',
        width: '50%',
        backgroundColor: "rgb(68,73,123)",
        borderColor: 'rgb(255,251,162)',
        borderWidth: 2,
        borderRadius: 5,
      },
      progressBarV: {
        height: 10,
        flexDirection: 'row',
        width: '50%',
        backgroundColor: "rgb(68,73,123)",
        borderColor: 'rgb(87,241,167)',
        borderWidth: 2,
        borderRadius: 5,
      },
      progressBarB: {
        height: 10,
        flexDirection: 'row',
        width: '50%',
        backgroundColor: "rgb(68,73,123)",
        borderColor: "rgb(122,213,252)",
        borderWidth: 2,
        borderRadius: 5,
      },
      bordureHaut : {
        width:"100%",
        height:"10%",
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: "rgb(68,73,123)"
      },
});