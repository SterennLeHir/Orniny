import {Image, View, StyleSheet, ScrollView} from 'react-native';

function Aliment(type, image, ptsPhysique, ptsMental) {
  this.type = type;
  this.image = image;
  this.ptsPhysique = ptsPhysique;
  this.ptsMental = ptsMental;
}

//Instanciation des aliments
let fraise = new Aliment('sucre', require('../Fraise.png'), 10, 3);
let framboise =  new Aliment('sucre', require('../framboise.png'), 10, 3);
let chocolat =  new Aliment('sucre', require('../Chocolat.png'), -1, 10);
let citrouille = new Aliment('sale', require('../citrouille.png'), 4, 3);
let poireau = new Aliment('sale', require('../poireau.png'), 5, -1);
let tomate = new Aliment('sale', require('../tomate.png'), 5, 3);
let pomme = new Aliment('sucre', require('../Pomme.png'), 7, -1);

function AlimentsBar(){
  return(
    <View style = {styles.container}>
    <ScrollView horizontal= {true}>
    {aliments.map((aliment) => (
        <Image source = {aliment.image} style = {styles.image} data = {[aliment.ptsMental, aliment.ptsPhysique, aliment.type]} resizeMode = 'contain'></Image>
       ))}
    </ScrollView>
    </View>
  )
}

const aliments = [fraise, framboise, chocolat, citrouille, poireau, tomate, pomme]; //tableau des aliments

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent:'center',
  },
  image: {
    width: 50,
    height: 50,
    flex:1,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default AlimentsBar;