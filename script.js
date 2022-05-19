var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function random(min, max) {
	return min + Math.floor(Math.random() * max);
}

function setRandomGradient() {
	var c1 = random(0, Math.pow(2, 24)).toString(16);
	var c2 = random(0, Math.pow(2, 24)).toString(16);

	body.style.background = 
	"linear-gradient(to right, #" 
	+ c1 
	+ ", #" 
	+ c2 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);