//import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('neighborhood');
  },

  actions: {
    lookup(params) {
      this.transitionTo('results', params);
    }
  }
});
