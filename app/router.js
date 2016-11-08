import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('results', {path: '/results/:state/:city/:street'});
  this.route('demographic', {path: '/demographic/:zip'});
});

export default Router;
