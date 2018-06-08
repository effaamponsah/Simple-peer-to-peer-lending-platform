import React from 'react';
import { StyleSheet, Text, View,Alert } from 'react-native';
import * as firebase from 'firebase';
import { TabNavigator } from 'react-navigation';
import {Icon, Card, CardItem, Thumbnail, Left, Body, Right} from 'native-base';
import {Asset, AppLoading} from 'expo';

export default class Mard extends React.Component {

state ={currentUser: null, errorMessage:null, verified: 'Verified', name:''}

componentWillMount(){
const cuser = firebase.auth().currentUser;
firebase.database().ref('Users/'+ cuser.uid).on('value', (snapshot) =>{
  const highscore = snapshot.val().Username;
 // console.log('New High score is :'+ highscore)
  this.setState({name: highscore })

})

 
  if (cuser.emailVerified == false) {
    this.setState({verified:'Unverified'})
  }
}





  render() {
    const cuser = firebase.auth().currentUser;
     
    return (
     <Card>
     <CardItem>
     <Left>
     <Thumbnail 
     source={require('../images/octocat.png')}
     />
     <Body>
     <Text style={{fontWeight: 'bold', fontSize: 20}}>Welcome</Text>
     <Text>{this.state.name}</Text>
     </Body>
     </Left>
     <Right>
     <Text>{this.state.verified}</Text>
     </Right>
     </CardItem>
     </Card>
    );
  }
}
