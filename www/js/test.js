
window.onload = function(){
  firebase.initializeApp(config);
   var database = firebase.database().ref().child("notification");

     database.push().set({
         title: "hi",
         message: "ngsionghock",
         facebook: "1",
         twitter: "1",
         sms: "1"
     });

}
