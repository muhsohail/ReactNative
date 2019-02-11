import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import DatePicker from 'react-native-datepicker'
import moment from "moment";
import { connect } from 'react-redux';
import { changeDate } from './actions/changeDate';

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
        <Text style={styles.welcome}>AGE CALCULATOR</Text>
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
        <Text>Select your birth date</Text>
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
          }}
          onDateChange={(date) => {
            {
              this.props.change(date)
            }
          }
          }
        />
        <Text style={styles.welcome}>Your age breakdown is below:</Text>
        <Text>Years: {this.props.Years}</Text>
        <Text>Months: {this.props.Months}</Text>
        <Text>Weeks: {this.props.Weeks}</Text>
        <Text>Days: {this.props.Days}</Text>
        <Text>Hours: {this.props.Hours}</Text>
        <Text>Minutes: {this.props.Minutes}</Text>
        <Text>Seconds: {this.props.Seconds}</Text>
      </View>
    );
  }

  // This is when mannually setting up states
  handleClick = async () => {
    debugger
    var start = moment(new Date(), "YYYY-MM-DD");
    var end = moment(this.state.date, "YYYY-MM-DD");
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

function mapDispatchedProps(dispatch) {
  return {
    change: (date) => {
      dispatch(changeDate(date))
    }
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
