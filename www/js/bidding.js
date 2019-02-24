$$(document).on('page:init', '.page[data-name="bidding-123"]', function (e) {
	console.log("test");			
	var temp = "question" + app.data.question;
	console.log(temp);
	var db = firebase.database().ref(temp);
	db.once("value", function(snapshot) {
      childData = snapshot.val();
      console.log(childData);
 	    count = Object.keys(childData).length;
      	if(count > 4)
      	{
      		
      	}
    });
});