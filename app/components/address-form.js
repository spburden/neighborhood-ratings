import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    lookup() {
      var params = {
        street: this.get('street'),
        city: this.get('city'),
        state: this.get('state')
      };
      this.sendAction('lookup', params);
    }
  }
});
