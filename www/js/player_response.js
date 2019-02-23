$$(document).on('page:init', '.page[data-name="player_response"]', function (e) {



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

function correcTranscripts()
{

}