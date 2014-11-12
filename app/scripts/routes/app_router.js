(function() {

  App.Routers.AppRouter = Parse.Router.extend({

    initialize: function(){
      Parse.history.start();
    },

    routes: {
      '': 'home',
      'login': 'userLogin',
      'signup': 'userSignup',
      'user' : 'userPage'

    },

    home: function() {

      // if(!App.user) {
      //   return App.router.navigate('', {trigger: true});
      // }

      new App.Views.Home({ collection: App.posts });
    },

    userLogin: function() {
      new App.Views.Login();
    },

    userSignup: function() {
      new App.Views.Signup();
    },

    userPage: function() {
      new App.Views.User({ collection: App.posts });
    }

  });



}());
