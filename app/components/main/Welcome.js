import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Alert } from 'react-native';
import * as firebase from 'firebase';
import { TabNavigator, TabBarBottom} from 'react-navigation';
import Home from './Home';
import Profile from './Invite';
import Task from './Task';
import Announce from './Announce';
import FooterTabsExample from './Tabs';
import{Icon,Header, Container, Content, Left, Body, Title, Right} from 'native-base';


export default class Welcome extends React.Component {
  
  //offline detection
  /*
  componentDidMount(){
    var connected = firebase.database().ref('.info/connected')
    connected.on('value', (snap) => {
      if (snap.val()) {
      //there is internet connection
      } else {
        Alert.alert(
          'No internet access',
          'Please connect to the internet and try again',
          [
            {text: 'OK'}
          ],
          {cancelable: false }
        )
      }
    })
  }
*/

  static navigationOptions={
    header: null,
}
/* static navigationOptions =({navigation})=>{
    return {
  title: <Text style={{justifyContent: 'center'}}>EarnIt</Text>,
 // header: null,
  headerLeft: null,
  headerRight: <TouchableOpacity style={{paddingLeft: 20}}
  onPress = {() => {alert('signedout')
   navigation.navigate('HomeScreen')
   //firebase.auth().signOut()
   }
   }
  >
  <Text style={{paddingRight:10}}>Sign out</Text></TouchableOpacity>

}

  }
*/
render() {
    return (
  //  <FooterTabsExample />
  <Container>
  <Header style={{backgroundColor: 'white', height: 75,}}>
  <Left><Text style={{fontWeight: 'bold', fontSize:20, marginTop: 25}}>Earnit</Text></Left>
  <Body />
  <Right>
  <TouchableOpacity onPress={()=> firebase.auth().signOut()}>
  <Text style={{marginTop: 25}}>Sign out</Text></TouchableOpacity>
  </Right>
  
  </Header>

  <AppTabNav />
     </Container>
    );
  }
}

const AppTabNav = TabNavigator({
  Home:{
    screen: Home
  },
  Task:{
    screen: Task
  },
  Profile:{
    screen: Profile
  },
  News:{
    screen: Announce
  }

},
{
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions:{
    activeTintColor: '#045f99',
    inactiveTintColor: '#d1cece',
    showLabel: true,
    showIcon: true
  }
}

);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
