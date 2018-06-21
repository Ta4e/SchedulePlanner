//LoginBox
window.onload = function() {
	let exist;
function logBox() {
	let header = document.getElementById('headerBox');
	let diva = document.createElement("div");
		diva.id = "diva";
	let par = document.createElement("p");
	let aPar = document.createElement("p");
	let	messageBox = document.createTextNode("Login: ");
	let messageBoxP = document.createTextNode("Password: ");
	let testButton = document.createElement("input");
	let testButtonP = document.createElement("input");
	let submit = document.createElement("input");
		submit.setAttribute("type", "submit");
		submit.setAttribute("value", "Send");
	par.appendChild(messageBox);
	par.appendChild(testButton);
	aPar.appendChild(messageBoxP);
	aPar.appendChild(testButtonP);
	par.appendChild(aPar);
	par.appendChild(submit);
	diva.appendChild(par);
	exist = diva;
	header.appendChild(diva);
}
function logBoxCut() { //does not work
	document.getElementById("diva").remove();
	let header = document.getElementById('headerBox');
	header.removeChild(exist);
}
let logInBox = document.getElementById("login");
logInBox.addEventListener("click", logBoxCut);
logInBox.addEventListener("click", logBox);
test.addEventListener("click", header.removeChild(exist));
};
//Workin on delete diva after submit press down!