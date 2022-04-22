import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';

export default class Vrai extends React.Component {

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
        <TouchableOpacity onPress={() => {
          this.showAlert();
        }}>
          <View style={styles.button}>
            <Text style={styles.text}>Vrai</Text>
          </View>
        </TouchableOpacity>

        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Bonne réponse"
          message="les yaourts rendent les os solide a l'aide du calcium , reviens demain pour une autre question"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText="a"
          confirmText="page d'accueil"
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
      
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgb(68,73,123)",
  },
  button: {

        width:"150%",
        height:"150%",
        justifyContent:'flex-end',
       alignSelf:"center",
       borderRadius: 10,
       borderColor:"rgb(255,251,162)",
       borderWidth: 3,
         alignItems: "center",
         
  },
  text: {
    fontFamily:"Pacifico",
 
   fontSize: 18,
   color:"rgb(255,251,162)",
  }
});