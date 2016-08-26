import Ember from 'ember';

export default Ember.Service.extend({
  loggedInUser: null,
  abc: [1,2,3],
  setUser(user) {
    console.log("Setting User");
    this.set('loggedInUser', user);
  }
});
