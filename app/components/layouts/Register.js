import React from 'react';
import { StyleSheet, Text, View, Button,Props, TextInput, TouchableOpacity,
KeyboardAvoidingView, StatusBar, Image, Alert, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';
import Firebase from '../firebase/Firebase';
import { StackNavigator } from 'react-navigation';
import Verify from './Verify';
import {Container, Form, Item, Input, Label, Icon} from 'native-base';

const config = {
  apiKey: "*****",
  authDomain: "***",
  databaseURL: "******",
  projectId: "earnit-84146",
  storageBucket: "earnit-84146.appspot.com",
  messagingSenderId: "573432417345"
};

firebase.initializeApp(config)




export default class Register extends React.Component {
static navigationOptions = ({navigation}) => {

  return{
      title: <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10, color: '#fff'}}>Register With Us</Text>,
      headerLeft:  (<TouchableOpacity style={{paddingLeft:20,}}
      onPress = {() => navigation.goBack()}>
     <Icon ios="ios-arrow-back" android="md-arrow-back" style={{color:'white',}}/>
      </TouchableOpacity> ),
      headerStyle:{
        backgroundColor: '#045f99',
      }
    }
   }

   constructor(props) {
     super(props)
       this.state = ({
         email: "",
         password: "",
         username: "",
         number: "",
         live:'No',
         email_verified: 'No',
         errorMessage: null,
         
       })
   }



signup = (email, password) =>{
  if (this.state.email =="" || this.state.password == "" || this.state.username =="" || this.state.number =="" ) {
    Alert.alert(
      'Ooops',
      'Please note that all fields are required'
    )
  } else {
     firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(
      () =>  {this.props.navigation.navigate('Home');
      
      const userid = firebase.auth().currentUser.uid;
      firebase.auth().currentUser.displayName == this.state.username;

    // var key = firebase.database().ref('Users').push().key
      firebase.database().ref('Users').child(userid).set({
        Username: this.state.username,
        Number: this.state.number,
        Paid: this.state.live,
        Email_verified: this.state.email_verified,
        Email: this.state.email,
        
     })

    }

    )
    .catch(
      error => this.setState({errorMessage: error.message})
    )

   
  }


}

  render() {
    const {currentUser} = this.state
    return (
      
      <View style={styles.container}>
     
       <View style={styles.text}>
     {/*<Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 10, color: '#fff'}}>REGISTER WITH US</Text>*/}
     {this.state.errorMessage && <Text style={{color: 'white', textAlign:'center'}}>Error: {this.state.errorMessage}</Text>}
       </View>

        <View style={styles.inputbox}>
        <TextInput style={styles.formPlace}
        placeholder="Name on Mobile Money Wallet"
        placeholderTextColor="#cccccc"
        returnKeyType="next"
        autoCorrect={false}
        underlineColorAndroid="transparent"
        onChangeText={(username) => this.setState({username})}
        />
      </View> 

         <View style={styles.inputbox}>
        <TextInput style={styles.formPlace}
        placeholder="Enter your email"
        placeholderTextColor="#cccccc"
        returnKeyType="next"
        keyboardType='email-address'
        autoCorrect={false}
        autoCapitalize='none'
        underlineColorAndroid="transparent"
        onChangeText={(email) => this.setState({email})}
        />
      </View>

      <View style={styles.inputbox}>
        <TextInput style={styles.formPlace}
        placeholder="Password"
        placeholderTextColor="#cccccc"
        secureTextEntry={true}
        returnKeyType="go"
        underlineColorAndroid="transparent"
        onChangeText={(password) => this.setState({password})}
         />
        </View>


        <View style={styles.inputbox}>
        <View style={{flexDirection: 'row'}}>
        <Image 
        style={{height: 26, width: 26, resizeMode: 'contain', marginRight: 8,}}
        source = {require('../images/flag.png')}
        />
        <Text style={{fontSize: 16, paddingTop:4, marginLeft:2,}}>+233</Text>
        <TextInput style={{fontSize:16, paddingHorizontal: 10, width:300}}
        placeholder="Enter your Mobile Money no." underlineColorAndroid="transparent"
        placeholderTextColor= '#cccccc' keyboardType= 'phone-pad' 
        onChangeText={(number) => this.setState({number})}
              />
        </View>
        </View>

       <View style={{alignItems: 'flex-end', }}>
       <TouchableOpacity 
      onPress = {() => this.signup(this.state.email, this.state.password)}
     // onPress ={() => this.props.navigation.navigate('Verify')}
        >
        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 30, 
        width: 60, height: 60, backgroundColor:'#fff', borderRadius: 35,
        }}>
        <Icon style ={{color: '#045f99', }}
        android = 'md-arrow-forward' 
        ios = 'ios-arrow-forward'/>
        </View>
        </TouchableOpacity>
        </View>


  
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#045f99',
 //   alignItems: 'center',
  //  justifyContent: 'center',
  padding: 20,
  },
  input:{
      height: 50,
      width: 350,
     //padding: 12,
      backgroundColor: '#f3f3f3',
      marginBottom: 10,
      color: 'black',
      paddingHorizontal: 20,
      borderRadius: 5,
  },
  buttons:{
    marginTop: 10,  alignItems: 'center',
  },
  text:{
   // marginTop: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputbox:{
    backgroundColor: '#fff', padding:12, borderRadius:5, marginTop: 10,
  },
  formPlace:{
    fontSize:16, paddingHorizontal: 10, 
  }
 

});
