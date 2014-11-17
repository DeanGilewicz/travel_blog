Parse.initialize("CMngAvUucHZIeKalDNfSr9RH0S82H5vSiLMHDc7n", "vRKH6Vuzsq2zAbTzhqcfOtZAaRfD0larKCMLKF0c");

(function() {

  //create obj to store current user - don't need here added it to App.updateUser function
  // App.user = Parse.User.current();

  //create a new instance of our collection
  App.posts = new App.Collections.Posts();

  //fetch server-side posts
  App.posts.fetch().done(function() {

    App.router = new App.Routers.AppRouter();
    Parse.history.start();

  });

  // Log Out
  $('#logOut').on('click', function (e) {
    e.preventDefault();
    Parse.User.logOut();
    App.updateUser();
    App.router.navigate('', {trigger: true});
  });


  // Update User
  App.updateUser = function (){
    App.user = Parse.User.current();
    var currentUser;
    if (App.user == null){
      currentUser = '';
    } else {
      currentUser = 'Welcome ' + App.user.attributes.username;
    }
    $('#welcomeText').html(currentUser);
  };
  App.updateUser();

}());
