import { Image, View ,ImageBackground, StyleSheet, Text, FlatList,TextInput} from 'react-native';
import MenuCool from '../components/MenuCool' ;
import fond from '../assets/fond.jpg';
import * as React from "react";
import { DraxProvider, DraxView } from 'react-native-drax';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function SportScreen({ route, navigation }) {
    let Orniny = route.params;
    const [textD, setTextD] = React.useState('');
    const [textKm, setTextKm] = React.useState('');

    return (
    <GestureHandlerRootView style={{flex:1}}>
    <DraxProvider>
    
    <View style= {styles.container}>
    {/* Barre latérale */}
    <View style={styles.bordureHaut}>
    <View style={{flexGrow:1,height:'100%',justifyContent:'center',alignItems:'center',flexDirection: 'row'}}>
        <Text style={[styles.titre,styles.vert]}>O</Text>
        <Text style={[styles.titre,styles.bleu]}>r</Text>
        <Text style={[styles.titre,styles.rouge]}>n</Text>
        <Text style={[styles.titre,styles.jaune]}>i</Text>
        <Text style={[styles.titre,styles.vert]}>n</Text>
        <Text style={[styles.titre,styles.bleu]}>y</Text>
    </View>
    <View style={{height:"100%",position:"absolute",right:"2%"}}>
    <MenuCool navigation= {navigation} params= {Orniny}/>
    </View>
    </View>

    {/* Contenu principale */}
    <ImageBackground source={fond} resizeMode="stretch" style = {{width:"100%",flexGrow:1}}>
    <View style = {styles.titreSport}>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.vert]}>Le </Text>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.bleu]}> sport </Text>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.rouge]}>  de </Text>
        <Text style={[{fontFamily:"Pacifico", fontSize: 30,},styles.jaune]}> Orniny</Text>
    </View>

    <View style = {styles.listeScroll}>
        <FlatList
        horizontal = {true}
        data = {[
            {key: "Course à pied", source: require('../assets/courseAPied.png')},
            {key: "Ping Pong", source: require('../assets/pingPong.png')},
            {key: "Balle au prisonnier", source: require('../assets/BalleAuPrisonnier.png')},
        ]}
        renderItem = {({item}) => 
        <View style = {styles.caseSport}>
            <Text style={[{fontFamily:"Pacifico", fontSize: 20,},styles.jaune]}> {item.key}</Text>
            <Image source={item.source} resizeMode="contain" style={{width:"60%",height:"60%"}}/>
        </View>
    }
        />
    </View>

    <View style = {styles.panneau}>
        <View style = {styles.casePanneau}> 
            <View style = {{height:"80%",width:"40%",position:"absolute",left:"2%",top:"10%",borderRadius:5,alignItems:"center",justifyContent:"center"}}> 
            <Text style={{fontFamily:"Pacifico", fontSize: 30,color:"rgb(68,73,123)"}}>Durée</Text>
            </View>
            <View style = {{height:"80%",width:"55%",position:"absolute",right:"2%",top:"10%",backgroundColor:"rgb(68,73,123)",borderRadius:5,alignItems:"center",justifyContent:"center"}}> 
            <TextInput
        style={{height:"90%",width:"90%",fontFamily:"Pacifico", fontSize: 20,color:"rgb(255,255,255)"}}
        placeholder="Ecrivez ici"
        placeholderTextColor="rgb(245,245,245)"
        onChangeText={newText => setTextD(newText)}
        defaultValue={textD}
      />
            </View>
        </View>
        <View style = {styles.casePanneau}> 
        <View style = {{height:"80%",width:"40%",position:"absolute",left:"2%",top:"10%",borderRadius:5,alignItems:"center",justifyContent:"center"}}> 
        <Text style={{fontFamily:"Pacifico", fontSize: 20,color:"rgb(68,73,123)"}}>Kilomètres parcourus</Text>
        </View>
            <View style = {{height:"80%",width:"55%",position:"absolute",right:"2%",top:"10%",backgroundColor:"rgb(68,73,123)",borderRadius:5,alignItems:"center",justifyContent:"center"}}> 
            <TextInput
        style={{height:"90%",width:"90%",fontFamily:"Pacifico", fontSize: 20,color:"rgb(255,255,255)"}}
        placeholder="Ecrivez ici"
        placeholderTextColor="rgb(245,245,245)"
        onChangeText={newText => setTextKm(newText)}
        defaultValue={textKm}
      />
            </View>

        </View>
        <View style = {[styles.casePanneau,{backgroundColor:"rgb(68,73,123)",borderWidth:3,borderColor:"rgb(245,123,123)"}]}> 
            <Text style={{fontFamily:"Pacifico", fontSize: 30,color:"rgb(245,123,123)"}}>Faire du sport</Text>
        </View>
    </View>

    <Image source={Orniny.image} resizeMode="contain" style={styles.OrninyStyle}></Image>

    </ImageBackground>
    

    </View>
    </DraxProvider>
    </GestureHandlerRootView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        alignItems:"center",
    },
    icone: {
        alignItems: "center",
        justifyContent: "center",
    },
    caseSport: {
        height:"90%",
        flex:1,
        width:400,
        top:"5%",
        marginLeft:"10%",
        marginRight:"10%",
        backgroundColor:"rgb(68,73,123)",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexDirection:"column",
        borderRadius:10,
    },
    bordureHaut: {
        top:0,
        height:"10%",
        width:"100%",
        justifyContent:"center",
        backgroundColor: "rgb(68,73,123)"
    },
    titreSport: {
        width:"30%",
        height:"10%",
        marginTop:"2%",
        marginBottom:"2%",
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        borderBottomColor:"rgb(87,241,167)",
        borderBottomWidth:3,
    },
    listeScroll: {
        flex:1,
        width:"100%",
        height:"30%",
        backgroundColor: "rgba(68,73,123,0.44)"
    },
    panneau: {
        alignSelf: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        justifyContent:"space-evenly",
        width:"50%",
        height:"35%",
        marginTop:"3%",
        marginLeft:"5%",
        backgroundColor: "rgb(68,73,123)",
        borderRadius: 15,
    },
    casePanneau: {
        borderRadius: 5,
        width:"75%",
        height:"27%",
        backgroundColor: "rgb(122,213,252)",
        alignItems:"center",
        justifyContent:"center",
    },
    OrninyStyle: {
        position: "absolute",
        top:"52.5%",
        right:"5%",
        width:"35%",
        height:"45%",
    },
    titre:{
        fontFamily:"Pacifico",
        fontSize: 36,
    },
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
});