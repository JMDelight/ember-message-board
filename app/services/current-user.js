import Ember from 'ember';

export default Ember.Service.extend({
  loggedInUser: null,
  setUser(user) {
    console.log("Setting User");
    this.set('loggedInUser', user);
  }
});
