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
      var newReview = this.store.createRecord('review', params);
      var neighborhood = params.neighborhood;
      neighborhood.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return neighborhood.save();
      });
    },
  }
});
