import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showAlert: false };
  };

  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  render() {
    const {showAlert} = this.state;

    return (
      <View style={styles.container}>

        <Text>I'm AwesomeAlert</Text>
        <TouchableOpacity onPress={() => {
          this.showAlert();
        }}>
          <View style={styles.button}>
            <Text style={styles.text}>Try me!</Text>
          </View>
        </TouchableOpacity>

        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="AwesomeAlert"
          message="I have a message for you!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, delete it"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#AEDEF4",
  },
  text: {
    color: '#fff',
    fontSize: 15
  },
  bordureHaut: {
    top:0,
    height:"10%",
    width:"100%",
    justifyContent:"center",
    backgroundColor: "rgb(68,73,123)"
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
container: {
  flex:1,
  flexDirection:'column',
  alignItems:"center",
  width:"100%",
  height:"100%"
  
  },
  textsurleslegumes:{
    marginLeft:"5%",
alignContent:"space-between",
alignSelf:"center"

  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  back: {
    width: windowWidth * 1,
    height: windowHeight * 1,
  },
casebackground:{
borderRadius:5,
backgroundColor:"rgba(68,73,123,1)",
width:"80%",
height:"70%",
marginBottom:"10%",
alignSelf:"center",
flexDirection:"row"
},
Imagelist: {
    
  marginLeft:"5%",
  width: "10%",
  height: "100%",
  alignItems:"center",
  alignSelf:"auto"
},
item: {
  margintop: 24,
  padding: 30,
  backgroundColor: '#44497B',
  fontSize: 24

},
titreSport: {
  
  
  width:"40%",
  height:"10%",
  marginTop:"2%",
  marginBottom:"2%",
  alignSelf:"center",
  alignItems:"center",
  justifyContent:"center",
  flexDirection:"row",
  borderBottomColor:"rgb(87,241,167)",
  borderBottomWidth:1,
},
listeScroll: {
flex:1,
width:"80%",
height:"30%",
backgroundColor: "rgba(68,73,123,0.44)",
justifyContent:"center",
alignSelf:"center",
alignItems:"center"
},
button:{
width:"12%",
height : "10%",
alignSelf:"stretch",
}
,
buttonview : {
width:"35%",
height:"44%",
flexDirection:'row',
justifyContent:'flex-end',
alignSelf:'center',
alignItems:'flex-end'


},
zonequizz: {
width : "70%",
alignSelf:'center',

height :"80%",
backgroundColor : "rgb(68,73,123)"
},
question : {
marginTop :"5%",
position:'absolute',
alignSelf :'center',
fontSize:30
},
boutongauche:{
alignSelf:"flex-start",
backgroundColor:"rgb(0,0,0)",
marginTop: "40%",
marginBottom: "20%",
marginLeft:"5%",
width:"50%",
lenght:"100%"
},
orniny: {

width:"50%",
height:"50%"
}

});

;