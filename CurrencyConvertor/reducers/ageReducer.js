import { CALC_AGE, CHANGE_DATE } from '../src/actions/types';
import moment from "moment";

const initialState = {
  date: moment(new Date(), "YYYY-MM-DD"),
  Years: 0,
  Months: 0,
  Weeks: 0,
  Days: 0,
  Hours: 0,
  Minutes: 0,
  Seconds: 0
};

const ageReducer = (state = initialState, action) => {
  debugger
  var start = moment(new Date(), "YYYY-MM-DD");
  var end = moment(action.payload, "YYYY-MM-DD");

  switch (action.type) {
    case CALC_AGE:

      return {
        //...state,
        date: moment(new Date(), "YYYY-MM-DD"),
        Years: start.diff(end, 'years'),
        Months: start.diff(end, 'months'),
        Weeks: start.diff(end, 'weeks'),
        Days: start.diff(end, 'days'),
        Hours: start.diff(end, 'hours'),
        Minutes: start.diff(end, 'minutes'),
        Seconds: start.diff(end, 'seconds')
      };

    case CHANGE_DATE:
      return {

        date: moment(action.payload, "YYYY-MM-DD"),
        Years: start.diff(end, 'years'),
        Months: start.diff(end, 'months'),
        Weeks: start.diff(end, 'weeks'),
        Days: start.diff(end, 'days'),
        Hours: start.diff(end, 'hours'),
        Minutes: start.diff(end, 'minutes'),
        Seconds: start.diff(end, 'seconds')
      };

    default:
      return state;
  }
}

export default ageReducer;