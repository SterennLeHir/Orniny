import * as React from "react";
import { useEffect, useRef } from 'react';
import { Button,Modal, Image, View ,ImageBackground, StyleSheet, Text, ScrollView,Animated, Pressable, TouchableOpacity} from 'react-native';
import MenuCool from '../components/MenuCool'
import fond from '../assets/fond.jpg';
import fondNuit from '../assets/fondNuit.jpg';
import OrninyRepos from '../assets/OrninyQuiDort.png';
import OrninyObese from '../assets/OrninyObese.png';
import OrninyGros from '../assets/OrninyGros.png';
import OrninyBeauBebe from '../assets/OrninyBeauBebe.png';
import OrninyIdeal from '../assets/OrninyIdeal.png';
import OrninyMaigre from '../assets/OrninyMaigre.png';
import { DraxProvider, DraxView } from 'react-native-drax';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



function Aliment(type, sasiete, image, ptsPhysique, ptsMental, nom) {
  this.type = type;
  this.sasiete = sasiete;
  this.image = image;
  this.ptsPhysique = ptsPhysique;
  this.ptsMental = ptsMental;
  this.nom = nom ;
}


//Entrées type 1
let pate = new Aliment(1, 25, require('../assets/Pate.png'), 10, 33, "Pâté"); //aliment très apprécié
let carottes =  new Aliment(1, 10, require('../assets/Carottes.png'), 20, 10, "Carottes râpées"); // aliment pas apprécié
let betteraves =  new Aliment(1, 15, require('../assets/Betteraves.png'), 20, 10, "Betteraves"); // aliment pas apprécié
let saucisson =  new Aliment(1, 10, require('../assets/Saucisson.png'), 10, 25, "Saucisson"); // aliment apprécié
//Plats type 2
let steak = new Aliment(2, 60, require('../assets/SteakHaricots.png'), 45, 15, "Steak haricots"); // aliment bof
let pates = new Aliment(2, 65, require('../assets/PatesBolognaises.png'), 35, 25, "Pâtes bolognaises"); // aliment apprécié
let hamburger = new Aliment(2, 70, require('../assets/HamburgerFrites.png'), 20, 33, "Hamburger"); //aliment très apprécié
let riz = new Aliment(2, 60, require('../assets/RizDinde.png'), 40, 15, "Riz dinde"); // aliment bof
let poisson = new Aliment(2, 60, require('../assets/PoissonEpinards.png'), 45, 10, "Poisson épinards"); // aliment pas apprécié
let salade = new Aliment(2, 50, require('../assets/SaladeComposee.png'), 50, 10, "Salade composée"); // aliment pas apprécié
//Desserts type 3
let moelleux = new Aliment(3, 20, require('../assets/MoelleuxAuChocolat.png'), 5, 33, "Moelleux au chocolat"); //aliment très apprécié
let saladeFruits = new Aliment(3, 10, require('../assets/SaladeDeFruits.png'), 20, 10, "Salade de fruits"); // aliment pas apprécié
let tiramisu = new Aliment(3, 15, require('../assets/Tiramisu.png'), 10, 25, "Tiramisu"); // aliment apprécié
let glace = new Aliment(3, 15, require('../assets/Glace.png'), 10, 33, "Glace"); //aliment très apprécié
let yaourt = new Aliment(3, 10, require('../assets/Yaourt.png'), 20, 15, "Yaourt"); // aliment bof
//tableau des aliments
const aliments = [pate, carottes, betteraves, saucisson, steak, pates, hamburger, riz, poisson, salade, moelleux, saladeFruits, tiramisu, glace, yaourt]; 

