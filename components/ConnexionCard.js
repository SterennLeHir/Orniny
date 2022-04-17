import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';

function ConnexionCard({navigation, params}) {
    return (
        <View style = {styles.card}> 
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.titre,styles.vert]}>O</Text>
                <Text style={[styles.titre,styles.bleu]}>r</Text>
                <Text style={[styles.titre,styles.rouge]}>n</Text>
                <Text style={[styles.titre,styles.jaune]}>i</Text>
                <Text style={[styles.titre,styles.vert]}>n</Text>
                <Text style={[styles.titre,styles.bleu]}>y</Text>
            </View>
            <View style = {{width: '100%'}}> 
                <Image source = {require('./assets/Orniny.png')}/>
            </View>
            <View style = {{width: '50%', justifyContent : 'center', margin:'auto', marginBottom:'10%'}}> 
                <Button style = {styles.button} title="JOUER" onPress={() => navigation.navigate('Home',params)} />
            </View>
            
            
            
        </View>
    );



}

const styles = StyleSheet.create({
    card: {
        borderRadius:10,
        backgroundColor: '#44497B',
        opacity:0.9,
        height: '70%',
        width: '40%',
        margin: '30%',
        alignItems: 'center',
    },
    titre:{
        fontFamily:"Pacifico",
        fontSize: 36,
    },
    button: {
        borderRadius:10,
    },
    image : {
       display: 'flex', 
       height: '100%',
    },
    // Couleurs :

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

})
export default ConnexionCard