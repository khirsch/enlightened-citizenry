import Ember from 'ember';


export default Ember.Component.extend({
  h2Clicked: false,

  actions: {
    committeeLookup() {
      this.set('h2Clicked', true);
    }
  }
});
