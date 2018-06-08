import React from 'react';
import { StyleSheet, Text, View, Button,Props, TextInput, TouchableOpacity, StatusBar, ActivityIndicator,
Image, Alert, Modal } from 'react-native';
import { StackNavigator} from 'react-navigation';
import Register from './Register';
import Mynav from './Home';
import Welcome from '../main/Welcome';
import {Icon,Header,} from 'native-base';
import { title } from 'change-case';
import * as firebase from 'firebase';



export default class Login extends React.Component {

 
  static navigationOptions =({navigation}) => {
   return { 
    title: <Text style={{fontSize: 20, fontWeight: 'bold',  color: '#fff'}}>Login</Text>, 
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
  this.state =({
    email: "",
    password: "",
    errorMessage: null,

  }) 
}

componentWillMount(){
  
}



login = (email, password) =>{

 

  if (this.state.email=="" || this.state.password =="") {
    Alert.alert(
      'Ooops',
      'Please note that all fields are required'
    )
  } else {

   firebase.auth().signInWithEmailAndPassword(email, password)
    .then(

         
      () => this.props.navigation.navigate('Welcome')
      
    )
    .catch(error => this.setState({errorMessage: error.message}))

  }
}

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.text2}>
    {/* <Text style={{fontSize: 18, fontWeight: 'bold',  color: '#fff'}}>LOGIN</Text> */}
    {this.state.errorMessage && <Text style={{color: 'white', textAlign:'center'}}>Error: {this.state.errorMessage}</Text>}
       </View>

      <View style={styles.inputbox}>
        <TextInput style={styles.formPlace}
        placeholder="Enter your email"
        placeholderTextColor="#cccccc"
        returnKeyType="next"
        autoCorrect={false}
        autoCapitalize='none'
        keyboardType='email-address'
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


       <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity
      //  onPress = {() => this.props.navigation.navigate('Welcome')}
      onPress = {() =>this.login(this.state.email, this.state.password)}
        
        >
        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 50, 
        width: 60, height: 60, backgroundColor:'#fff', borderRadius: 35,
        }}>
         <Icon style ={{color: '#045f99',}}
        android = 'md-arrow-forward' 
        ios = 'ios-arrow-forward'
        />
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
  //  alignItems: 'center',
   // justifyContent: 'center',
   padding: 20,
  },
  input:{
      height: 60,
      width: 320,
      backgroundColor: '#f3f3f3',
      marginBottom: 10,
      color: 'black',
      paddingHorizontal: 25,
    
  },
  buttons:{
    marginTop: 10,
  },
  text:{
    marginTop: 50,
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer:{
  //  alignItems: 'center',
   //justifyContent: 'center',
    marginTop: 30,
    backgroundColor: '#fff',
   // paddingTop: 10,
  //  paddingBottom: 10,
    padding: 12,
    borderRadius:5,
  },
  me:{
  alignItems: 'flex-start',
  marginBottom: 5,
  justifyContent: 'flex-start',
  },
  text2:{
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
