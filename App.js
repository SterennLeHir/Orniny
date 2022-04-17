import * as React from "react";
import { Image, StyleSheet, Text, View ,ImageBackground} from 'react-native';
import fond from './assets/fond.jpg';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login.js';
import Home from './screens/Home';
export default function App() {

  const Stack = createNativeStackNavigator();

    const [loaded] = useFonts({
      Pacifico: require('./assets/fonts/Pacifico.ttf'),
      NotoSans: require('./assets/fonts/NotoSans.ttf'),
    });
    
    if (!loaded) {
      return null;
    }


    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Log">
          <Stack.Screen name="Log" component={Login} options={{ title: 'Orniny' }}/>
          <Stack.Screen name="Home" component={Home} options={{ title: 'Accueil' }} />
        </Stack.Navigator>
      </NavigationContainer>
    ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex:1,
    justifyContent:'center',
    width: '100%',
    height:'100%',
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  texte: {
    fontFamily:'Pacifico',
    textAlign:'center',
    fontSize: 50,
  }
});