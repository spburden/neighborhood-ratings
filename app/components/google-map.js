import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {

    showMap(address) {
      var lat = address.geometry.location.lat;
      var lng = address.geometry.location.lng;
      var myLatLng = {lat: lat, lng: lng};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: '{{address.formatted_address}}'
        });
    },
  
  }
});
