import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  actions: {
    like() {
      var params = {
        answer: this.get('answer'),
        value: true,
        user: this.get('currentUser.loggedInUser'),
      };
      console.log("step one");
      this.sendAction('saveRating', params);
    },
    dislike() {
      var params = {
        answer: this.get('answer'),
        value: false,
        user: this.get('currentUser.loggedInUser'),
      };
      console.log("step one");
      this.sendAction('saveRating', params);
    },

  }
});
