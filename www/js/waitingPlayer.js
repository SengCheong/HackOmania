
$$(document).on('page:init', '.page[data-name="waitingPlayer"]', function (e) {
  // Do something here when page loaded and initialized

  firebase.initializeApp(config);
  var ref = firebase.database().ref("session");
  var childData;
  var count;
  var host = 0;
  ref.once("value", function(snapshot) {
      childData = snapshot.val();
      if(childData != null){
        count = Object.keys(childData).length;
      }
      if(count!=4){
        ref.push().set({
            username: "temp1"
        });
      }

      if(count!=0){
        var database = firebase.database().ref("startgame");
        database.push().set({
          startGame: "1"
        });

        app.data.host = "1";
      }

      var test = app.data.host;

  });

  var test = firebase.database().ref("startgame");
  test.on('value', function(snapshot) {
      childData = snapshot.val();
      if(childData != null){
         //Change page
         var test = app.data.host;
         app.data.question = "1";
         URL = "/hostgamepage/";
         //this.router.navigate(['/hostgamepage/']);
         //mainView.router.navigate(URL);
         //mainView.router.loadPage(URL);
         //$$('#testBtn').click();
         if(test !== 1)
         {
            mainView.router.navigate("/player_response/");
            //mainView.router.navigate("/bidding/");

         }
      }else{
        console.log("empty")
      }
  });

  /*ref.remove();*/


})
