//import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('neighborhood');
  },

  actions: {
    // goToNeighborhood(params) {
    //
    // }
  }

  // var key = config.myApiKey;
});
