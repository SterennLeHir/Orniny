import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import orniny from '../assets/Orniny.png';
function ConnexionCard({navigation, params}) {
    return (
        <View style = {styles.card}>
            <Text style = {styles.title}>
                Orniny
            </Text>
            <View style = {{width: '90%', height: '70%', justifyContent : 'center', margin:'auto', marginBottom:'10px'}}> 
                <Image source = {orniny} />
            </View>
            <View style = {{width: '50%', justifyContent : 'center', margin:'auto', marginBottom:'10px'}}> 
                <Button style = {styles.button} title="JOUER" onPress={() => navigation.navigate('Home',params)} />
            </View>
            
            
            
        </View>
    );



}

const styles = StyleSheet.create({
    card: {
        borderRadius:5,
        backgroundColor: '#44497B',
        opacity:0.9,
        height: '70%',
        width: '40%',
        margin: '30%',
    },
    title:{
        textAlign: 'center',
        marginBottom : '5%',
        marginTop: '5%',
        fontFamily:'Pacifico',
    },
    button: {
        borderRadius:5,
    },
    image : {
       display: 'flex', 
       height: '100',
       width: '200',
    }
})
export default ConnexionCard