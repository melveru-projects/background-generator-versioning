var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("genNew");

// console.log(color1.value);

 function setDefaultColorInPicker() {
 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
 	h3.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ");";
 }	

function setGradient() {
		body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
		random.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

		h3.textContent = body.style.background + ";";
}

function randomColorGen() {
	var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
	return newColor;
}

function randomGradient() {
	color1.value = randomColorGen();
	color2.value = randomColorGen();
	setGradient();
}

function copyColorCode() {
	const copyCode = document.querySelector("h3").innerText;
	console.log('before', copyCode);
	copyCode.select();
	document.execCommand("copyCode");
}

// document.querySelector('h3').addEventListener('click', async event => {
//   if (!navigator.clipboard) {
//     // Clipboard API not available
//     return
//   }
//   const code = event.target.innerText
//   try {
//     await navigator.clipboard.writeText(code)
//     event.target.textContent = 'Copied: ' + code;
//   } catch (err) {
//     console.error('Failed to copy!', err)
//   }
// })



color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomGradient);
//h3.addEventListener("click", copyColorCode);
setDefaultColorInPicker();