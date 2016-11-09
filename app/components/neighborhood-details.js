import Ember from 'ember';

export default Ember.Component.extend({
  // avgReview: Ember.computed(function() {
  //   var reviews = this.get('neighborhood').get('reviews').get('content').get('currentState');
  //   var total = 0;
  //   for (var i = 0; i < reviews.length; i++) {
  //     var blah = reviews[i];
  //     console.log(blah);
  //   }
  // }),

  actions: {
    saveReview(params) {
      this.sendAction('saveReview', params);
    }
  }
});
