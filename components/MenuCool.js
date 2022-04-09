import React from 'react';
import { useState } from 'react';

import { View, Text } from 'react-native';
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
        anchor={<Text onPress={showMenu}>Show menu</Text>}
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