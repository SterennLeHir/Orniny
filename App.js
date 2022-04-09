import * as React from "react";
import { Image, StyleSheet, Text, View ,ImageBackground} from 'react-native';
import fond from './assets/fond.jpg';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login.js';
import Home from './screens/Home'
import MenuCool from './components/MenuCool'
export default function App() {


  

  function DetailsScreen({ route,navigation }) {
    let Orniny = route.params;
    return (
      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{flex:2}}>Details Screen</Text>
        <MenuCool navigation= {navigation} params= {Orniny}/>
      </View>
    );
  }

  
  const Stack = createNativeStackNavigator();

    const [loaded] = useFonts({
      Pacifico: require('./assets/fonts/Pacifico.ttf'),
    });
    
    if (!loaded) {
      return null;
    }


    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Log">
          <Stack.Screen name="Log" component={Login} options={{ title: 'Connexion' }}/>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={DetailsScreen} />
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