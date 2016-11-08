import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      neighborhood: this.store.query('neighborhood', {
        orderBy: 'name',
        equalTo: params.name
      }),
    });
  },
  actions: {
    saveReview(params) {
      console.log(params);
      this.store.createRecord('review', params).save();
      //this.transitionTo('index');
    },
  }
});
