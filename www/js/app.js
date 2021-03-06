// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
        host: '0',
        question: '0',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});


function changeColor(colors, time) {
    /* Params:
     * selector: string,
     * colors: array of color strings,
     * every: integer (in mili-seconds)
     */
    com1 = ""
    var curCol = 0,
        timer = setInterval(function () {
            if (curCol === colors.length) curCol = 0;
            $$("body").css("background-color", colors[curCol]);
            $$(".page-content").css("background-color", colors[curCol]);
            curCol++;
        }, time);
}

window.onload = function(){
    changeColor(["green", "yellow", "blue", "orange"],1000);
}
