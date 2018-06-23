//LoginBox
window.onload = function() {
function logBox() {
	let header = document.getElementById('headerBox');
	let diva = document.createElement("div");
	let par = document.createElement("p");
	let aPar = document.createElement("p");
	let	loginText = document.createTextNode("Login: ");
	let passText = document.createTextNode("Password: ");
	let loginBox = document.createElement("input");
	let passBox = document.createElement("input");
	let submit = document.createElement("input");
		submit.setAttribute("type", "submit");
		submit.setAttribute("value", "Send");
		submit.id = 'remover';
	par.appendChild(loginText);
	par.appendChild(loginBox);
	aPar.appendChild(passText);
	aPar.appendChild(passBox);
	par.appendChild(aPar);
	par.appendChild(submit);
	diva.appendChild(par);
	header.appendChild(diva);
let remover = document.getElementById('remover');
remover.addEventListener("click", logBoxCut);
	function logBoxCut() { 
		let remover = document.getElementById('remover');
		remover.addEventListener("click", header.removeChild(diva));
		header.removeChild(header.lastNode);
	}
}
let logInBox = document.getElementById("login");
logInBox.addEventListener("click", logBox);
};