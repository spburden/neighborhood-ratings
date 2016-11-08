import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
   var url = 'http://api.census.gov/data/2016/pdb/tract?get=County_name,State_name,Tot_Population_CEN_2010&for=tract:006402&in=state:41+county:051&key=d90ad8655f9cb4d3ee0909e5831a4989a51a22ab' ;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});


// http://api.census.gov/data/2016/pdb/tract?get=County_name,State_name,Tot_Population_CEN_2010&for=tract:20100&in=state:01+county:001&key=YOUR_KEY_GOES_HERE
