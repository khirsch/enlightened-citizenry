import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function() {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=' + key + '&per_page=50';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
   });
  }
});
