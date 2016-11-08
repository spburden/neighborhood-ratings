import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
       this.set('addNewReview', true);
    },
    cancel() {
       this.set('addNewReview', false);
    },
    saveReview(neighborhood) {
      var params = {
        comments: this.get('comments'),
        author: this.get('author'),
        score: parseInt(this.get('score')),
        neighborhood: neighborhood
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview', params);
      this.set('comments', '');
      this.set('neighborhood', '');
      this.set('author', '');
    }
  }
});