export default function HomeScreen({ route, navigation }) {
  const [modalVisible, setModalVisible] = React.useState(false);

  let Orniny = route.params;

  const [compteurPhy, setCompteurPhy] = React.useState(Orniny.sante);
  const [compteurMent, setCompteurMent] = React.useState(Orniny.bonheur);
  const [compteurSas, setCompteurSas] = React.useState(100 - Orniny.sasiete);
  const [compteurPoids, setCompteurPoids] = React.useState(Orniny.poids);


  const counterPhy = useRef(new Animated.Value(0)).current;
  const counterMent = useRef(new Animated.Value(0)).current;
  const counterSas = useRef(new Animated.Value(0)).current;
  const counterPoids = useRef(new Animated.Value(0)).current;

  const [dodo, setDodo] = React.useState(false) ;
  const [spriteOrniny, setSpriteOrniny] = React.useState(Orniny.image);

  useEffect(() => {
    load(compteurPhy,compteurMent,compteurSas,compteurPoids) ;
    if (compteurPhy > 100) {
      setCompteurPhy(0);
    }
    if (compteurMent > 100) {
      setCompteurMent(0);
    } 
    if (compteurSas > 100) {
      setCompteurSas(0);
    } 
    if (compteurPoids > 240) {
      setCompteurPoids(0);
    } 
  }, [compteurPhy, compteurMent, compteurSas, compteurPoids]);


  const load = (compteurPhy,compteurMent,compteurSas,compteurPoids) => {
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
    }), Animated.timing(counterPoids, {
      toValue: compteurPoids,
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
const widthPoids = counterPoids.interpolate({
  inputRange: [40, 240],
  outputRange: ["0%", "100%"],
  extrapolate: "clamp"
})

  function AlimentsBar(){
    return(
      <View style = {styles.containerList}>
      <ScrollView horizontal= {true} contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity style={{top:"5%",marginHorizontal:15,justifyContent:"center",alignItems:"center", borderRadius:10,
                                  borderColor:"rgb(255,251,162)", borderWidth: 3,}}
                                  onPress={() => setModalVisible(true)}>
        <Text style = {{fontFamily: 'Pacifico', color: "rgb(255,251,162)"
                , fontSize: 15,textAlign:'center' }}> Informations </Text>
        </TouchableOpacity>
      {aliments.map((aliment) => (
        <View style={{height:"90%",top:0,flexDirection:"column",justifyContent:"center",alignItems:"center",marginHorizontal:15}}>
          <DraxView
            key = {aliment.image}
            style={[styles.centeredContent, styles.draggableBox]}
            draggingStyle={styles.dragging}
            dragReleasedStyle={styles.dragging}
            hoverDraggingStyle={styles.hoverDragging}
            dragPayload={aliment}
            longPressDelay={0}
          >
            <Image key = {aliment.image} source={aliment.image} resizeMode="contain" style={{top:0,height:"100%",width:"100%"}} data = {[aliment.ptsMental, aliment.ptsPhysique, aliment.type]}></Image>
          </DraxView>
          <Text style= {{position:"absolute",top:"75%",left:"10%", height:"10%",width:"80%",fontFamily:"NotoSans", fontSize: 10,color:"rgb(255,255,255)", textAlign:"center"}}>{aliment.nom}</Text>
          </View>
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
    if (!Orniny.repus){
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
      if(nbEntree > 1) {
        Orniny.ptsPhysique = Orniny.ptsPhysique - 3*nbEntree;
        Orniny.ptsMental = Orniny.ptsMental - 10*nbEntree ;
      }
      if(nbPlat > 1) {
        Orniny.ptsPhysique = Orniny.ptsPhysique - 10*nbPlat;
        Orniny.ptsMental = Orniny.ptsMental - 10*nbPlat ;
      }
      if(nbDessert > 1) {
        Orniny.ptsPhysique = Orniny.ptsPhysique - 7*nbDessert;
        Orniny.ptsMental = Orniny.ptsMental - 10*nbDessert ;
      }
      if (nbPlat == 0) Orniny.ptsPhysique = Orniny.ptsPhysique - 20;
      if (Orniny.sasiete > 100) Orniny.ptsPhysique = Orniny.ptsPhysique - 20; // si Orniny a trop mangé
      // rectification des valeurs 
      if (Orniny.ptsPhysique > 100) Orniny.ptsPhysique = 100;
      if (Orniny.ptsMental > 100) Orniny.ptsMental = 100;
      if (Orniny.ptsMental < 0) Orniny.ptsMental = 0;
      if (Orniny.ptsPhysique < 0) Orniny.ptsPhysique = 0;
      // Perte de poids
      if (Orniny.poids >= 160){
        if (Orniny.ptsPhysique >= 90) Orniny.poids -= 2;
        if (Orniny.ptsPhysique >= 80 && Orniny.ptsPhysique < 90) Orniny.poids -= 1.5;
        if (Orniny.ptsPhysique >= 70 && Orniny.ptsPhysique < 80) Orniny.poids -= 1;
        if (Orniny.ptsPhysique >= 60 && Orniny.ptsPhysique < 70) Orniny.poids -= 0.5;
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
          if (Orniny.sasiete > 50) {
            Orniny.poids += 1.5;
          }
          else {
            Orniny.poids -= 1.5;
            Orniny.ptsMental -= 7;
          }
        }
        if (Orniny.ptsPhysique <= 20 ){
          if (Orniny.sasiete > 50) Orniny.poids += 2; 
          else {
            Orniny.poids -= 2;
            Orniny.ptsMental -= 7;
          }
        }
      }
    if (Orniny.sante >= 100) Orniny.sante = 100 ;
    if (Orniny.bonheur >= 100) Orniny.bonheur = 100 ;
    if (Orniny.sasiete >= 100) Orniny.sasiete = 100 ;
    // actualisation des compteurs
    if (Orniny.ptsPhysique >= 60){
      Orniny.sante = Orniny.sante + Orniny.ptsPhysique*0.1;
    }
    if (Orniny.ptsPhysique < 60){
      Orniny.sante = Orniny.sante - (100 - Orniny.ptsPhysique)*0.01;
    }
    if (Orniny.ptsMental >= 60){
      Orniny.bonheur = Orniny.bonheur + Orniny.ptsMental*0.1;
      
    }
    if (Orniny.ptsMental < 60){
      Orniny.bonheur = Orniny.bonheur - (100 - Orniny.ptsMental)*0.01;
    }
    
      if (Orniny.sante < 10) Orniny.bonheur -= 2; // Orniny ne peut être heureux s'il est en mauvaise santé
      if (Orniny.bonheur < 10) Orniny.sante -= 2; // Orniny ne peut pas être en bonne santé s'il n'est pas heureux
      setCompteurPhy(Orniny.sante);
      setCompteurMent(Orniny.bonheur);
      setCompteurPoids(Orniny.poids);
      Orniny.variete = [] ;
      Orniny.ptsMental = 0 ;
      Orniny.ptsPhysique = 0 ;
      Orniny.sasiete = 0 ;

      
  
      if (Orniny.poids > 200) { setSpriteOrniny(OrninyObese) ; Orniny.image = OrninyObese ; }
      else if (Orniny.poids > 160) { setSpriteOrniny(OrninyGros) ; Orniny.image = OrninyGros ; }
      else if (Orniny.poids > 120) { setSpriteOrniny(OrninyBeauBebe) ; Orniny.image = OrninyBeauBebe ; }
      else if (Orniny.poids > 80) { setSpriteOrniny(OrninyIdeal) ; Orniny.image = OrninyIdeal ; }
      else { setSpriteOrniny(OrninyMaigre) ; Orniny.image = OrninyMaigre ; }    
  }
}

  function repos() {
    dodo ? setDodo(false) : setDodo(true) ;
    
  }
  
  return (
    < GestureHandlerRootView style={{flex:1}}>
    <DraxProvider>

      
    <View style={styles.container}>

      {/* BARRE DU HAUT */}
      <View style={styles.bordureHaut}>
      
      <View style={{width:'35%',height:'90%',alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
  
      <View style={{width:"50%",height:"100%",top:0,alignItems:'center',justifyContent:'space-between',flexDirection:'column'}}>
      <View style={{flexDirection:'row',justifyContent:'center',flexWrap:"nowrap",width:"100%",height:"33%",alignItems:'center',flexGrow:1}}>
    <Text style={[styles.titre,styles.vert,{fontSize:15,width:"25%"}]}>Santé</Text>
    <View style={styles.progressBarV}>
        <Animated.View
          style={
            ([StyleSheet.absoluteFill], 
            { backgroundColor: "rgb(87,241,167)", width:widthPhy })
          }></Animated.View>
      </View></View>

      <View style={{flexDirection:'row',justifyContent:'center',flexWrap:"nowrap",width:"100%",height:"33%",alignItems:'center',flexGrow:1}}>
      <Text style={[styles.titre,styles.jaune,{fontSize:15,width:"25%"}]}>Bonheur</Text>
      <View style={styles.progressBarJ}>
      
        <Animated.View
          style={
            ([StyleSheet.absoluteFill], 
            { backgroundColor: 'rgb(255,251,162)', width:widthMent })
          }></Animated.View>
      </View></View>
      </View>

      <View style={{width:"50%",height:"100%",top:0,alignItems:'center',justifyContent:'space-between',flexDirection:'column'}}>
      <View style={{flexDirection:'row',justifyContent:'center',flexWrap:"nowrap",width:"100%",height:"33%",alignItems:'center',flexGrow:1}}>
      <Text style={[styles.titre,styles.bleu,{fontSize:15,width:"25%"}]}>Faim</Text>
      <View style={styles.progressBarB}>
        <Animated.View
          style={
            ([StyleSheet.absoluteFill], 
            { backgroundColor: "rgb(122,213,252)", width:widthSas })
          }></Animated.View>
      </View></View>

      <View style={{flexDirection:'row',justifyContent:'center',flexWrap:"nowrap",width:"100%",height:"33%",alignItems:'center',flexGrow:1}}>
      <Text style={[styles.titre,styles.rouge,{fontSize:15,width:"25%"}]}>Poids</Text>
      <View style={styles.progressBarR}>
        <Animated.View
          style={
            ([StyleSheet.absoluteFill], 
            { backgroundColor: "rgb(245,123,123)", width:widthPoids })
          }></Animated.View>
      </View></View>


      </View>
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
      <TouchableOpacity style = {styles.buttonRepos} onPress={repos}>
                <Text style = {{fontFamily: 'Pacifico', color: "rgb(245,123,123)"
                , fontSize: 15,textAlign:'center' }}> Repos </Text>
      </TouchableOpacity>
      </View>

      </View>

      {/* CONTENU PRINCIPAL */}

      <ImageBackground source={dodo ? fondNuit : fond} resizeMode="stretch" style = {{flex:64}}>
     

      <View style={styles.imageFond}>
    
      <View style={styles.PartieGauche}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{width:"100%",marginTop:5,height:"5%"}}><Text style = {{fontFamily: 'Pacifico', color: "rgb(122,213,252)", fontSize: 15,textAlign:"center"}}>Aliments préférés</Text></View>
              <View style={{width:"100%",flexDirection:"row",height:"15%"}}>
              <Image source={require('../assets/Pate.png')} resizeMode="contain" style={{flexGrow:1,height:"100%"}}/>
              <Image source={require('../assets/HamburgerFrites.png')} resizeMode="contain" style={{flexGrow:1,height:"100%"}}/>
              <Image source={require('../assets/MoelleuxAuChocolat.png')} resizeMode="contain" style={{flexGrow:1,height:"100%"}}/>
              <Image source={require('../assets/Glace.png')} resizeMode="contain" style={{flexGrow:1,height:"100%"}}/>
              </View>
              <View style={{width:"100%",marginTop:5,height:"5%"}}><Text style = {{fontFamily: 'Pacifico', color: "rgb(87,241,167)", fontSize: 15,textAlign:"center"}}>Aliments appréciés</Text></View>
              <View style={{width:"100%",flexDirection:"row",height:"15%"}}>
              <Image source={require('../assets/Saucisson.png')} resizeMode="contain" style={{flexGrow:1,height:"100%"}}/>
              <Image source={require('../assets/PatesBolognaises.png')} resizeMode="contain" style={{flexGrow:1,height:"100%"}}/>
              <Image source={require('../assets/Tiramisu.png')} resizeMode="contain" style={{flexGrow:1,height:"100%"}}/>
              </View>
              <View style={{width:"100%",marginTop:5,height:"5%"}}><Text style = {{fontFamily: 'Pacifico', color: 'rgb(255,251,162)', fontSize: 15,textAlign:"center"}}>Aliments neutres</Text></View>
              <View style={{width:"100%",flexDirection:"row",height:"15%"}}>
              <Image source={require('../assets/SteakHaricots.png')} resizeMode="contain" style={{flexGrow:1,height:"100%"}}/>
              <Image source={require('../assets/RizDinde.png')} resizeMode="contain" style={{flexGrow:1,height:"100%"}}/>
              <Image source={require('../assets/Yaourt.png')} resizeMode="contain" style={{flexGrow:1,height:"100%"}}/>
              </View>
              <View style={{width:"100%",marginTop:5,height:"5%"}}><Text style = {{fontFamily: 'Pacifico', color: "rgb(245,123,123)", fontSize: 15,textAlign:"center"}}>Aliments détestés</Text></View>
              <View style={{width:"100%",flexDirection:"row",height:"15%"}}>
              <Image source={require('../assets/Carottes.png')} resizeMode="contain" style={{flexGrow:1,height:"100%"}}/>
              <Image source={require('../assets/Betteraves.png')} resizeMode="contain" style={{flexGrow:1,height:"100%"}}/>
              <Image source={require('../assets/PoissonEpinards.png')} resizeMode="contain" style={{flexGrow:1,height:"100%"}}/>
              <Image source={require('../assets/SaladeComposee.png')} resizeMode="contain" style={{flexGrow:1,height:"100%"}}/>
              <Image source={require('../assets/SaladeDeFruits.png')} resizeMode="contain" style={{flexGrow:1,height:"100%"}}/>
              </View>
            <Pressable
              style={[styles.buttonM]}
              onPress={() => setModalVisible(!modalVisible)}
            ><Text style={styles.textStyle}>Fermer</Text>
            </Pressable>


          </View>
        </View>
      </Modal>
      <View style={styles.Quiz}>

      <View style={styles.case}>

      <View style={styles.caseTitre}>
        <Text style={[styles.titre,styles.vert]}>Q</Text>
        <Text style={[styles.titre,styles.bleu]}>u</Text>
        <Text style={[styles.titre,styles.rouge]}>i</Text>
        <Text style={[styles.titre,styles.jaune]}>z</Text>
        </View>

      <Text style={styles.desc}>Voici le quiz du jour. Apprends en t'amusant !</Text>
      
      <View style={styles.bouton}>
      <Pressable onPress={() => navigation.navigate('Quiz',Orniny)}>
            <Text style = {styles.textButton}>Jouer</Text>
          </Pressable>
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

        <Text style={styles.desc}>Fais du sport pour améliorer la santé d'Orniny et la tienne !</Text>

        <View style={styles.bouton} >
          <Pressable onPress={() => navigation.navigate('Sport',Orniny)}>
            <Text style = {styles.textButton}>Faire du sport</Text>
          </Pressable>
        </View>

        </View>

      </View>
      
      </View>

      <View style={styles.Milieu} ></View>
      
      <View style={styles.Droit}>
      <TouchableOpacity style = {styles.button} onPress={actualiseOrniny}>
                <Text style = {{fontFamily: 'Pacifico', color: "rgb(122,213,252)", fontSize: 15,textAlign:'center' }}> Repas terminé </Text>
      </TouchableOpacity>
      <DraxView
          style={{height:"50%",width:"100%"}}
          receivingStyle={styles.receiving}
          renderContent={({ viewState }) => {
            const receivingDrag = viewState && viewState.receivingDrag;
            const payload = receivingDrag && receivingDrag.payload;
            return (
              <>
              <Image source={dodo ? OrninyRepos : spriteOrniny} resizeMode="contain" style={styles.OrninyStyle}></Image>

              </>
            );
          }}
          onReceiveDragDrop={(event) => {

            feedOrniny(event.dragged.payload);

          }}
        />
        </View>
       
      </View>
     </ImageBackground>

    
    {/* BARRE DU BAS */}
    <View style={styles.bordure} pointerEvents={dodo ? 'none' : 'auto'}>
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
    top:0,
    height:"100%"
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    top:0,
    height:"100%"
  },
  PartieGauche: {
    height: "100%",
    justifyContent: "space-around",
    width: "30%",
    alignItems: "center",
  },
  Quiz: {
    width: "90%",
    height: "45%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: '#44497B',
    opacity:0.9,
    borderRadius: 10,
  },
  Sport: {
    width: "90%",
    height: "45%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: '#44497B',
    opacity:0.9,
    borderRadius: 10,
  },
  Milieu: {
    flexGrow:1,
    height: "100%",
    width: "33%",
  },
  Droit:{
    height: "100%",
    width: "34%",
    alignSelf:"flex-end",
    flexDirection:"column",
    justifyContent:"space-evenly",
    alignItems:"center",
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
    flex:12,
    flexDirection: 'row',
    backgroundColor: "rgb(68,73,123)"
  },
  bordureHaut : {
    flex: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "rgb(68,73,123)"
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

  button: {
    width: '30%', 
    height: '10%',
    justifyContent : 'center', 
    alignContent:'center',
    margin:'auto', 
    marginBottom:'1%',
    borderRadius:10,
    borderColor:"rgb(122,213,252)",
    borderWidth: 3,
    backgroundColor:"rgba(58,115,167,0.5)"
},
buttonRepos: {
  width: '30%', 
  height: '60%',
  justifyContent : 'center', 
  alignContent:'center',
  margin:'auto', 
  borderRadius:10,
  borderColor:"rgb(245,123,123)",
  borderWidth: 3,
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
  progressBarR: {
    height: 10,
    flexDirection: 'row',
    width: '50%',
    backgroundColor: "rgb(68,73,123)",
    borderColor: "rgb(245,123,123)",
    borderWidth: 2,
    borderRadius: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:22,
    backgroundColor:"rgba(0,0,0,0.4)"
  },
  modalView: {
    backgroundColor: "rgb(68,73,123)",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flexDirection:"column",
    justifyContent:"center",
    flex:1,
    width:"50%",
    height:"40%"
  },
  buttonM: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "rgb(68,73,123)",
    borderWidth:2,
    borderColor:"rgb(245,123,123)",
    marginTop:15
    
  },
  textStyle: {
    color: "rgb(245,123,123)",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily:"NotoSans"
  },
});
