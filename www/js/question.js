
$$(document).on('page:init', '.page[data-name="playerGamePage"]', function (e) {
  // Do something here when page loaded and initialized
  console.log("Here")
  firebase.initializeApp(config);
  var ref = firebase.database().ref("Question");
  var childData;
  var count;
  ref.once("value", function(snapshot) {
      childData = snapshot.val();
      question = Object.keys(childData)[0];
      console.log(question);
      answer = childData[question];
      console.log(answer);

      var host = app.data.host;
      var host = 0;
      console.log(host);
      //Player
      if(host==0){
        var questionDiv = document.getElementById("questionHolder")
        questionDiv.innerHTML = question;
      }
      //host

  });
});
