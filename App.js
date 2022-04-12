import React from 'react';
import { Image, StyleSheet, Text, View, ImageBackground, FlatList, Linking, Button } from 'react-native';
import { Dimensions } from 'react-native-web';

import logo from './assets/logo.png'

export default function App() {
  return (

    <View style={styles.container}>
      <ImageBackground
        style={styles.back}
        source={require('./assets/fond.jpg')}
        blurRadius={40}>
           <FlatList
          data={DATA}
          renderItem={renderIte}
          keyExtractor = {item=>item.id}/>
      </ImageBackground>
    </View>
  )
}

const videoDetails = ({ item }) => {
  const { title, link, image1, id } = item;
  const {container,Imagelist,titre } = styles;

  return (
    <Card>
      <CardSection>
        <View style={style.container}>
          <Image
            style={style.Imagelist}
            source={item.image1}
          >
          </Image>
        </View>
        <View style={style.container}>
          <Text style={style.title}>{item.title}</Text>
          <Text>{item.id}</Text>
        </View>
      </CardSection>
    </Card>

  )
} 

const DATA = [
  {
    id: "tomate",
    key: '1',
    title: 'La tomate',
    image1: require("./assets/tomate.png"),
    imageminiature: "./assets/tomate.png",
    link: "https://www.youtube.com/watch?v=Td2bsJIaC5M&list=RDMMTd2bsJIaC5M&start_radio=1",
  },
  {
    id: 'citrouille',
    key: '2',
    title: 'La citrouille',
    image1: require("./assets/citrouille.png"),
    imageminiature: "./assets/citrouille.png",
    link: "https://www.youtube.com/watch?v=2s5KNg_5_LA",
  },
  {
    id: 'Poireau',
    key: '3',
    title: 'Le poireau',
    image1: require("./assets/poireau.png"),
    imageminiature: "./assets/poireau.png",
    link: "https://www.youtube.com/watch?v=Td2bsJIaC5M&list=RDMMTd2bsJIaC5M&start_radio=1",

  },
  {
    id: 'framboise',
    key: '4',
    title: 'la framboise',
    image1: require("./assets/framboise.png"),
    imageminiature: "./assets/framboise.png",
    link: "https://www.youtube.com/watch?v=Td2bsJIaC5M&list=RDMMTd2bsJIaC5M&start_radio=1",


  }
]

const renderIte = ({ item }) => {
  return (
    <Card>
      <CardSection>
        <View style={style.container}>
          <Image
            style={style.Imagelist}
            source={item.image1}
          >
          </Image>
        </View>
        <View style={style.container}>
          <Text style={style.title}>{item.title}</Text>
          <Text>{item.id}</Text>
        </View>
      </CardSection>
    </Card>

  );  

}



const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  Imagelist: {
    width: 20,
    height: 15,
  },
  item: {
    margintop: 24,
    padding: 30,
    backgroundColor: '#44497B',
    fontSize: 24

  }

});