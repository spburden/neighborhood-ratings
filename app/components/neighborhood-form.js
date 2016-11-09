import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNeighborhood() {
      var params = {
        name: this.get('name')
      };
      this.sendAction('saveNeighborhood', params);
      this.set('name', '');
    }
  }
});
