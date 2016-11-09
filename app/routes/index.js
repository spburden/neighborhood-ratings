import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    lookup(params) {
      this.transitionTo('results', params);
    },

    tractLookup(params) {
      this.transitionTo('demographic', params.tract);
    }
  }
});
