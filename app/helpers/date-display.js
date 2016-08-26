import Ember from 'ember';
import moment from 'moment';

export function dateDisplay(params) {
  var timestamp = params[0] / 1000;
  var date = moment.unix(timestamp).format("h:mm a MM-DD-YYYY");
  return date;
}

export default Ember.Helper.helper(dateDisplay);
