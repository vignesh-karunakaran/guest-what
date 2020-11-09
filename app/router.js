import EmberRouter from '@ember/routing/router';
import config from 'guess-what/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('hostgame');
  this.route('playgame');
  this.route('gameconsole');
});
