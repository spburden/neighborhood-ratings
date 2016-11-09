import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    tractLookup() {
      var params = {
        tract: this.get('tract')
      };
      this.sendAction('tractLookup', params);
    }
  }
});
