import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,

  findMap(container, options) {
    return new this.googleMaps.Map(container, options);
  },
  center(latitude, longitude) {
    return new this.googleMaps.LatLng(latitude, longitude);
  },
  goToNeighborhood(neighborhood) {
    console.log(neighborhood.data.latitude);
    var container = this.$('.map-display')[0];
    var lat = neighborhood.data.latitude;
    var long = neighborhood.data.longitude;
    var options = {
      center: this.center(lat, long),
      zoom: 15
    };
    console.log(container);
    this.findMap(container, options);
  }
});
