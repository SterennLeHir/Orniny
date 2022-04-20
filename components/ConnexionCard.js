import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function ConnexionCard({navigation, params}) {
    return (
        <View style = {styles.card}> 
            <View style={{flexDirection: 'row', marginTop:'5%'}}>
                <Text style={[styles.titre,styles.vert]}>O</Text>
                <Text style={[styles.titre,styles.bleu]}>r</Text>
                <Text style={[styles.titre,styles.rouge]}>n</Text>
                <Text style={[styles.titre,styles.jaune]}>i</Text>
                <Text style={[styles.titre,styles.vert]}>n</Text>
                <Text style={[styles.titre,styles.bleu]}>y</Text>
            </View>
            <View style = {{width: '90%', height: '70%', justifyContent : 'center', margin:'auto'}}> 
                <Image source = {require('../assets/Orniny.png')} resizeMode="contain" style={{height:"100%",width:"100%"}}/>
            </View>
            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Home',params)}>
                <Text style = {{fontFamily: 'NotoSans', color: "rgb(255,251,162)" }}> JOUER </Text>
            </TouchableOpacity>
            
            
            
        </View>
    );



}

const styles = StyleSheet.create({
    card: {
        borderRadius:10,
        backgroundColor: '#44497B',
        opacity:0.9,
        height: '80%',
        width: '40%',
        margin:'auto',
        alignItems: 'center',
    },
    titre:{
        fontFamily:"Pacifico",
        fontSize: 36,
    },
    button: {
        borderRadius:10,
        width: "30%",
        height: "10%",
        borderColor:"rgb(255,251,162)",
        borderWidth: 3,
        justifyContent: "center",
        alignItems: "center",
        marginBottom:'10%',
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