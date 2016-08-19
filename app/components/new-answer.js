import Ember from 'ember';

export default Ember.Component.extend({
  addAnswer: false,
  actions: {
    saveAnswer1() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        question: this.get('question')
      };
      this.set('addAnswer', false);
      this.sendAction('saveAnswer2', params);
    },
    showAnswerForm() {
      this.set('addAnswer', true);
    }
  }
});
