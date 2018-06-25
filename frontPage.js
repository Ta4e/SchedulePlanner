let user1 = new user('Stanislav','Smirnov','Nikolaevich','admin','admin', 14);
let user2 = new user('Evgenia', 'Kozhukhova', 'Aleksandrovna', 'example', 'example', 12);
//LoginBox
window.onload = function() {
	let count = 0;
function logBox() {
	let countIn = count;
	let header = document.getElementById('headerBox');
	let diva = document.createElement("div");
	let par = document.createElement("p");
	let aPar = document.createElement("p");
	let	loginText = document.createTextNode("  :Log");
	let passText = document.createTextNode("  :Pas");
	let loginBox = document.createElement("input");
	let passBox = document.createElement("input");
	let submit = document.createElement("input");
		submit.setAttribute("type", "submit");
		submit.setAttribute("value", "Send");
		submit.id = 'remover';
	if (count == 0) {
		count++;
		par.appendChild(loginBox);
		par.appendChild(loginText);
		aPar.appendChild(passBox);
		aPar.appendChild(passText);
		par.appendChild(aPar);
		par.appendChild(submit);
		diva.appendChild(par);
		header.appendChild(diva);
	let remover = document.getElementById('remover');
	remover.addEventListener("click", logBoxCut);
	}
	function logBoxCut() { 
		count--;
		let remover = document.getElementById('remover');
		remover.addEventListener("click", header.removeChild(diva));
		header.removeChild(header.diva);
	}
}
let logInBox = document.getElementById("login");
logInBox.addEventListener("click", logBox);
//Crew list mouseOver listener
let elem1 = document.getElementById('u1'); 
let getNum = document.getElementById("u1").value = "14";
//Ajax starts here
$('#u1').mouseover(function(){
	$('.calCell:contains("14")').css('color', 'goldenrod');
    // alert('work u1');
});
$('#u1').mouseout(function(){
	$('.calCell').css('color', 'khaki');
    // alert('work u1');
});
//Ajax over here
}


// elem1.addEventListener("mouseover", highlight);
// 	function highlight() {
// 		// document.getElementById("u1").value = "14".style.color="#00ff00";
// 		alert(getNum);
// 	}
//Crew objects
function user(name, midleName,secondName, login, password, day) {
	this.name = name;
	this.midleName = midleName;
	this.secondName = secondName;
	this.login = login;
	this.password = password;
	this.day = day;
}
