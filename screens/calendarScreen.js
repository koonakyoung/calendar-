import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity,TextInput, InputAccessoryView,Button} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
//import DialogInput from 'react-native-dialog-input';
import Dialog from "react-native-dialog";


LocaleConfig.locales['fr'] = {
    monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
    monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
    dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
    dayNamesShort: ['일', '월','화','수','목','금','토'],
    today: 'Aujourd\'hui'
  };
  LocaleConfig.defaultLocale = 'fr';
  
  
 
export default class calendarScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          //isDialogVisible=false,
          items: {},
          dialogVisible: false,
          userAgeSelection: null,
          
        };
        
      }
      
  
      SampleFunction=()=>{
 
        Alert.alert("Floating Button Clicked");
   
    }
   
   
    render() {
   
      return (
   
        <View style={styles.MainContainer}>
   
          <TouchableOpacity activeOpacity={0.5} onPress={this.SampleFunction} style={styles.TouchableOpacityStyle} >
   
            <Image source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}} 
            
                   style={styles.FloatingButtonStyle} />
         
          </TouchableOpacity>
   
        </View>
      );
    }
    
    
      render() {
        return (
            
          <Agenda
          monthFormat={'yyyy년MM월'}
           items={this.state.items}
           loadItemsForMonth={this.loadItems.bind(this)}
            selected={this.state.calendarDate}
           renderItem={this.renderItem.bind(this)}
           //renderEmptyDate={this.renderEmptyDate.bind(this)}
           //rowHasChanged={this.rowHasChanged.bind(this)}
           markedDates={{
            '2020-09-13': {selected: true, marked: true, selectedColor: 'blue'},
            '2020-09-12': {marked: true},
            '2020-09-04': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2020-09-19': {disabled: true, disableTouchEvent: true}
          }}
          theme={{calendarBackground: 'white',agendaDayNumColor:'gray', agendaKnobColor: 'pink'}}
            hideExtraDays={false}
          />
              
        );
        
      }
      /*
      render(){
        return(
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text>HomeScreen</Text>
                <Button onPress={this.gotoSecond} title="Go to the Second screen"></Button>
            </View>
        );
    }
    gotoSecond=()=>{
        // 네비게이터에 의해 보여지는 컴포넌트들은 자동으로
        // this.props 변수 안에 navigation이라는 객체가 전달됨
        this.props.navigation.navigate('addScreen')
    }*/

      
      /*
    render(){
      return(
        <DialogInput isDialogVisible={this.state.isDialogVisible}
        submitInput={ (inputText) => {this.sendInput(inputText)} }
       closeDialog={ () => {this.showDialog(false)}}
        title={내용을 기입하시오}
        hintInput ={"HINT INPUT"}>
    </DialogInput>
      )
    }
    */
    
      
      loadItems(day) {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = this.timeToString(time);
            if (!this.state.items[strTime]) {
              this.state.items[strTime] = [];//아이템 날짜 알려주는 함수 
              const numItems = Math.floor(Math.random() * 1+ 1);//한칸에 하나의
              for (let j = 0; j < numItems; j++) {
                this.state.items[strTime].push({
                name:'눌러서 내용을 기록하거나 출결을 체크하세요'
                  
                });
             
              }
               
          }
        }
          /*
             
            if(this.state.name==''){
              height: Math.min(20)
              }
              else{
                height: Math.min(50)
              }*/ 
          const newItems = {};
          Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
          this.setState({
            items: newItems
          });
        }, 1000);
      }
    //item이름을 적어둔 거 내용창에
      renderItem(item) {
        return (
          <TouchableOpacity
          style={[styles.item, {height: item.height}]} 
          onPress={()=>Dialog.Container(this.state.dialogVisible)} 
    
        >
          <Text>{item.name}</Text>
         
        
        </TouchableOpacity>
      );
    }
   
    
      timeToString(time) {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
      }
      
      
    }
    
    const styles = StyleSheet.create({
      item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
      },
      emptyDate: {
        height: 15,
        flex:1,
        paddingTop: 30
      },
      name:{
        color:'pink'
      },
      MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#F5F5F5'
      },
     
      TouchableOpacityStyle:{
     
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
      },
     
      FloatingButtonStyle: {
     
        resizeMode: 'contain',
        width: 50,
        height: 50,
      }
    });

    