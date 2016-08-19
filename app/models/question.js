import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  notes: DS.attr(),
  author: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
