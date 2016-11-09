import Ember from 'ember';

export default Ember.Component.extend({
  walk: Ember.computed(function() {
    var url = 'http://api.walkscore.com/score?format=json&lat=' + this.latLong[0] + '&lon=' + this.latLong[1] + '&wsapikey=b54d7a1a14b06657d6ecd2bc9fe8f2ed';
     return Ember.$.getJSON(url).then(function(responseJSON) {
       console.log(responseJSON.walkscore);
       $("#walkScore").text(responseJSON.walkscore);
       $("#walkDescription").text(responseJSON.description);
      //  var score = responseJSON.walkscore;
      //  return score;
      //  return responseJSON;
     });
  }),
});
