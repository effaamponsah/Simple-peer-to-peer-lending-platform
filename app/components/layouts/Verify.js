import React from 'react';
import { StyleSheet, Text, View,ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

export default class Verify extends React.Component {
constructor(props) {
  super(props)
  this.state = ({
    isAuthenticated: false
  })
  
}

componentWillMount(){
/*firebase.auth().onAuthStateChanged(user => {
  this.setState({isAuthenticated:!!user})
}) 
*/ 
var user = firebase.auth().currentUser;


}



verify (){
}

  render() {
    return (
   //   (this.state.isAuthenticated ? <Home /> : <Mynav /> )
   <View style={styles.container}>
   <Text style={{color: 'white', textAlign:'center', marginBottom: 55, fontSize: 20, fontWeight:'bold'}}>Verify your e-mail to use the Earnit</Text>
   <View>
   <Image style={{width: 150, height: 150,}}
            source = {require('../images/verify2.png')}
             />
             
             
    </View>

    <View>
   
    <View style={{padding: 10, marginTop: 45, marginBottom: 30,}}>
    <Text style={{color: 'white', textAlign:'center'}}>A verification mail has been sent to the email you provided. Click on the link to continue</Text>
    </View>
    </View>
   </View>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#045f99',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
});
