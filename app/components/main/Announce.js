import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';
import * as firebase from 'firebase';
import { TabNavigator } from 'react-navigation';
import {Icon} from 'native-base';

export default class Announce extends React.Component {
  static navigationOptions ={
    tabBarIcon: ({tintColor}) => (
        <Icon ios="ios-send" android="md-send" style={{color: tintColor}}/>
    )
}
  render() {
    return (
      <View style={styles.container}>
      <Text>This is the Annoncement screen</Text>
      </View>
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
  });
  