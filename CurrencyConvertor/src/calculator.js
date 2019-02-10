/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import DatePicker from 'react-native-datepicker'
import moment from "moment";
import { connect } from 'react-redux';
//import { calculateAge } from './actions/age';

//React Native provides a module that detects the platform in which the app is running. 
// You can use the detection logic to implement platform-specific code. 
// Use this option when only small parts of a component are platform-specific.
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};

class Calculator extends Component {


  constructor(props) {
    super(props)
    this.state = {
      date: moment(new Date(), "YYYY-MM-DD"),
      Years: 0,
      Months: 0,
      Weeks: 0,
      Days: 0,
      Hours: 0,
      Minutes: 0,
      Seconds: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to my Age Calculator app</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text>Select your Date of birth</Text>
        <DatePicker
          style={{ width: 200 }}
          date={this.props.date}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {
            //this.setState({ date: date }) }
            { this.props.changeDate(date) }
            { this.props.date }
          }
          }
        />

        <Text>Please check below your age breakdown:</Text>
        <Text>Years: {this.props.Years}</Text>
        <Text>Months: {this.props.Months}</Text>
        <Text>Weeks: {this.props.Weeks}</Text>
        <Text>Days: {this.props.Days}</Text>
        <Text>Hours: {this.props.Hours}</Text>
        <Text>Minutes: {this.props.Minutes}</Text>
        <Text>Seconds: {this.props.Seconds}</Text>

        {/* <Text>Date: {this.props.date.date}</Text> */}


        {/* <Button
          onPress={this.props.calcAge}
          title="Calculate"
          color="#841584"
          accessibilityLabel="Leanr more about age calculation"
        /> */}
      </View>
    );
  }

  handleClick = async () => {
    debugger
    //this.props.add(this.state.date);

    //this.setState({ date: this.state.date }) 
    var start = moment(new Date(), "YYYY-MM-DD");
    var end = moment(this.state.date, "YYYY-MM-DD");

    //    await this.setState({ Years: moment(this.state.date, "YYYY-MM-DD").fromNow()});

    await this.setState({ Years: start.diff(end, 'years') });
    await this.setState({ Months: start.diff(end, 'months') })
    await this.setState({ Weeks: start.diff(end, 'weeks') })
    await this.setState({ Days: start.diff(end, 'days') })

    await this.setState({ Hours: start.diff(end, 'hours') })
    await this.setState({ Minutes: start.diff(end, 'minutes') })
    await this.setState({ Seconds: start.diff(end, 'seconds') })

    alert(' Your age breakdown: \n Years: ' + this.props.Years + '\n Months : ' + this.props.Months + '\n Weeks : ' + this.props.Weeks + '\n Days : ' + this.props.Days + '\n Hours : ' + this.props.Hours + '\n Minutes : ' + this.props.Minutes + '\n Seconds : ' + this.props.Seconds);
  }

}

function mapStateToProps(state) {

  return {
    date: moment(state.date, "YYYY-MM-DD"),
    Years: state.Years,
    Months: state.Months,
    Weeks: state.Weeks,
    Days: state.Days,
    Hours: state.Hours,
    Minutes: state.Minutes,
    Seconds: state.Seconds,
  }
}


function mapDispatchedProps(dispatch, state) {
  return {

    calcAge: () => dispatch({ type: 'CALC_AGE', payload: state.date }),
    changeDate: (date) => dispatch({ type: 'CHNAGE_DATE', payload: date })

  }

}

export default connect(mapStateToProps, mapDispatchedProps)(Calculator);

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
