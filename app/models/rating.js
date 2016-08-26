import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.belongsTo('answer', { async: true }),
  value: DS.attr('number'),
  user: DS.belongsTo('user', { async: true })
});
