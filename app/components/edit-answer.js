import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  editAnswer: false,
  loggedInAs: Ember.computed('currentUser.loggedInUser', 'this.answer.user', function() {
    return (this.get('currentUser.loggedInUser.userName') === this.get('answer.user.userName'));
  }),
  actions: {
    editAnswerFormShow() {
      this.set('editAnswer', true);
    },
    saveChanges(answer) {
      this.set('editAnswer', false);
      answer.set('timestamp', Date.now());
      answer.save();
    },
    deleteAnswer(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.set('editAnswer', false);
        this.sendAction("deleteAnswer", answer);
      }
    }
  }
});
