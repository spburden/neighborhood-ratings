// import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      neighborhood: this.store.findAll('neighborhood'),
      // weather: function() {
      //   var apiURL='http://api.wunderground.com/api/d803e9da0f159798/hourly/q/OR/Portland.json'
      //   return Ember.$.getJSON(apiURL).then(function(responseJSON) {
      //   console.log(responseJSON)
      //   return responseJSON.results;
      //   });
      // }
    });
  },

  actions: {
    lookup(params) {
      this.transitionTo('results', params);
    },
    findNeighborhood(neighborhood, lat, lng) {
      this.transitionTo('neighborhood', neighborhood, lat, lng);
    },
    saveNeighborhood(params) {
      console.log(params);
      this.store.createRecord('neighborhood', params).save();
      //this.transitionTo('index');

    },
    getWeather() {
      console.log("hello");
      var url='http://api.wunderground.com/api/ea315424a4da9d84/conditions/q/OR/Portland.json';
      console.log("yo");
      return Ember.$.getJSON(url).then(function(responseJSON) {
        console.log(responseJSON);
        return responseJSON;
      });
    }
  }
});
