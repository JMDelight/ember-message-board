import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  note: DS.attr(),
  user: DS.belongsTo('user', { async: true }),
  timestamp: DS.attr('number'),
  answers: DS.hasMany('answer', { async: true })
});
