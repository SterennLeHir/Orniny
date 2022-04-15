import * as React from "react";
import { useEffect, useRef } from 'react';
import { Button, Image, View ,ImageBackground, StyleSheet, Text, ScrollView,Animated} from 'react-native';
import MenuCool from '../components/MenuCool'
import fond from '../assets/fond.jpg';
import { DraxProvider, DraxView } from 'react-native-drax';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function Aliment(type, sasiete, image, ptsPhysique, ptsMental) {
  this.type = type;
  this.sasiete = sasiete;
  this.image = image;
  this.ptsPhysique = ptsPhysique;
  this.ptsMental = ptsMental;
}

//Instanciation des aliments
//Entrées type 1
let pate = new Aliment(1, 25, require('../assets/Fraise.png'), 10, 33); //aliment très apprécié
let carottes =  new Aliment(1, 10, require('../assets/framboise.png'), 20, 10); // aliment pas apprécié
let betteraves =  new Aliment(1, 15, require('../assets/Chocolat.png'), 20, 10); // aliment pas apprécié
let saucissons =  new Aliment(1, 10, require('../assets/Chocolat.png'), 10, 25); // aliment apprécié
//Plats type 2
let steak = new Aliment(2, 60, require('../assets/citrouille.png'), 45, 15); // aliment bof
let pates = new Aliment(2, 65, require('../assets/poireau.png'), 35, 25); // aliment apprécié
let hamburger = new Aliment(2, 70, require('../assets/tomate.png'), 20, 33); //aliment très apprécié
let riz = new Aliment(2, 60, require('../assets/Pomme.png'), 40, 15); // aliment bof
let poisson = new Aliment(2, 60, require('../assets/Pomme.png'), 45, 10); // aliment pas apprécié
let salade = new Aliment(2, 50, require('../assets/Pomme.png'), 50, 10); // aliment pas apprécié
//Desserts type 3
let moelleux = new Aliment(3, 20, require('../assets/Pomme.png'), 5, 33); //aliment très apprécié
let saladeFruits = new Aliment(3, 10, require('../assets/Pomme.png'), 20, 10); // aliment pas apprécié
let tiramisu = new Aliment(3, 15, require('../assets/Pomme.png'), 10, 25); // aliment apprécié
let glace = new Aliment(3, 15, require('../assets/Pomme.png'), 10, 33); //aliment très apprécié
let yaourt = new Aliment(3, 10, require('../assets/Pomme.png'), 20, 15); // aliment bof
//tableau des aliments
const aliments = [pate, carottes, betteraves, saucissons, steak, pates, hamburger, riz, poisson, salade, moelleux, saladeFruits, tiramisu, glace, yaourt]; 
  


