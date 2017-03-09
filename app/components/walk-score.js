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
  census: Ember.computed(function() {
    var url = 'https://geocoding.geo.census.gov/geocoder/geographies/coordinates?x='+ this.latLong[1] + '&y=' + this.latLong[0] +'&benchmark=Public_AR_Census2010&vintage=Census2010_Census2010&layers=14&format=json';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      var tract = responseJSON.result.geographies["Census Blocks"]["0"].TRACT;
      // var url2 = 'http://api.census.gov/data/2015/pdb/tract?get=Tot_Population_CEN_2010,pct_Females_ACS_10_14,pct_Males_ACS_10_14,pct_College_ACS_10_14,Med_HHD_Inc_ACS_10_14,Prs_Blw_Pov_Lev_ACS_10_14&for=tract:' + tract + '&in=state:41+county:051&key=d90ad8655f9cb4d3ee0909e5831a4989a51a22ab';
      var url2 = 'http://api.census.gov/data/2015/pdb/tract?get=Tot_Population_CEN_2010,pct_Females_CEN_2010,pct_Males_CEN_2010,pct_College_ACS_09_13,Med_HHD_Inc_ACS_09_13,Prs_Blw_Pov_Lev_ACS_09_13&for=tract:' + tract + '&in=state:41+county:051&key=4dcfc26c049a8003a1b952a4ecd68b48ec553d4e';
     return Ember.$.getJSON(url2).then(function(responseJSON){
       $("#population").text(responseJSON[1][0]);
       $("#females").text(parseFloat(responseJSON[1][1]).toFixed(2));
       $("#males").text(parseFloat(responseJSON[1][2]).toFixed(2));
       $("#college").text(parseFloat(responseJSON[1][3]).toFixed(2));
       $("#median").text(responseJSON[1][4]);
       $("#poverty").text(responseJSON[1][5]);
      });
    });
  }),
});

// http://api.census.gov/data/2015/pdb/tract/variables.html

// http://api.census.gov/data/2016/pdb/tract?get=County_name,State_name,Tot_Population_CEN_2010&for=tract:20100&in=state:01+county:001&key=YOUR_KEY_GOES_HERE

// http://api.census.gov/data/2016/pdb/tract?get=County_name,State_name,Tot_Population_CEN_2010,B02003_004E&for=tract:006402&in=state:41+county:051&key=d90ad8655f9cb4d3ee0909e5831a4989a51a22ab

//variable list at http://api.census.gov/data/2016/pdb/tract/variables.html

//last test query used http://api.census.gov/data/2016/pdb/tract?get=County_name,State_name,Tot_Population_CEN_2010,College_ACS_10_14,Med_HHD_Inc_ACS_10_14,NON_US_Cit_ACS_10_14&for=tract:006402&in=state:41+county:051&key=d90ad8655f9cb4d3ee0909e5831a4989a51a22ab

//back up demographic neighborhoods maps located at https://www.portlandmaps.com/detail/neighborhood/NORTHWEST-DISTRICT-NORTHWEST-INDUSTRIAL/45_did/

//names of all portland neighborhoods located at https://www.portlandoregon.gov/oni/article/214828

//map of all census tract numbers for portland located at http://www2.census.gov/geo/maps/dc10map/tract/st41_or/c41051_multnomah/DC10CT_C41051_001.pdf

//geocoding info for one location in portland located at https://geocoding.geo.census.gov/geocoder/geographies/address?street=912+SW+Coronado+St&city=Portland&state=OR&zip=97219&benchmark=8&vintage=8
