import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {View, Text,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
 

 
export default class addScreen extends Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text>SecondScreen</Text>
                <Button color='indigo' onPress={()=>{this.props.navigation.navigate('calendarScreen')}}  title="Go back"></Button>
            </View>
        );
    }
}

