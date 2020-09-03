import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity,TextInput, InputAccessoryView} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
//import DialogInput from 'react-native-dialog-input';
import Dialog from "react-native-dialog";
import {createStackNavigator} from 'react-navigation-stack';
import calendarScreen from './screens/calendarScreen';
import addScreen from './screens/addScreen';

import {createAppContainer} from 'react-navigation';
 

const stackNav= createStackNavigator(
    {
        calendarScreen: {screen:calendarScreen},
        addScreen: {screen:addScreen},
    }
);
 
const Container=createAppContainer(stackNav);
 
export default class App extends Component{
    render(){
        return <Container theme="light"></Container>
    }
}
