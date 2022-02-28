import * as React from "react";
import { Text, View ,ImageBackground, StyleSheet} from 'react-native';
import fond from '../assets/fond.jpg';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={fond} resizeMode="cover" blurRadius = {10}>
        <Text>
            Orniny
        </Text>
      </ImageBackground>
    </View>
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
});