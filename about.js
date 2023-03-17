console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
		alert ("Your form has been submitted successfully");
}

function alertcat(evt) {
	evt.preventDefault();
		alert("You are the Bees Knees, wrapped inside the Cats Pajamas. A true humdinger with moxie! This ginger cat below agrees.");
}

let form = document.querySelector('#contact');
let cat = document.getElementById("cat")

form.addEventListener('submit', handleSubmit);
cat.addEventListener("mouseover", alertcat);