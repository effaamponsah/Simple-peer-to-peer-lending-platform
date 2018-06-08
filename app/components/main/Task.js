import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator  } from 'react-native';
import * as firebase from 'firebase';
import { TabNavigator } from 'react-navigation';
import {Icon} from 'native-base';

export default class Task extends React.Component {
    static navigationOptions ={
        tabBarIcon: ({tintColor}) => (
            <Icon ios="ios-briefcase" android = "md-briefcase"  style={{color: tintColor}}/>
        )
    }
  render() {
    return (
      <View style={styles.container}>
      <ActivityIndicator color='#045f99' />
      <Text>This is the Task screen</Text>
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
  