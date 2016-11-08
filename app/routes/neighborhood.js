import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var neighborhood = this.store.query('neighborhood', {
      orderBy: 'name',
      equalTo: params.name
    });
    return neighborhood;
  }
});
  // walkscore(params) {
  //   console.log(params);
  //   var url =  'http://api.walkscore.com/score?format=json&lat='+ params[0] + '&lon=' + params[1] + '&wsapikey=b54d7a1a14b06657d6ecd2bc9fe8f2ed';
  //   return Ember.$.getJSON(url).then(function(responseJSON){
  //     console.log(responseJSON);
  //     //return responseJSON.results;
  //   });
  // },
