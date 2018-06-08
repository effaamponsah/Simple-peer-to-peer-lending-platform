import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator  } from 'react-native';
import * as firebase from 'firebase';
import { TabNavigator } from 'react-navigation';
import {Icon, Container, Content} from 'native-base';
import Mard from './HomeData';
import Detail from './HomeData';

export default class Home extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    showload:true
  }
}

componentWillMount(){
  setTimeout(() => {
    this.setState({
      showload:false
    })
  }, 3000)

}

  static navigationOptions={
    tabBarIcon :({tintColor}) => (
      <Icon name="md-home"
      style={{color: tintColor}}
       />
    )
  }
  render() {
    return (
     <Container style={styles.container}>
     {
       this.state.showload ?  <ActivityIndicator size='large' color='#045f99' /> : 
       
       <Content>
       <Mard/>
       <Mard />
       </Content>
       
     }
     </Container>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  