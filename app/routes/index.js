//import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('neighborhood');
  },

  actions: {

    tractLookup(params) {
      this.transitionTo('demographic', params.tract);
    },

    findNeighborhood(neighborhood, lat, lng) {
      this.transitionTo('neighborhood', neighborhood, lat, lng);
    },
    saveNeighborhood(params) {
      console.log(params);
      this.store.createRecord('neighborhood', params).save();
      //this.transitionTo('index');
    }
  }
});
