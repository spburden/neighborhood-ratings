import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    goToNeighborhood(neighborhood) {
      this.sendAction("goToNeighborhood", neighborhood);
    }
  }
});
