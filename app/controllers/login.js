import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  toast: Ember.inject.service(),

  actions: {
    authenticate: function(credentials) {
      var authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator, credentials)
        .then(()=>{
            this.get('toast').info('Success');
        })
        .catch(()=>{
        //.catch((reason)=>{
          this.get('toast').warning('incorrect email or password');
        //this.set('errorMessage', [{detail: "incorrect email or password"}]);
      });
    }
  }
});
