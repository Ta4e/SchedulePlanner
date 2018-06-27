let user1 = new user('Stanislav','Smirnov','Nikolaevich','admin','admin');
let u1Day = [11, 15, 16];
let user2 = new user('Evgenia', 'Kozhukhova', 'Aleksandrovna', 'example', 'example');
let u2Day = [11, '06', 17];
let sample = ({
	'.calCell':'hover',
	'color': 'goldenrod'
})
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
//Jquery starts from here
//.calCell dynamic highlight START
$('#u1').mouseover(function(){
	let $a = eval(getNum(u1Day.length));
  	$a.css('color', 'goldenrod');
});
$('#u1').mouseout(function(){
	$('.calCell').css('color', 'khaki');
	getMagic();
});				
function getMagic() {
	$('.calCell').hover(function(){
		//:hover color
  		$(this).css("color", 'goldenrod');
	}, function () {
  		//not :hover color
  	$(this).css("color", 'khaki');
	});
}
//.calCell dynamic highlight END
//Jquery over here
}
function getNum(num) {
		let localCount = 0;
		let pieceRght = (" +')");
		let result = ("$('.calCell:contains('+ ");
	for (let i = 0; i < num; i++) {
		localCount = i;
			function localLft(numLft) {
				if (numLft > 0) {
					lft = (".calCell:contains('+ ");
				} else {
					lft = "";
				}
				return lft;
			}
			function localRght (numRght) {
				if (numRght == (num - 1)) {
					rght = (pieceRght + ("');"));
				} else {
					rght = (pieceRght + (","));	
				}
				return rght;
			}
		result += (localLft(i) + u1Day[i] + localRght(i));
	}
return result;
	// $('.calCell:contains('+ 11 +'),.calCell:contains('+ 15 +'),.calCell:contains('+ 16 +')'); //Try this to look at correct value
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