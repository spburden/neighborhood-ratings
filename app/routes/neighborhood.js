import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var neighborhood = this.store.query('neighborhood', {
      orderBy: 'name',
      equalTo: params.name
    });
    return neighborhood;
  }
});
