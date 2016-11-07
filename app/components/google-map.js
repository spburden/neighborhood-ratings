import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap() {
      var map = this.get('map');
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(45.521121, -122.678077),
        zoom: 15
      };
      map.findMap(container, options);
      //map.loadGeoJson('../portland.geojson'); //check this, must be inside dist
    },
    goToNeighborhood(neighborhood) {
      var map = this.get('map');
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(neighborhood.data.latitude, neighborhood.data.longitude),
        zoom: 15
      };
      map.findMap(container, options);
    }
  }
});
