import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  didRender() {
    var lat = this.latLong[0];
    var lng = this.latLong[1];
    var map = this.get('map');
    var container = this.$('.neighborhood-map')[0];
    var options = {
      center: this.get('map').center(lat, lng),
      zoom: 15
    };
    map.findMap(container, options);
  },
});
