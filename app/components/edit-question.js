import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  editQuestion: false,
  loggedInAsQ: Ember.computed('currentUser.loggedInUser', 'this.question.user', function() {
    return (this.get('currentUser.loggedInUser.userName') === this.get('question.user.userName'));
  }),
  actions: {
    editQuestionFormShow() {
      this.set('editQuestion', true);
    },
    saveChanges(question) {
      this.set('editQuestion', false);
      question.set('timestamp', Date.now());
      question.save();
    },
    deleteQuestion(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.set('editQuestion', false);
        this.sendAction("deleteQuestion", question);
      }
    }
  }
});
