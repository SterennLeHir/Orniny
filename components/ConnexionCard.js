import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
//import Pacifico from '../assets/fonts/Pacifico.ttf';

function ConnexionCard({navigation}) {
    return (
        <View style = {styles.card}>
            <Text style = {styles.title}>
                Orniny
            </Text>
            <View> 
                <Button title="Connexion" onPress={() => navigation.navigate('Home')} style = {styles.button}/>
            </View>
           
            
        </View>
    );



}

const styles = StyleSheet.create({
    card: {
        borderRadius:5,
        backgroundColor: '#44497B',
        opacity:0.9,
        height: '60%',
        width: '70%',
        margin: '15%',
    },
    title:{
        textAlign: 'center',
        marginTop: '5%',
        fontFamily:'Pacifico',
    },
    button: {
        borderRadius:5,
        width: '10%',
    }
})
export default ConnexionCard