import * as React from "react";
import { Image, View ,ImageBackground, StyleSheet, Text, ScrollView} from 'react-native';
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
let citrouille = new Aliment('sale', require('../assets/citrouille.png'), 4, 3);
let poireau = new Aliment('sale', require('../assets/poireau.png'), 5, -1);
let tomate = new Aliment('sale', require('../assets/tomate.png'), 5, 3);
let pomme = new Aliment('sucre', require('../assets/Pomme.png'), 7, -1);



export default function HomeScreen({ route, navigation }) {
  const [received, setReceived] = React.useState([]);
  const [compteur, setCompteur] = React.useState(0);
  let Orniny = route.params;
  function AlimentsBar(){
    return(
      <View style = {styles.containerList}>
      <ScrollView horizontal= {true} contentContainerStyle={styles.contentContainer}>
      {aliments.map((aliment) => (
          <DraxView
            style={[styles.centeredContent, styles.draggableBox]}
            draggingStyle={styles.dragging}
            dragReleasedStyle={styles.dragging}
            hoverDraggingStyle={styles.hoverDragging}
            dragPayload={'R'}
            longPressDelay={0}
          >
            <Image source={aliment.image} resizeMode="contain" style={styles.image}data = {[aliment.ptsMental, aliment.ptsPhysique, aliment.type]}></Image>
          </DraxView>
          ))}
      </ScrollView>
      </View>
    )
  }
  
  const aliments = [fraise, framboise, chocolat, citrouille, poireau, tomate, pomme]; //tableau des aliments
  

  return (
    < GestureHandlerRootView style={{flex:1}}>
    <DraxProvider>
    <View style={styles.container}>
      <View style={styles.bordure}>
      <Text>{ Orniny.santePhysique}</Text>
      <MenuCool navigation= {navigation} params ={Orniny}/>
      </View>

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
            setCompteur(compteur+1);
            Orniny.santePhysique = Orniny.santePhysique + 1 ;
          }}
        />
       
      </View>
     </ImageBackground>


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
    fontFamily:"Noto Sans",
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
});

