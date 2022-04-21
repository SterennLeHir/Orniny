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
        <MenuItem textStyle = {styles.page} style={{borderColor:"rgb(60,68,96)",borderBottomWidth:2}} onPress={toHome}>
            Home
      </MenuItem>
      <MenuItem textStyle = {styles.page} style={{borderColor:"rgb(60,68,96)",borderBottomWidth:2}} onPress={toRecette}>
            Recettes
      </MenuItem>    
      <MenuItem textStyle = {styles.page} style={{borderColor:"rgb(60,68,96)",borderBottomWidth:2}} onPress={toVideo}>
            Vidéos
      </MenuItem>   
      <MenuItem textStyle = {styles.page} onPress={toLogin}>
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
});