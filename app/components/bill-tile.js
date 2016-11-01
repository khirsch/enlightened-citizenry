import Ember from 'ember';

export default Ember.Component.extend({
  showBillInfo: false,
  actions: {
    billInfoShow() {
      this.set('showBillInfo', true);
    },
    billInfoHide() {
      this.set('showBillInfo', false);
    }
  }
});
