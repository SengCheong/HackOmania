
$$(document).on('page:init', '.page[data-name="waitingAnswer"]', function (e) {
  // Do something here when page loaded and initialized
  //firebase.initializeApp(config);
  var ref = firebase.database().ref("question1");
  var childData;
  var count;
  var host = 0;
  ref.once("value", function(snapshot) {
      console.log("getting firebase data");
      childData = snapshot.val();
      if(childData != null){
        count = Object.keys(childData).length;
        console.log(count);
      }

      if(count==4){
        var database = firebase.database().ref("startbidding");
        database.push().set({
          startGame: "1"
        });

        
      }

  });

  var test = firebase.database().ref("startbidding");
  test.on('value', function(snapshot) {
      childData = snapshot.val();
      if(childData != null){
         //Change page
         console.log("Redirecting to bidding");
         mainView.router.navigate("/bidding/");
         // mainView.router.back();
         console.log("Fly");  
      }else{
        console.log("empty")
      }
  });

  /*ref.remove();*/


})
