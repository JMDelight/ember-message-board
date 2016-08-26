import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },
    deleteQuestion(question) {
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    deleteAnswer(answer) {
      answer.destroyRecord();
    },
    saveRating(params) {
      console.log("step three");

      var newRating = this.store.createRecord('rating', params);
      var answer = params.answer;
      answer.get('ratings').addObject(newRating);
      newRating.save().then(function() {
        return answer.save();
      });
      console.log(JSON.stringify(answer));
    }
  }
});
