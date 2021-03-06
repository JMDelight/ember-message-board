import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(answer) {
      this.sendAction("deleteAnswer", answer);
    },
    saveRating(params) {
      this.sendAction('saveRating', params);
    }
  }
});
