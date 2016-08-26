import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  body: DS.attr(),
  user: DS.belongsTo('user', { async: true }),
  question: DS.belongsTo('question', { async: true }),
  timestamp: DS.attr('number'),
  ratings: DS.hasMany('rating', { async: true }),
  averageRating: Ember.computed('ratings', function() {
    var runningTotal = 0;
    var numberOfRatings = 0;
    this.get('ratings').forEach(function(rating) {
      runningTotal += rating.get('rating');
      console.log(runningTotal);
      numberOfRatings ++;
    });
    if (numberOfRatings < 4) {
      return "There are not enough ratings to rank this answer.";
    } else {
      return (runningTotal / numberOfRatings).toString() + "%";
    }
  })
});
