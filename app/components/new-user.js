import Ember from 'ember';

export default Ember.Component.extend({
  addNewUser: false,
  actions: {
    userFormShow() {
      this.set('addNewUser', true);
    },
    saveUser() {
      var nameTaken = false;
      var params = {
        userName : this.get("userName"),
        password : this.get("password")
      };
      this.get('users').forEach(function(user) {
        console.log(user.get('userName'));
        if(params.userName === user.get('userName')) {
          nameTaken = true;
          console.log('hi there!');
        }
      });
      if (!nameTaken) {
        this.set('addNewUser', false);
        this.sendAction("saveUser", params);
      } else {
        alert("That name is already taken.");
      }
    }
  }
});
