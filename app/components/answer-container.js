import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['avearageRatingNumber:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortBy'),
  actions: {
    deleteAnswer(answer) {
      this.sendAction("deleteAnswer", answer);
    },
    saveRating(params) {
      this.sendAction('saveRating', params);
    }
  }
});
