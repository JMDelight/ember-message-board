import DS from 'ember-data';

export default DS.Model.extend({
  ratings: DS.hasMany('rating', { async: true }),
  answers: DS.hasMany('answer', { async: true }),
  questions: DS.hasMany('question', { async: true }),
  userName: DS.attr(),
  password: DS.attr()
});
