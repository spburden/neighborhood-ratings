import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),
  component: this,
  didRender() {
    var that = this;
    var map = this.get('map');
    var container = this.$('.map-display')[0];
    this.$('.btn').removeClass('active');
    this.$('.btn-datamap').addClass('active');
    // Set a blank infoWindow to be used for each to state on click
    var infoWindow = new google.maps.InfoWindow({
      content: ""
    });

    var options = {
      center: map.center(45.522462, -122.665674),
      zoom: 11,
      styles: [{"featureType":"all","stylers":[{"saturation":0},{"hue":"#e7ecf0"}]},{"featureType":"road","stylers":[{"saturation":-70}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"simplified"},{"saturation":-60}]}],
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.TERRAIN]
      }
    };
    var fullMap = map.findMap(container, options);

    // Create the state data layer and load the GeoJson Data
    var neighborhood = new google.maps.Data();

    var sendFindAction = function(neighborhood, lat, lng) {
      // that.sendAction('findNeighborhood', params);
      that.sendAction('findNeighborhood', neighborhood, lat, lng);
    }
    neighborhood.loadGeoJson('../portland.geojson');

    // Add mouseover and mouse out styling for the GeoJSON State data
    neighborhood.addListener('mouseover', function(e) {
      neighborhood.overrideStyle(e.feature, {
        strokeColor: 'green',
        strokeWeight: 2,
        zIndex: 2
      });
      // console.log(e.feature.getProperty('label'));
      infoWindow.setContent('<div style="line-height:1.00;overflow:hidden;white-space:nowrap;">' +
      e.feature.getProperty('label') + '</div>');

      var anchor = new google.maps.MVCObject();
      anchor.set("position", e.latLng);
      infoWindow.open(fullMap, anchor);
    });

    neighborhood.addListener('mouseout', function(e) {
      neighborhood.revertStyle();
    });

    // Adds an info window on click with in a state that includes the state name and COLI
    neighborhood.addListener('click', function(e) {
      var options = {
        center: map.center(e.latLng.lat(), e.latLng.lng()),
        zoom: 14
      };
      var neighborhoodToFind = e.feature.getProperty('label');
      var neighborhoodLat = e.latLng.lat();
      var neighborhoodLong = e.latLng.lng();
      sendFindAction(neighborhoodToFind, neighborhoodLat, neighborhoodLong);
      var fullMap = map.findMap(container, options);
      neighborhood.setMap(fullMap);
    });

    // Final step here sets the stateLayer GeoJSON data onto the map
    neighborhood.setMap(fullMap);
  },

  actions: {
    showMap() {
      var map = this.get('map');
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(45.521121, -122.678077),
        zoom: 15
      };

      map.findMap(container, options);
    },
    goToNeighborhood(neighborhood) {
      var map = this.get('map');
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(neighborhood.data.latitude, neighborhood.data.longitude),
        zoom: 15
      };
      map.findMap(container, options);
    },
    goToLatLng(lat, lng) {
      var map = this.get('map');
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(lat, lng),
        zoom: 15
      };
      map.findMap(container, options);
    },
  }
});
