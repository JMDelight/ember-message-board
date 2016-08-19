import Ember from 'ember';

export default Ember.Component.extend({
  editAnswer: false,
  actions: {
    editAnswerFormShow() {
      this.set('editAnswer', true);
    },
    saveChanges(answer) {
      this.set('editAnswer', false);
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
