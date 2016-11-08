import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url =  'http://api.walkscore.com/score?format=json&lat='+ params.lat + '&lon=' + params.long + '&wsapikey=b54d7a1a14b06657d6ecd2bc9fe8f2ed';
    return Ember.$.getJSON(url).then(function(responseJSON){
      console.log(responseJSON);
     return Ember.RSVP.hash({
      lat: params.lat,
      long: params.long,
      name: params.name,
    });
  },
});
  // walkscore(params) {
  //   console.log(params);
  //   var url =  'http://api.walkscore.com/score?format=json&lat='+ params[0] + '&lon=' + params[1] + '&wsapikey=b54d7a1a14b06657d6ecd2bc9fe8f2ed';
  //   return Ember.$.getJSON(url).then(function(responseJSON){
  //     console.log(responseJSON);
  //     //return responseJSON.results;
  //   });
  // },
