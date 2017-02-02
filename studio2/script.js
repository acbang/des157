// DOM Content Loading checker
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // Process form once form is submitted
    document.f.onsubmit = processForm;
    document.f.onreset = clearForm;

    // Broccoli (8-Bit Version) by Ryan CC (original by D.R.A.M. and Lil Yachty)
	var mySong = new Audio('media/broccoli.mp3');

	function processForm() {
		// Store form inputs
		var field1 = document.f.field1.value;
		var field2 = document.f.field2.value;
		var field3 = document.f.field3.value;
		var field4 = document.f.field4.value;
		var field5 = document.f.field5.value;

		if (field1 == "", field2 == "", field3 == "", field4 == "", field5 == "") {
			alert("You gotta fill this MADLIB out fully thoooo");
			return false;
		}

		var myMsg = document.getElementById("myMsg");
		var header = document.getElementById("header");

		header.innerHTML = "<h1> BROCCOLI!!!!!!!111 <h1>"
		myMsg.innerHTML = "in the middle of " + field1 + ", " + field2 + " get off of me" + "<br>in the cut i'm " + field3 + " up my broccoli" + "<br>yeah i know " + field4 + " fond of me" + "<br>all " + field4 + " wanna do is " + field5 + " that broccoli";

		// Change css elements after submitting
		document.body.style.backgroundImage = "url('media/broccoli.gif')";
		document.body.style.fontFamily = "cursive";

		// Play song
		mySong.play();

		// Prevent from refreshing
		return false;
	}

	// Form reset
	function clearForm() {
		var myMsg = document.getElementById("myMsg");
		myMsg.innerHTML = "";
		myMsg.style.display = "none";
	}
});