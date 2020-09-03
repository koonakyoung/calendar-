/*import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';

import calendarScreen from './screens/calendarScreen';
import AgendaScreen from './screens/AgendaScreen';

const Stack = createStackNavigator();

function CalendarStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="calendar_s" component={calendarScreen}/>
      <Stack.Screen name="agenda_s" component={AgendaScreen}/>
    </Stack.Navigator>
  );
}
export default class main extends Component{
    render(){
        return(
            <View>
                <Stack></Stack>
            </View>

        );
    }
}
*/

import React, { Component } from 'react'
import {View,TextInput,Text,TouchableOpacity,Button,StyleSheet} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일', '월','화','수','목','금','토'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';

export default class main extends Component {
  /*
  state = {
    isFocused: false,
  };
*/
  constructor(props) {
    super(props);
    this.state={
      isFocused: false,
_markedDates: [],
marked: null,
    }
}

  render() {
    _setSelectedDates = (date) => {
    if (this.state._markedDates.length === 0) {
        this.setState({
            _markedDates: [date]
        }, () => {
            console.log(this.state._markedDates)
            let obj = this.state._markedDates.reduce((c, v) => Object.assign(c, {
                [v]: {
                    selected: true,
                    marked: true
                }
            }), {});
            this.setState({marked: obj});
        })
    }
    else {
        this.setState({
            _markedDates: this.state._markedDates.concat(date)
        }, () => {
            let obj = this.state._markedDates.reduce((c, v) => Object.assign(c, {
                [v]: {
                    selected: true,
                    marked: true
                }
            }), {});
            this.setState({marked: obj});
        })
    }
  }
     return (
      <View style={{ paddingTop: 40, flex: 1 }}>
     
      <CalendarList
      
      horizontal={true}
        // Initially visible month. Default = Date() 처음에 보이는 달을 설정.기본값 Date()
        current={this.state.calendarDate}
       
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        //선택할 수 있는 최소한의 날짜. minDate 이전의 날짜는 회색으로 바뀜.기본값은 undefined이다. 
        //2020-05-10를 예로 들면, 2020-05-09 포함 그 이전의 날짜는 회색으로 바뀌며, 날짜를 선택해도 onDayPress 함수가 작동하지 않는다.
       // minDate={'2020-01-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
         //선택할 수 있는 최대한의 날짜. maxDate 이후의 날짜는 회색으로 바뀜.기본값은 undefined이다. 
        //2020-05-30를 예로 들면, 2020-06-01 포함 그 이후의 날짜는 회색으로 바뀌며, 날짜를 선택해도 onDayPress 함수가 작동하지 않는다.
        //maxDate={'2020-12-31'}
        // Handler which gets executed on day press. Default = undefined
        //날짜를 누르면 실행되는 함수.기본값은 undefined
        //day 파라미터에는 위에서 말한 캘린더 객체가 들어감(Usage 바로 밑의 캘린더 객체)
       // onDayPress={(day) => {console.log('selected day', day)} }
      
      //하루만 마킹하기 https://philip1994.tistory.com/98
      /*
      onDayPress={day => {
          this.setState({
  selectedDate : day.year + "-" + day.dateString.split('-')[1] + "-" + day.dateString.split('-')[2],
  });
      }}
      minDate={this.state.today}
      markedDates={{
          [this.state.selectedDate]: {
              selected: true,
              marked: true,
              selectedColor: "rgb(76,174,249)"
          }
      }}
      //style={styles.calendar}
      */

     onDayPress={(day) => {
      this.setState({
          _markedDates: day.year + "-" + day.dateString.split('-')[1] + "-" + day.dateString.split('-')[2]
      })
  }}
  
  minDate={this.state.today}
  //markedDates={this.state.marked}
  markedDates={{
    '2020-09-13': {selected: true, marked: true, selectedColor: 'blue'},
    '2020-09-12': {marked: true},
    '2020-09-04': {marked: true, dotColor: 'red', activeOpacity: 0},
    '2020-09-19': {disabled: true, disableTouchEvent: true}
  }}
        
        // Handler which gets executed on day long press. Default = undefined
        //날짜를 길게(2~3초)  누르면 실행되는 함수. 기본값은 undefined이다.
        //day파라미터에는 위에서 말한 캘린더 객체가 들어감.(Usage 바로 밑의 캘린더 객체)
        onDayLongPress={(day) => {console.log('selected day', day)}}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        //캘린더 제목에 들어갈 Month 형식
        monthFormat={'yyyy년MM월'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
         // 캘린더의 달(Month)를 바꿀 때마다 실행되는 함수. 기본값은 undefined입니다.
  // month 파라미터에는 위에서 말한 캘린더 객체가 들어갑니다. (Usage 바로 밑의 캘린더 객체)
        onMonthChange={(month) => {console.log('month changed', month)}}
        // Hide month navigation arrows. Default = false
        // 달(Month)을 바꾸는 네비게이션 화살표를 없앱니다. 기본값은 false입니다.
        hideArrows={true}
        // Replace default arrows with custom ones (direction can be 'left' or 'right')
       // 기본 화살표를 커스텀 화살표로 대체할 수 있습니다.
  // direction 파라미터에는 'left' 혹은 'right'이 들어갑니다.
        renderArrow={(direction) => (<Arrow/>)}
        // Do not show days of other months in month page. Default = false
        // 다른 달의 요일을 월 페이지에 표시하지 않습니다. 기본값은 false입니다.
        hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
         // 만약 hideArrows=false, hideExtraDays=false이면, 달력 페이지에 회색으로 표시된 다른 달의 날짜를 선택했을 때
  // 달이 바뀌지 않도록 합니다. 기본값은 false입니다. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        // firstDay=1 이면, 월요일부터 주(week)가 시작됩니다. LocaleConfig에서  dayNames와 dayNamesShort는 일요일부터 시작해야됩니다.
  // firstDay = 1는 dayNames[1] 혹은 dayNamesShort[1]을 의미합니다.
        firstDay={1}
        // Hide day names. Default = false
        // 요일 이름을 숨깁니다. 기본값은 false입니다.
        hideDayNames={false}
        // Show week numbers to the left. Default = false
        // 캘린더 왼쪽에 올해 몇 주차인지 보여줍니다. 기본값은 false입니다.
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        // 왼쪽 화살표를 눌렀을 때 실행되는 함수.
        onPressArrowLeft={substractMonth => substractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
         // 오른쪽 화살표를 눌렀을 때 실행되는 함수.
        onPressArrowRight={addMonth => addMonth()}
        // Disable left arrow. Default = false
          // 아래 옵션은 공식문서 예제에는 있지만, index.d.ts에는 정의되어 있지 않습니다.
  // hideArrows 옵션만 사용가능하도록 업데이트 된 것 같습니다.
  // 왼쪽 화살표를 사용하지 않도록 합니다. 기본값은 false입니다.
        disableArrowLeft={false}
        // Disable right arrow. Default = false
        // 오른쪽 화살표를 사용하지 않도록 합니다. 기본값은 false입니다.
  
        disableArrowRight={false}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        /** Replace default month and year title with custom one. the function receive a date as parameter. */
       // renderHeader={(date) => {/*Return JSX*/}}
   
       />
       <Agenda
  // The list of items that have to be displayed in agenda. If you want to render item as empty date
  // the value of date key has to be an empty array []. If there exists no value for date key it is
  // considered that the date in question is not yet loaded
  items={{
    '2012-05-22': [{name: 'item 1 - any js object'}],
    '2012-05-23': [{name: 'item 2 - any js object', height: 80}],
    '2012-05-24': [],
    '2012-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
  }}
  // Callback that gets called when items for a certain month should be loaded (month became visible)
  loadItemsForMonth={(month) => {console.log('trigger items loading')}}
  // Callback that fires when the calendar is opened or closed
  onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
  // Callback that gets called on day press
  onDayPress={(day)=>{console.log('day pressed')}}
  // Callback that gets called when day changes while scrolling agenda list
  onDayChange={(day)=>{console.log('day changed')}}
  // Initially selected day
  selected={this.state.calendarDate}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2020-08-01'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2020-12-30'}
  // Max amount of months allowed to scroll to the past. Default = 50
  pastScrollRange={50}
  // Max amount of months allowed to scroll to the future. Default = 50
  futureScrollRange={50}
  // Specify how each item should be rendered in agenda
  renderItem={(item, firstItemInDay) => {return (<View />);}}
  // Specify how each date should be rendered. day can be undefined if the item is not first in that day.
  renderDay={(day, item) => {return (<View />);}}
  // Specify how empty date content with no items should be rendered
  renderEmptyDate={() => {return (<View />);}}
  // Specify how agenda knob should look like
  renderKnob={() => {return (<View />);}}
  // Specify what should be rendered instead of ActivityIndicator
  renderEmptyData = {() => {return (<View />);}}
  // Specify your item comparison function for increased performance
  rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
  // Hide knob button. Default = false
  hideKnob={true}
  // By default, agenda dates are marked if they have at least one item, but you can override this if needed
  markedDates={{
    '2012-05-16': {selected: true, marked: true},
    '2012-05-17': {marked: true},
    '2012-05-18': {disabled: true}
  }}
  // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
  disabledByDefault={true}
  // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly.
  onRefresh={() => console.log('refreshing...')}
  // Set this true while waiting for new data from a refresh
  refreshing={false}
  // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView.
  refreshControl={null}
  // Agenda theme
 /*
  theme={{
    ...calendarTheme,
    agendaDayTextColor: 'yellow',
    agendaDayNumColor: 'green',
    agendaTodayColor: 'red',
    agendaKnobColor: 'blue'
  }}
  // Agenda container style
  style={{}}
  */
/>

   
     <TextInput
       // style={styles.input}
       placeholder=" 기 록 "
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        value={this.state.name}
       onChangeText={(text) => this.setState(prevState => ({
         name: prevState.name = text
        }))}
      />
      </View>
    )
   }
 }


/*

import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';

export default class main extends Component{
    render(){
        return(
            <View>
                <Text>Main</Text>
            </View>

        );
    }
}
*/
