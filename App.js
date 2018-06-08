import React from 'react';
import { StyleSheet, Text, View, Button, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Register from './app/components/layouts/Register';
import Welcome from './app/components/main/Welcome';
import * as firebase from 'firebase';
import HeaderTitleExample from './app/components/try';
import * as Animatable from 'react-native-animatable';


import HomeScreen from './app/components/layouts/Home';





export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      isAuthenticated: false,
    })
    
  }
  

  
  componentWillMount(){
  firebase.auth().onAuthStateChanged(user => {
    this.setState({isAuthenticated:!!user})
  })  
  }
 

  render() {
   // const {currentUser} = this.state
    return (
    (this.state.isAuthenticated ? <Welcome/> : <HomeScreen />)
   //<HomeScreen /> 
 // <Verify />
 //  <Welcome />
 //<HeaderTitleExample />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
