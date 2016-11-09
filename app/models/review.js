import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  comments: DS.attr(),
  score: DS.attr(),
  neighborhood: DS.belongsTo('neighborhood', { async: true }),
});
