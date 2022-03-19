import * as React from "react";
import { Image, View ,ImageBackground, StyleSheet, Text, ScrollView} from 'react-native';
import MenuCool from '../components/MenuCool'
import Orniny from '../assets/Horniny FAT.png';
import fond from '../assets/fond.jpg';
import { DraxProvider, DraxView } from 'react-native-drax';
import DragNDrop from '../components/DragNDrop'

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



export default function HomeScreen({ navigation }) {
  const [received, setReceived] = React.useState([]);
  const [compteur, setCompteur] = React.useState(0);
  function AlimentsBar(){
    return(
      <View style = {styles.containerList}>
      <ScrollView horizontal= {true}>
      {aliments.map((aliment) => (
          <Image source = {aliment.image} style = {styles.image} data = {[aliment.ptsMental, aliment.ptsPhysique, aliment.type]} resizeMode = 'contain'></Image>
         ))}
          <DraxView
            style={[styles.centeredContent, styles.draggableBox]}
            draggingStyle={styles.dragging}
            dragReleasedStyle={styles.dragging}
            hoverDraggingStyle={styles.hoverDragging}
            dragPayload={'R'}
            longPressDelay={0}
          >
            <Image source={require('../assets/Pomme.png')} resizeMode="contain" style={styles.OrninyStyle}></Image>
          </DraxView>
      </ScrollView>
      </View>
    )
  }
  
  const aliments = [fraise, framboise, chocolat, citrouille, poireau, tomate, pomme]; //tableau des aliments
  

  return (
    <DraxProvider>
    <View style={styles.container}>
      <View style={styles.bordure}>
      <Text>{ compteur}</Text>
      <MenuCool navigation= {navigation}/>
      </View>

      <ImageBackground source={fond} resizeMode="stretch" style = {{flex:64}}>

      <View style={styles.imageFond}>
      
      <View style={styles.PartieGauche}>
      <View style={styles.Quiz}>
      <Text>Quiz</Text>

      </View>
      <View style={styles.Sport}>
        <Text>Sport</Text>

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
              <Image source={require("../assets/Horniny FAT.png")} resizeMode="contain" style={styles.OrninyStyle}></Image>

              </>
            );
          }}
          onReceiveDragDrop={(event) => {
            setReceived([
              ...received,
              event.dragged.payload || '?',
            ]);
            setCompteur(compteur+1);
          }}
        />
       
      </View>
     </ImageBackground>


    <View style={styles.bordure}>
      <AlimentsBar />
    </View>
    </View>
    </DraxProvider>
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
  PartieGauche: {
    height: "100%",
    flexGrow:1,
  },
  Quiz: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  Sport: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  Milieu: {
    flexGrow:1,
    height: "100%",
  },
  Droit:{
    flexGrow:1,
    height: "50%",
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
  palette: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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

