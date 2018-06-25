let user1 = new user('Stanislav','Smirnov','Nikolaevich','admin','admin');
let u1Day = ['11','5','16'];
let user2 = new user('Evgenia', 'Kozhukhova', 'Aleksandrovna', 'example', 'example');
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
//Ajax starts from here
$('#u1').mouseover(function(){
	$(getNum(u1Day.length)).css('color', 'goldenrod');
});
$('#u1').mouseout(function(){
	$('.calCell').css('color', 'khaki');
});
//Ajax over here
}
function getNum(num) {
	// alert(num);
	answer =   '.calCell:contains' + '(11)';
	return answer;
}
//Crew objects
function user(name, midleName,secondName, login, password) {
	this.name = name;
	this.midleName = midleName;
	this.secondName = secondName;
	this.login = login;
	this.password = password;
	// this.day = day;
}
//removed day from objects and from function