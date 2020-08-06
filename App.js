import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// import * as React from 'react';
//  import { Button, View, Text, Modal,TextInput,Header,TouchableOpacity,Alert,KeyboardAvoidingView ,ScrollView,StyleSheet} from 'react-native';
import{createAppContainer,createSwitchNavigator} from 'react-navigation'
import Homescreen from './screens/Homescreen'
import Summaryscreen from './screens/Summaryscreen'
export default class App extends React.Component {
  render(){
  return (
    <View>
    <AppContainer/>
    </View>
  );
  }
}
 var appNavigator=createSwitchNavigator({
   Homescreen:Homescreen,
   Summaryscreen:Summaryscreen
 })

const AppContainer= createAppContainer(appNavigator)

