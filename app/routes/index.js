import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    lookup(params) {
      this.transitionTo('results', params);
    },

    zipLookup(params) {
      this.transitionTo('demographic', params.zip);
    }
  }
});
