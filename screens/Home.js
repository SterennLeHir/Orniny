import * as React from "react";
import { useEffect, useRef } from 'react';
import { Image, View ,ImageBackground, StyleSheet, Text, ScrollView,Animated} from 'react-native';
import MenuCool from '../components/MenuCool'
import fond from '../assets/fond.jpg';
import { DraxProvider, DraxView } from 'react-native-drax';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function Aliment(type, image, ptsPhysique, ptsMental) {
  this.type = type;
  this.image = image;
  this.ptsPhysique = ptsPhysique;
  this.ptsMental = ptsMental;
}

//Instanciation des aliments
let fraise = new Aliment('sucre', require('../assets/Fraise.png'), 10, 3);
let framboise =  new Aliment('sucre', require('../assets/framboise.png'), 10, 3);
let chocolat =  new Aliment('sucre', require('../assets/Chocolat.png'), -1, 10);
let citrouille = new Aliment('sale', require('../assets/citrouille.png'), 40, 30);
let poireau = new Aliment('sale', require('../assets/poireau.png'), 5, -1);
let tomate = new Aliment('sale', require('../assets/tomate.png'), 5, 3);
let pomme = new Aliment('sucre', require('../assets/Pomme.png'), 7, -1);


  


export default function HomeScreen({ route, navigation }) {
  let Orniny = route.params;
  const [received, setReceived] = React.useState([]);
  const [compteurPhy, setCompteurPhy] = React.useState(Orniny.ptsPhysique);
  const [compteurMent, setCompteurMent] = React.useState(Orniny.ptsMental);
  const [compteurSas, setCompteurSas] = React.useState(Orniny.sasiete);

  const counterPhy = useRef(new Animated.Value(0)).current;
  const counterMent = useRef(new Animated.Value(1)).current;
  const counterSas = useRef(new Animated.Value(2)).current;

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
  }, [compteurPhy]);

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



  

  function AlimentsBar(){
    return(
      <View style = {styles.containerList}>
      <ScrollView horizontal= {true} contentContainerStyle={styles.contentContainer}>
      {aliments.map((aliment) => (
          <DraxView
            key = {aliment.image}
            style={[styles.centeredContent, styles.draggableBox]}
            draggingStyle={styles.dragging}
            dragReleasedStyle={styles.dragging}
            hoverDraggingStyle={styles.hoverDragging}
            dragPayload={'R'}
            longPressDelay={0}
          >
            <Image key = {aliment.image} source={aliment.image} resizeMode="contain" style={styles.image} data = {[aliment.ptsMental, aliment.ptsPhysique, aliment.type]}></Image>
          </DraxView>
          ))}
      </ScrollView>
      </View>
    )
  }
  
  const aliments = [fraise, framboise, chocolat, citrouille, poireau, tomate, pomme]; //tableau des aliments
  
  function feedOrniny(aliment){
    Orniny.sasiete = Orniny.sasiete + aliment.sasiete;
    Orniny.ptsMental = Orniny.ptsMental + aliment.ptsMental;
    Orniny.ptsPhysique = Orniny.ptsPhysique + aliment.ptsPhysique;
    if (Orniny.ptsPhysique >= 100) Orniny.ptsPhysique = 0 ;
    if (Orniny.ptsMental >= 100) Orniny.ptsMental = 0 ;
    if (Orniny.sasiete >= 100) Orniny.sasiete = 0 ;
    setCompteurPhy(Orniny.ptsPhysique);
    
    setCompteurMent(Orniny.ptsMental);
    setCompteurSas(Orniny.sasiete);
    if (Orniny.ptsPhysique >= 70){ //si les points de santé sont supérieurs à 70%
      Orniny.poids = Orniny.poids - 100; // orniny perds 5 kilos
    }
    if (Orniny.poids <= 150){ // si Orniny fait moins de 150 kilos
      Orniny.image = require('../assets/Orniny.png');
    }
  }

  return (
    < GestureHandlerRootView style={{flex:1}}>
    <DraxProvider>

      
    <View style={styles.container}>

      {/* BARRE DU HAUT */}
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

      {/* CONTENU PRINCIPAL */}

      <ImageBackground source={fond} resizeMode="stretch" style = {{flex:64}}>

      <View style={styles.imageFond}>
      
      <View style={styles.PartieGauche}>
      <View style={styles.Quiz}>

      <View style={styles.case}>

      <View style={styles.caseTitre}>
        <Text style={[styles.titre,styles.vert]}>Q</Text>
        <Text style={[styles.titre,styles.bleu]}>u</Text>
        <Text style={[styles.titre,styles.rouge]}>i</Text>
        <Text style={[styles.titre,styles.jaune]}>z</Text>
        </View>

      <Text style={styles.desc}>Voici le quiz du jour. Répond bien pour gagner des points !</Text>
      
      <View style={styles.bouton}>
        <Text style={styles.textButton}>Jouer</Text>
      </View>
      </View>

      </View>

      <View style={styles.Sport}>
      <View style={styles.case}>

        <View style={styles.caseTitre}>
        <Text style={[styles.titre,styles.vert]}>L</Text>
        <Text style={[styles.titre,styles.bleu]}>e </Text>
        <Text style={[styles.titre,styles.rouge]}>s</Text>
        <Text style={[styles.titre,styles.jaune]}>p</Text>
        <Text style={[styles.titre,styles.vert]}>o</Text>
        <Text style={[styles.titre,styles.bleu]}>r</Text>
        <Text style={[styles.titre,styles.jaune]}>t</Text>
        </View>

        <Text style={styles.desc}>Fais du sport pour gagner encore plus de points !</Text>

        <View style={styles.bouton}>
          <Text style={styles.textButton}>Faire du sport</Text>
        </View>

        </View>

      </View>
      
      </View>

      <View style={styles.Milieu} ></View>

      
      <DraxView
          style={styles.Droit}
          receivingStyle={styles.receiving}
          renderContent={({ viewState }) => {
            const receivingDrag = viewState && viewState.receivingDrag;
            const payload = receivingDrag && receivingDrag.payload;
            return (
              <>
              <Image source={Orniny.image} resizeMode="contain" style={styles.OrninyStyle}></Image>

              </>
            );
          }}
          onReceiveDragDrop={(event) => {
            setReceived([
              ...received,
              event.dragged.payload || '?',
            ]);
            feedOrniny(citrouille);
          }}
        />
       
      </View>
     </ImageBackground>

    
    {/* BARRE DU BAS */}
    <View style={styles.bordure}>
      <AlimentsBar />
    </View>

    </View>
    </DraxProvider>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'center',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: "center",

  },
  PartieGauche: {
    height: "100%",
    justifyContent: "space-around",
    width: "33%",
    alignItems: "center",
  },
  Quiz: {
    width: "90%",
    height: "45%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(68,73,123,0.8)",
    borderRadius: 10,
  },
  Sport: {
    width: "90%",
    height: "45%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(68,73,123,0.8)",
    borderRadius: 10,
  },
  Milieu: {
    flexGrow:1,
    height: "100%",
    width: "33%",
  },
  Droit:{
    height: "50%",
    width: "34%",
    alignSelf:"flex-end",
  },
  imageFond: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  OrninyStyle: {
    height:"100%",
    width:"100%",
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
  },
  bordureHaut : {
    flex: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "rgb(68,73,123)"
  },
  image: {
    width: 50,
    height: 50,
    flex:1,
  },

  // View case :

  case:{
    width: "90%",
    height: "90%",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    
  },
  caseTitre:{
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    alignContent:"stretch",
  },

  // Boutons :

  bouton: {
    width: "50%",
    height: "20%",
    borderRadius: 10,
    borderColor:"rgb(255,251,162)",
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  // Texte :
  titre:{
    fontFamily:"Pacifico",
    fontSize: 36,
  },
  desc:{
    fontFamily:"NotoSans",
    fontSize: 20,
    color: "white",
  },
  textButton:{
    fontFamily:"Pacifico",

    fontSize: 18,
    color:"rgb(255,251,162)",
  },

  // Couleurs :

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

  // Styles pour le dragNdrop :
  
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  receivingZone: {
    borderRadius: 10,
  },
  receiving: {
    borderColor: 'red',
    borderWidth: 2,
  },
  incomingPayload: {
    marginTop: 10,
    fontSize: 24,
  },
  received: {
    marginTop: 10,
    fontSize: 18,
  },
  draggableBox: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  green: {
    backgroundColor: '#aaffaa',
  },
  blue: {
    backgroundColor: '#aaaaff',
  },
  red: {
    backgroundColor: '#ffaaaa',
  },
  yellow: {
    backgroundColor: '#ffffaa',
  },
  cyan: {
    backgroundColor: '#aaffff',
  },
  magenta: {
    backgroundColor: '#ffaaff',
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: 'magenta',
    borderWidth: 2,
  },
  stagedCount: {
    fontSize: 18,
  },

  // Barre de chargement

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
});

