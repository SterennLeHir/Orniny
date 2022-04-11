import React from 'react';
import { useState } from 'react';

import { View, Image, TouchableHighlight} from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';


export default function MenuCool({navigation,params}) {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const toLogin = () => {
      navigation.navigate('Log')
      hideMenu
  }

  const toDetails = () => {
    navigation.navigate('Details',params)
    hideMenu
}

  const toHome = () => {
    navigation.navigate('Home',params)
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
      >
        <MenuItem onPress={toLogin}>
            Login
      </MenuItem>
        <MenuItem onPress={toHome}>
            Home
      </MenuItem>
      <MenuItem onPress={toDetails}>
            Details
      </MenuItem>
        
      </Menu>
    </View>
  );
}