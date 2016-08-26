import Ember from 'ember';

export default Ember.Service.extend({
  user: null,
  setUser(user) {
    console.log("Setting User");
    this.set('user', user);
  }
});
