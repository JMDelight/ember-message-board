import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    save() {
      var params = {
        user: this.get('currentUser.loggedInUser'),
        body: this.get('body'),
        note: this.get('note'),
        timestamp: Date.now()
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
