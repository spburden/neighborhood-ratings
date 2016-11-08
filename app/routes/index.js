//import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('neighborhood');
  },

  actions: {
    lookup(params) {
      this.transitionTo('results', params);
    },
    findNeighborhood(neighborhood, lat, lng) {
      this.transitionTo('neighborhood', neighborhood, lat, lng)
      // console.log(params);
      // var neighborhood = this.store.query('neighborhood', {
      //   orderBy: 'name',
      //   equalTo: params
      // });
      // console.log(neighborhood);
      // return neighborhood;
    }
  }
});
