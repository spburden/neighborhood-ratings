import DS from 'ember-data';

export default DS.Model.extend({

  street: DS.attr('street'),
  city: DS.attr('city'),
  state: DS.attr('state'),
  name: DS.attr(''),
  // zipcode: DS.attr(),
  // latitude: DS.attr('number'),
  // longitude: DS.attr('number'),
  reviews: DS.hasMany('review', { async: true })

});
