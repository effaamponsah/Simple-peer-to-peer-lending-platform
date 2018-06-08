import React from 'react';
import {StyleSheet, Props,TouchableOpacity, Image, Text, View, Button, ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';
import { StackNavigator } from 'react-navigation';
import Welcome from '../main/Welcome';
import { Container} from 'native-base';

import Defaults from './Login';
import Register from './Register';
import Login from './Login';




class DefaultScreen extends React.Component{


    constructor(props) {
        super(props)
        this.state = {
          showload:true
        }
      }
      
      componentDidMount(){
        setTimeout(() => {
          this.setState({
            showload:false
          })
        }, 5000)
      
      }
      
      

    static navigationOptions={
        header: null,
    }
    render()
    {
        return(
         
       <View style={styles.container}>
       <View style={styles.logocontainer}>
            <Image style={{width: 150, height: 150,}}
            source = {require('../images/logo.png')}
             />
          <Text style={{color: '#fff', fontWeight: 'bold', marginTop: 20,
          fontSize: 35}}>EarnIt</Text>
          <Text style={{color: '#fff', opacity: 0.8, marginTop: 20, fontSize: 15, width: 200, textAlign: 'center' }}>Simple and Secured Peer-to-Peer Lending Platform</Text>
        </View>
    
        {this.state.showload ? 
        <View style={{marginBottom: 40}}>
        <ActivityIndicator  color='white'/>
        </View>
         :
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.inbutton}
            onPress = {() => this.props.navigation.navigate('LoginScreen')}
            >
             <Text style={{color: '#045f99'}}>Log In</Text>
             </TouchableOpacity>
             <TouchableOpacity
             onPress = {() => this.props.navigation.navigate('RegScreen')}
             >
             <Text style={{color: 'white', marginTop: 30}}>Register</Text>
             </TouchableOpacity>
        </View> 
        }
    </View>

        );
    }
}



class Verify extends React.Component{
    static navigationOptions={
        header: null,
    }
    render() {
        return(
            <View style={styles.container}>
   <Text style={{color: 'white', textAlign:'center', marginBottom: 55, fontSize: 20, fontWeight:'bold'}}>Verify your e-mail to use this app</Text>
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
  
        )
    }
}

export default class HomeScreen extends React.Component { 
  render() { 
    return (
    <Mynav />
    );
  }
}


const Mynav = StackNavigator({
    HomeScreen:{
        screen: DefaultScreen
    },
    LoginScreen:{
        screen: Login
    },
    RegScreen:{
        screen: Register
    },
    Welcome:{
        screen: Welcome
    },
    Verify: Verify
},

)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#045f99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inbutton:{
  
    backgroundColor: '#fff',
    paddingLeft: 90,
    paddingRight: 90,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logocontainer:{
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
      

  },
  buttons:{
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 40,

  }
});
