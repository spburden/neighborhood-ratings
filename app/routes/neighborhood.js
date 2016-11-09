import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      neighborhood: this.store.query('neighborhood', {
        orderBy: 'name',
        equalTo: params.name
      }),
      latLong: [params.lat, params.long],
      walkscore: 1
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
    // getWalkScore(params) {
    //   console.log(this.model.walkscore.value());
    //   //console.log(params);
    //   var url = 'http://api.walkscore.com/score?format=json&lat=' + params[0] + '&lon=' + params[1] + '&wsapikey=b54d7a1a14b06657d6ecd2bc9fe8f2ed';
    //   return Ember.$.getJSON(url).then(function(responseJSON) {
    //     console.log(responseJSON);
    //
    //     this.set('walkscore', responseJSON.walkscore);
    //     console.log(this.get('walkscore'));
    //   });
    // }
  }
});
