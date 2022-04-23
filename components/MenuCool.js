import React from 'react';
import { useState } from 'react';

import { View, Image, TouchableHighlight, StyleSheet} from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';


export default function MenuCool({navigation,params}) {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const toLogin = () => {
      navigation.navigate('Log')
      hideMenu
  }

  const toHome = () => {
    navigation.navigate('Home',params)
    hideMenu
}
const toRecette = () => {
  navigation.navigate('Recettes',params)
  hideMenu
}
const toVideo= () => {
  navigation.navigate('Videos',params)
  hideMenu
}

  return (
    <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <Menu
        visible={visible}
        anchor={<TouchableHighlight onPress={showMenu}>
        <Image source={require('../assets/burger.png')} resizeMode="stretch" style={{width:70,height:40,right:20}}></Image>
        </TouchableHighlight>}
        onRequestClose={hideMenu}
        style={{ backgroundColor: "rgb(68,73,123)"}}
      >
        <MenuItem textStyle = {styles.vert}  onPress={toHome}>
            Home
      </MenuItem>
      <MenuItem textStyle = {styles.bleu}  onPress={toRecette}>
            Recettes
      </MenuItem>    
      <MenuItem textStyle = {styles.jaune}  onPress={toVideo}>
            Vidéos
      </MenuItem>   
      <MenuItem textStyle = {styles.rouge} onPress={toLogin}>
            Déconnexion
      </MenuItem>         
      </Menu>
    </View>
  );
}
const styles = StyleSheet.create({
  page : {
    fontFamily:"Pacifico",
    color:"rgb(255,255,255)",
  },
  vert:{
    fontFamily:"Pacifico",
    color:"rgb(87,241,167)",
  },
  bleu:{
    fontFamily:"Pacifico",
    color:"rgb(122,213,252)",
  },
  rouge:{
    fontFamily:"Pacifico",
    color:"rgb(245,123,123)",
  },
  jaune:{
    fontFamily:"Pacifico",
    color:"rgb(255,251,162)",
  },
});