import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, Button,ToastAndroid } from 'react-native';
import * as firebase from 'firebase';
import { TabNavigator } from 'react-navigation';
import {Icon, Thumbnail} from 'native-base';

export default class Profile extends React.Component {
  state ={currentUser: null,
     errorMessage:null, 
     verified: 'Unverified', 
     errorMessage: null, 
     disbtn: false,
     successMessage:'',
    name: ''}

  componentDidMount(){
    const {currentUser} = firebase.auth()
    this.setState({currentUser})
    const userid = firebase.auth().currentUser.uid;
    if (currentUser && currentUser.emailVerified == true) {
      this.setState({verified:'Verified'})
      this.setState({disbtn:true})

      //tries to update the verification in the database to detect the verification of email
     
      var newkey = firebase.database().ref('Users').child(userid).push().key
      var updates ={};
      updates[userid + newkey]

      firebase.database().ref('Users').update(updates);

      firebase.database().ref('Users').child(userid).update({
        Email_verified: 'Yes',
      })
    }

    //Fetches the name
    firebase.database().ref('Users/'+userid).on('value', (snapshot) =>{
      const highscore = snapshot.val().Username;
     // console.log('New High score is :'+ highscore)
      this.setState({name: highscore })
    
    })
    

  }

  static navigationOptions ={
    tabBarIcon: ({tintColor}) => (
        <Icon name="person"  style={{color: tintColor}}/>
    )
}

verify(){
  this.state.currentUser && this.state.currentUser.sendEmailVerification()
  .then(() => {
    ToastAndroid.show(
      'E-mail sent',
      ToastAndroid.LONG, ToastAndroid.BOTTOM
    )
   // this.setState({successMessage: 'E-mail sent'})
    this.setState({disbtn:true})

    //this line is just a trial line
    // i was thinking about disabling the button when the user is verified
    
  })
  .catch(error => this.setState({errorMessage: error.message}))
}

  render() {
    const {currentUser} = this.state

  
    return (
      <View style={styles.container}>
      {/*<ActivityIndicator color='#045f99' />*/}
      {this.state.errorMessage && <Text style={styles.error}>Oops: {this.state.errorMessage}</Text>}
     {/*<Text style={{textAlign:'center', justifyContent: 'center', padding: 10, color: 'red'}}>{this.state.successMessage}</Text>*/}

      <Thumbnail source={require('../images/octocat.png')} style={{height: 100, width: 100, marginTop: 20}}/>

      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>{this.state.name}</Text>
      <Text style={{fontSize:14,  marginTop: 10}}>{currentUser && currentUser.email}</Text>
      <Text style={{fontWeight: 'bold'}}>Account Status</Text>
      <Text>Email: {this.state.verified}</Text>
      <Text>Alive on the System: No</Text>

      <Button 

     onPress ={() => this.verify()}
    //onPress ={() => this.setState({disbtn:true})}
    title='Send Verification mail'
    disabled={this.state.disbtn}     />

      <Text>This is the notification screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
     // justifyContent: 'center',
    },
    error:{
      textAlign:'center', 
      justifyContent: 'center', 
      padding: 10, 
      color: 'red'
    }
  });
  