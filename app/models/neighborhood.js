import DS from 'ember-data';

export default DS.Model.extend({
  street: DS.attr('street'),
  city: DS.attr('city'),
  state: DS.attr('state'),
});
