import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteAnswer(answer) {
      this.sendAction("deleteAnswer", answer);
    },
    saveRating(params) {
      console.log("step two");

      this.sendAction('saveRating', params);
    }
  }
});
