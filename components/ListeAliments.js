import React from 'react';
import { Image, ScrollView, Text } from 'react-native';
import Fraise from '../assets/Fraise.png';
import Framboise from '../assets/framboise.png';
import Pomme from '../assets/Pomme.png';
import Citrouille from '../assets/citrouille.png';

const styles = StyleSheet.create({
    fond: {
        flex: 8,
        flexDirection: 'row-reverse',
        backgroundColor: "rgb(68,73,123)",
        justifyContent: 'center',
        alignItems: 'center',

    },
    vignette: {
        flex: 1,
        width: 50,
        height: 50,
    }
})

export default function ListeAliments () {
    return (
        <ScrollView horizontal= {true} style = {styles.fond}>
            <Image style={styles.vignette} source={Fraise} />
            <Image style={styles.vignette} source={Framboise} />
            <Image style={styles.vignette} source={Pomme} />
            <Image style={styles.vignette} source={Citrouille} />
            <Image style={styles.vignette} source={Fraise} />
            <Image style={styles.vignette} source={Framboise} />
            <Image style={styles.vignette} source={Pomme} />
            <Image style={styles.vignette} source={Citrouille} />
            <Image style={styles.vignette} source={Fraise} />
            <Image style={styles.vignette} source={Framboise} />
            <Image style={styles.vignette} source={Pomme} />
            <Image style={styles.vignette} source={Citrouille} />
            <Image style={styles.vignette} source={Fraise} />
            <Image style={styles.vignette} source={Framboise} />
            <Image style={styles.vignette} source={Pomme} />
            <Image style={styles.vignette} source={Citrouille} />
        </ScrollView>
    )
}