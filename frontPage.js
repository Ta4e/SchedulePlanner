//LoginBox
window.onload = function() {
function logBox() {
	let header = document.getElementById('headerBox');
	let par = document.createElement("p");
	let aPar = document.createElement("p");
	let	messageBox = document.createTextNode("Login: ");
	let messageBoxP = document.createTextNode("Password: ");
	let testButton = document.createElement("input");
	let testButtonP = document.createElement("input");
	let submit = document.createElement("inputTypeSubmit");
	par.appendChild(messageBox);
	par.appendChild(testButton);
	aPar.appendChild(messageBoxP);
	aPar.appendChild(testButtonP);
	par.appendChild(aPar);
	par.appendChild(submit);
	header.appendChild(par);
}
let logInBox = document.getElementById("login");
logInBox.addEventListener("click", logBox);
};