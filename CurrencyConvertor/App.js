import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, FlatList } from 'react-native';
import DatePicker from 'react-native-datepicker'
import moment from "moment";
import { connect } from 'react-redux';
//import { calculateAge } from './actions/age';
import Calculator from './src/calculator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {ageReducer} from './reducers/ageReducer';
import configureStore from './store';

// const initialState = {
//   date: moment(new Date(), "YYYY-MM-DD"),
//   Years: 0,
//   Months: 0,
//   Weeks: 0,
//   Days: 0,
//   Hours: 0,
//   Minutes: 0,
//   Seconds: 0

// }
// const reducer = (state = initialState, action) => {
// debugger
//   var start = moment(new Date(), "YYYY-MM-DD");
//   var end = moment(action.payload, "YYYY-MM-DD");

//   switch (action.type) {  
//     case 'CALC_AGE':

//       return {
//         //...state,
//         date: moment(new Date(), "YYYY-MM-DD"),
//         Years: start.diff(end, 'years'),
//         Months: start.diff(end, 'months'),
//         Weeks: start.diff(end, 'weeks'),
//         Days: start.diff(end, 'days'),
//         Hours: start.diff(end, 'hours'),
//         Minutes: start.diff(end, 'minutes'),
//         Seconds: start.diff(end, 'seconds')
//       };

//       case 'CHNAGE_DATE':
//       return{       
        
//         date: moment(action.payload, "YYYY-MM-DD"),
//         Years: start.diff(end, 'years'),
//         Months: start.diff(end, 'months'),
//         Weeks: start.diff(end, 'weeks'),
//         Days: start.diff(end, 'days'),
//         Hours: start.diff(end, 'hours'),
//         Minutes: start.diff(end, 'minutes'),
//         Seconds: start.diff(end, 'seconds')
//       };

//     default:
//       return state;
//   }
// }
// const store = createStore(reducer);
const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Calculator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
