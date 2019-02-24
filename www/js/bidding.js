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

var creditBal = 0; //For the Demo
creditBal += 3; 

var creditUsed = 0;
var choice1 = 0;
var choice2 = 0;
var choice3 = 0;
var choice4 = 0;

function placeBid(choice) {
       if(choice == "1"){
           if(creditBal > 0) {
               var choice1cur = parseInt(document.getElementById("bid1").innerHTML)+1;
               document.getElementById("bid1").innerHTML = choice1cur;
               choice1 = choice1cur;
               creditUsed = creditUsed+1;
               creditBal = creditBal - 1;
           }else{
                var choice1cur = parseInt(document.getElementById("bid1").innerHTML);
                creditBal = creditBal + choice1cur;
                creditUsed = creditUsed - choice1cur;
                choice1cur = 0;
                document.getElementById("bid1").innerHTML = choice1 = choice1cur;
           }
              console.log("Balance: "+creditBal);
               console.log("Used: "+creditUsed);
       }else if (choice == "2") {
           if(creditBal > 0) {
               var choice2cur = parseInt(document.getElementById("bid2").innerHTML)+1;
               document.getElementById("bid2").innerHTML = choice2cur;
               choice2 = choice2cur;
               creditUsed = creditUsed+1;
               creditBal = creditBal - 1;
           }else{
                var choice2cur = parseInt(document.getElementById("bid2").innerHTML);
                creditBal = creditBal + choice2cur;
                creditUsed = creditUsed - choice2cur;
                choice2cur = 0;
                document.getElementById("bid2").innerHTML = choice2 = choice2cur;
           }
              console.log("Balance: "+creditBal);
               console.log("Used: "+creditUsed);
       }else if (choice == "3") {
           if(creditBal > 0) {
               var choice3cur = parseInt(document.getElementById("bid3").innerHTML)+1;
               document.getElementById("bid3").innerHTML = choice3cur;
               choice3 = choice3cur;
               creditUsed = creditUsed+1;
               creditBal = creditBal - 1;
           }else{
                var choice3cur = parseInt(document.getElementById("bid3").innerHTML);
                creditBal = creditBal + choice3cur;
                creditUsed = creditUsed - choice3cur;
                choice3cur = 0;
                document.getElementById("bid3").innerHTML = choice3 = choice3cur;
           }
              console.log("Balance: "+creditBal);
               console.log("Used: "+creditUsed);
       }else if (choice == "4") {
            if(creditBal > 0) {
               var choice4cur = parseInt(document.getElementById("bid4").innerHTML)+1;
               document.getElementById("bid4").innerHTML = choice4cur;
               choice4 = choice4cur;
               creditUsed = creditUsed+1;
               creditBal = creditBal - 1;
           }else{
                var choice4cur = parseInt(document.getElementById("bid4").innerHTML);
                creditBal = creditBal + choice4cur;
                creditUsed = creditUsed - choice4cur;
                choice4cur = 0;
                document.getElementById("bid4").innerHTML = choice4 = choice4cur;
           }
              console.log("Balance: "+creditBal);
               console.log("Used: "+creditUsed);
       }else{
           console.log("Error");
       }       
   }
