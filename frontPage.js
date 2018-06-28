//console.log(getNum(u1Day.length));

let user1 = new user('Stanislav','Smirnov','Nikolaevich','admin','admin');
let u1Day = ['01', '03', 11, '07', 16];
let user2 = new user('Evgenia', 'Kozhukhova', 'Aleksandrovna', 'example', 'example');
let u2Day = [11, '06', 17];
let sample = ({
	'.calCell':'hover',
	'color': 'goldenrod'
})
//LoginBox
window.onload = function() {
	let crewListCount = 0;
$('#crewListHead').click(function() {
if (crewListCount == 0) {
	crewListCount++;
	$("#crewListPersona").hide(300);
} else {
	crewListCount--;
	$("#crewListPersona").show(300);
}
   // $('#crewListPersona').animate({
   //     // 'backgroundColor' : $(this).css('background-color'),
   //     'height' : $(this).css('height'),
   //     // 'width' : $(this).css('width'),
   //     // 'border-radius' : $(this).css('border-radius'),
   //     // 'border-left-width' : $(this).css('border-left-width'),
   //     // 'border-right-width' : $(this).css('border-right-width'),
   //     // 'border-bottom-width' : $(this).css('border-bottom-width'),
   //     // 'border-left-style' : $(this).css('border-left-style'),
   //     // 'border-right-style' : $(this).css('border-right-style'),
   //     // 'border-bottom-style' : $(this).css('border-bottom-style'),
   //     // 'border-left-color' : $(this).css('border-left-color'),
   //     // 'border-right-color' : $(this).css('border-right-color'),
   //     // 'border-bottom-color' : $(this).css('border-bottom-color')
   // }, 2000)
});
	let upperCount = 0;
$('#pName').click(function() {
if (upperCount == 0) {
	upperCount++;
	$("#upper").hide(300);
} else {
	upperCount--;
	$("#upper").show(300);
}
});
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
			function localZeroFinder(number) {
				switch (number) {
					case '01':
						return "'01'";
					break;
					case '02':
						return "'02'";
					break;
					case '03':
						return "'03'";
					break;
					case '04':
						return "'04'";
					break;
					case '05':
						return "'05'";
					break;
					case '06':
						return "'06'";
					break;
					case '07':
						return "'07'";
					break;
					case '08':
						return "'08'";
					break;
					case '09':
						return "'09'";
					break;
				}
				return number;
			}
		result += (localLft(i) + localZeroFinder(u1Day[i]) + localRght(i));
	}
return result;
}
//Crew objects
function user(name, midleName,secondName, login, password, day) {
	this.name = name;
	this.midleName = midleName;
	this.secondName = secondName;
	this.login = login;
	this.password = password;
	this.day = day;
}
//add to user.day u1Day array