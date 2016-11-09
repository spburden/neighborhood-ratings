import Ember from 'ember';

export default Ember.Component.extend({
  walk: Ember.computed(function() {
    var url = 'http://api.walkscore.com/score?format=json&lat=' + this.latLong[0] + '&lon=' + this.latLong[1] + '&wsapikey=b54d7a1a14b06657d6ecd2bc9fe8f2ed';
     return Ember.$.getJSON(url).then(function(responseJSON) {
       $("#walkScore").text(responseJSON.walkscore);
       $("#walkDescription").text(responseJSON.description);
     });
  }),
  transit: Ember.computed(function() {
    var url = 'http://transit.walkscore.com/transit/score/?lat=' + this.latLong[0] + '&lon=' + this.latLong[1] + '&city=Portland&state=OR&wsapikey=b54d7a1a14b06657d6ecd2bc9fe8f2ed';
     return Ember.$.getJSON(url).then(function(responseJSON) {
       $("#transitScore").text(responseJSON.transit_score);
       $("#transitDescription").text(responseJSON.description);
       $("#transitSummary").text(responseJSON.summary);
     });
  }),
  stolen: Ember.computed(function() {
  var url = 'https://bikeindex.org:443/api/v3/search/count?location='+ this.latLong[0] + '%2C' + this.latLong[1] +'&distance=1&stolenness=proximity';
  return Ember.$.getJSON(url).then(function(responseJSON) {
    $("#stolen").text(responseJSON.proximity);
  });
}),
});
