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
const toRecettes = () => {
  navigation.navigate('Recettes',params)
  hideMenu
}
const toVideos = () => {
  navigation.navigate('Videos',params)
  hideMenu
}

  return (
    <View style={{ height: '100%', color:"rgb(122,213,252)", alignItems: 'center', justifyContent: 'center' }}>
      <Menu
        visible={visible}
        anchor={<TouchableHighlight onPress={showMenu}>
        <Image source={require('../assets/burger.png')} resizeMode="stretch" style={{width:70,height:40,right:20}}></Image>
        </TouchableHighlight>}
        onRequestClose={hideMenu}
      >
      <MenuItem style = {styles.page} onPress={toLogin}>
            Login
      </MenuItem>
        <MenuItem style = {styles.page} onPress={toHome}>
            Home
      </MenuItem>
      <MenuItem style = {styles.page} onPress={toRecettes}>
            Recettes
      </MenuItem>        
      <MenuItem style = {styles.page} onPress={toVideos}>
            Vidéos
      </MenuItem>                
      </Menu>
    </View>
  );
}
const styles = StyleSheet.create({
  page : {
    fontFamily:"Pacifico",
    color:"rgb(87,241,167)",
  },
});