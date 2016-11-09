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
        score: parseFloat(this.get('score')),
        neighborhood: neighborhood
      };
      if(params.comments && params.author && params.score >= 0 && params.score <= 5) {
        this.set('addNewReview', false);
        this.sendAction('saveReview', params);
        this.set('score', null);
        this.set('comments', '');
        this.set('author', '');
      } else {
        alert("Please fill out all fields before submitting and keep ratings between 1 and 5.")
      }

    }
  }
});
