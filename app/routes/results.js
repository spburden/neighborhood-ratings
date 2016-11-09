import Ember from 'ember';


export default Ember.Route.extend({
  model: function(params) {
   var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + params.street + ',' + params.city + ',' + params.state + '&key=AIzaSyBBx-rFhBIueULYnPzaI3sg8RGpwyKO9bQ';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON.results);
     return responseJSON.results;
   });
 }

});