export default function HomeScreen({ route, navigation }) {
  let Orniny = route.params;
  const [received, setReceived] = React.useState([]);
  const [compteurPhy, setCompteurPhy] = React.useState(Orniny.sante);
  const [compteurMent, setCompteurMent] = React.useState(Orniny.bonheur);
  const [compteurSas, setCompteurSas] = React.useState(100 - Orniny.sasiete);
  const counterPhy = useRef(new Animated.Value(0)).current;
  const counterMent = useRef(new Animated.Value(1)).current;
  const counterSas = useRef(new Animated.Value(2)).current;

  useEffect(() => {
    load(compteurPhy,compteurMent,compteurSas) ;
    if (compteurPhy > 100) {
      setCompteurPhy(0);
    }
    if (compteurMent > 100) {
      setCompteurMent(0);
    } 
    if (compteurSas > 100) {
      setCompteurSas(0);
    } 
  }, [compteurPhy, compteurMent, compteurSas]);

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
  
  function feedOrniny(aliment){
    if (!Orniny.repus){ // si Orniny n'a pas fini de manger
      Orniny.sasiete = Orniny.sasiete + aliment.sasiete;
      Orniny.ptsMental = Orniny.ptsMental + aliment.ptsMental;
      Orniny.ptsPhysique = Orniny.ptsPhysique + aliment.ptsPhysique;
      Orniny.variete.push(aliment.type);
      setCompteurSas(100 - Orniny.sasiete);
    }
  }

  function actualiseOrniny() {
    Orniny.repus = true;
    let nbEntree = 0; // nombre d'entrées 
    let nbPlat = 0; // nombre de plats
    let nbDessert = 0; // nombre de desserts
    for (let i = 0; i < Orniny.variete.length; i++) {
      if (Orniny.variete[i] == 1) nbEntree += 1;
      if (Orniny.variete[i] == 2) nbPlat += 1;
      if (Orniny.variete[i] == 3) nbDessert += 1;
    } 

    // Analyse du repas
    if(Orniny.variete.length > 3) Orniny.ptsPhysique = Orniny.ptsPhysique - 10; // si Orniny a mangé + de 3 choses
    if(Orniny.variete.length < 2) Orniny.ptsPhysique = Orniny.ptsPhysique - 10; // si Orniny a mangé - de 2 choses
    if(nbEntree > 1) Orniny.ptsPhysique = Orniny.ptsPhysique - 3*nbEntree;
    if(nbPlat > 1) Orniny.ptsPhysique = Orniny.ptsPhysique - 7*nbPlat;
    if(nbDessert > 1) Orniny.ptsPhysique = Orniny.ptsPhysique - 10*nbEntree;
    if (nbPlat == 0) Orniny.ptsPhysique = Orniny.ptsPhysique - 10;
    if (Orniny.sasiete > 100) Orniny.ptsPhysique = Orniny.ptsPhysique - 20; // si Orniny a trop mangé
    prompt("repas analysé");
    // rectification des valeurs 
    if (Orniny.ptsPhysique > 100) Orniny.ptsPhysique = 100;
    if (Orniny.ptsMental > 100) Orniny.ptsMental = 100;
    if (Orniny.ptsMental < 0) Orniny.ptsMental = 0;
    if (Orniny.ptsPhysique < 0) Orniny.ptsPhysique = 0;
    prompt("valeurs rectifiées");
    // Perte de poids
    
    if (Orniny.poids >= 160){
      prompt("perte de poids");
      if (Orniny.ptsPhysique >= 90) Orniny.poids -= 2;
      if (Orniny.ptsPhysique >= 80 && Orniny.ptsPhysique < 90) Orniny.poids -= 1.5;
      if (Orniny.ptsPhysique >= 70 && Orniny.ptsPhysique < 80) Orniny.poids -= 1;
      if (Orniny.ptsPhysique >= 60 && Orniny.ptsPhysique < 70) Orniny.poids -= 0.5;
      prompt("bons points");
      if (Orniny.ptsPhysique >= 50 && Orniny.ptsPhysique < 60) {
        if (Orniny.sasiete > 50) Orniny.poids += 0.5; // si Orniny a mangé trop gras
        else { //s'il n'a pas mangé assez
          Orniny.poids -= 0.5;
          Orniny.ptsMental -= 3;
        } 
      }
      if (Orniny.ptsPhysique >= 40 && Orniny.ptsPhysique < 50) {
        if (Orniny.sasiete > 50) Orniny.poids += 1; 
        else {
          Orniny.poids -= 1;
          Orniny.ptsMental -= 5;
        }
      }
      if (Orniny.ptsPhysique >= 30 && Orniny.ptsPhysique < 40){
        if (Orniny.sasiete > 50) Orniny.poids += 1.5; 
        else {
          Orniny.poids -= 1.5;
          Orniny.ptsMental -= 7;
        }
      }
      if (Orniny.ptsPhysique >= 20 && Orniny.ptsPhysique < 30){
        if (Orniny.sasiete > 50) Orniny.poids += 1.5; 
        else {
          Orniny.poids -= 1.5;
          Orniny.ptsMental -= 7;
        }
      }
      prompt("mauvais points");
    }
    prompt("perte de poids");
    // Remise à 0 si nécessaire (pour les tests)
    if (Orniny.sante >= 100) Orniny.sante = 0 ;
    if (Orniny.bonheur >= 100) Orniny.bonheur = 0 ;
    if (Orniny.sasiete >= 100) Orniny.sasiete = 0 ;
    prompt("remise à 0");
    prompt(Orniny.sante)
    prompt(Orniny.bonheur)
    prompt(Orniny.ptsPhysique)
    prompt(Orniny.ptsMental);
    // actualisation des compteurs
    if (Orniny.ptsPhysique >= 60){
      prompt("donnée actualisée 1");
      Orniny.sante = Orniny.sante + Orniny.ptsPhysique*0.1;
      prompt(Orniny.sante)
    }
    if (Orniny.ptsPhysique < 60){
      prompt("donnée actualisée 2");
      Orniny.sante = Orniny.sante - (1 - Orniny.ptsPhysique)*0.1;
      prompt(Orniny.sante)
    }
    if (Orniny.ptsMental >= 60){
      prompt("donnée actualisée 3");
      Orniny.bonheur = Orniny.bonheur + Orniny.ptsMental*0.1;
      
    }
    if (Orniny.ptsMental < 60){
      prompt("donnée actualisée 4");
      Orniny.bonheur = Orniny.bonheur - (1 - Orniny.ptsMental)*0.1;
      
    }
    prompt("données actualisées");
    if (Orniny.sante < 10) Orniny.bonheur -= 2; // Orniny ne peut être heureux s'il est en mauvaise santé
    if (Orniny.bonheur < 10) Orniny.sante -= 2; // Orniny ne peut pas être en bonne santé s'il n'est pas heureux
    setCompteurPhy(Orniny.sante);
    setCompteurMent(Orniny.bonheur);
    prompt("c'est fini");
  }

  return (
    < GestureHandlerRootView style={{flex:1}}>
    <DraxProvider>

      
    <View style={styles.container}>

      {/* BARRE DU HAUT */}
      <View style={styles.bordureHaut}>
      
      <View style={{width:'35%',height:'80%',alignItems:'center',justifyContent:'space-between',flexDirection:'column'}}>
  
      <View style={{flexDirection:'row',justifyContent:'center',flexWrap:"nowrap",width:"100%",height:"33%",alignItems:'center',flexGrow:1}}>
    <Text style={[styles.titre,styles.vert,{fontSize:10,width:"20%"}]}>Santé</Text>
    <View style={styles.progressBarV}>
        <Animated.View
          style={
            ([StyleSheet.absoluteFill], 
            { backgroundColor: "rgb(87,241,167)", width:widthPhy })
          }></Animated.View>
      </View></View>

      <View style={{flexDirection:'row',justifyContent:'center',flexWrap:"nowrap",width:"100%",height:"33%",alignItems:'center',flexGrow:1}}>
      <Text style={[styles.titre,styles.jaune,{fontSize:10,width:"20%"}]}>Bonheur</Text>
      <View style={styles.progressBarJ}>
      
        <Animated.View
          style={
            ([StyleSheet.absoluteFill], 
            { backgroundColor: 'rgb(255,251,162)', width:widthMent })
          }></Animated.View>
      </View></View>

      <View style={{flexDirection:'row',justifyContent:'center',flexWrap:"nowrap",width:"100%",height:"33%",alignItems:'center',flexGrow:1}}>
      <Text style={[styles.titre,styles.bleu,{fontSize:10,width:"20%"}]}>Faim</Text>
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

      <View style = {{width: '10%', justifyContent : 'right', margin:'auto', marginBottom:'10px'}}> 
          <Button style = {styles.button} title= "Repas terminé" onPress={actualiseOrniny} />
      </View>
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
            feedOrniny(pates);
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
