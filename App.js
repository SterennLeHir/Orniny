import * as React from "react";
import { ImagePropTypes, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login.js';
import Home from './screens/Home';
import Recette from './screens/Recette';
import Video from "./screens/Video";
import Sport from "./screens/Sport";
import Quiz from "./screens/quiz";
import Vrai from "./screens/bonnereponse"
import Faux from "./screens/mauvaisereponse"
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
          <Stack.Screen name = "Sport" component= {Sport} options = {{title : 'Sport'}}/>
          <Stack.Screen name="Recettes" component={Recette} options={{ title: 'Recettes' }} />
          <Stack.Screen name="Videos" component={Video} options={{ title: 'Videos' }} />

          <Stack.Screen name="Quiz" component={Quiz} options={{ title: 'Quiz' }} />
          <Stack.Screen name="Vrai" component={Vrai} options={{ title: 'Bonne réponse' }} />
          <Stack.Screen name="Faux" component={Faux} options={{ title: 'mauvaise réponse' }} />
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