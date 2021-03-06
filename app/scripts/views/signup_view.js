(function() {

  App.Views.Signup = Parse.View.extend({

    tagName: 'div',
    className: 'signupArea',

    events: {
      'submit #signUp': 'signingUp'
    },

    template: _.template($('#signupForm').html()),

    initialize: function() {
      this.render();

      $('#blogPosts').html(this.$el);

    },

    render: function() {

      this.$el.html(this.template);

    },

    signingUp: function (e) {
      e.preventDefault();

      var person = new Parse.User({

        username: $('#username').val(),
        password: $('#password').val()
      });

      console.log(person);


      person.signUp();

      App.router.navigate('', {trigger: true});

    }



  });



}());
