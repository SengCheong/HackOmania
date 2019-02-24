$$(document).on('page:init', '.page[data-name="player-response"]', function (e) {
  firebase.initializeApp(config);
  console.log("Accessing question bank")
  var ref = firebase.database().ref("Question");
  var childData;
  var count;
  ref.once("value", function(snapshot) {
      childData = snapshot.val();
      question = Object.keys(childData)[0];
      console.log(question);
      answer = childData[question];
      console.log(answer);

      var host = 0;
      console.log(host);
      //Host
      var questionDiv = document.getElementById("questionHolder")
      questionDiv.innerHTML = question;
      app.data.question++;
      if(host==1){
        var ansDiv = document.getElementById("ansHolder")
        ansDiv.innerHTML = answer;
      }
      else
      {

      }

  });

})

function transcribe()
{
	navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
		const mediaRecorder = new MediaRecorder(stream);
		mediaRecorder.start();

		const audioChunks = [];
		mediaRecorder.addEventListener("dataavailable", event => {
			audioChunks.push(event.data);
		});

		mediaRecorder.addEventListener("stop", () => {
			const audioBlob = new Blob(audioChunks);

			var formData  = new FormData();

			formData.append("recording", audioBlob);
		    //formData.append('recording', new Blob(audio));

		    const request = async () => {
        	const response = await fetch(`http://localhost:8080/hackomania/transcribe`, {
        		method: 'post',
        		contentType : 'multipart/form-data',
                processData: false, //New
                body: formData
            });
        	const result = await response.text();
        	console.log(result);
        	document.getElementById("txtTranscribed").value = result;
        }

        request();

    });


	setTimeout(() => {
			mediaRecorder.stop();
		}, 5000);

	});

}

function correctTranscripts()
{
	document.getElementById("txtTranscribed").removeAttribute("disabled");
}

function submitAnswer()
{
    console.log("Submitting answer");
	var answer = "question" + app.data.question
	var database = firebase.database().ref(answer);
    database.push().set({
    	answer: document.getElementById("txtTranscribed").value
    });
    console.log("Submitted answer");
    mainView.router.navigate("/waitingAnswer/");
}