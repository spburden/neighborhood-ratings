import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var neighborhood = this.store.query('neighborhood', {
      orderBy: 'name',
      equalTo: params.name
    });
    return neighborhood;
  },
  actions: {
    saveReview(params) {
      console.log(params);
      this.store.createRecord('review', params).save();
      //this.transitionTo('index');
    }
  }
});
