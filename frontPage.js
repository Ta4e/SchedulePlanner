let u1Activity = {
	'Day01': "Example company",
	'Day01result':"Pre-inspection meeting",
	'Day11': "Example company",
	'Day11result':"Prime audit",
	'Day14': "Example company",
	'Day14result': "Operating control",
	'Day16': "Example company",
	'Day16result': "Acceptance control"	 	 
};
let u2Activity = {};
let u3Activity = {};
let u4Activity = {};
let u5Activity = {};
//User operators START
let u1Day = ['01', 11, 14, 16];
let u2Day = ['02', 11, 17];
let u3Day = [20, '08'];
let u4Day = [22, 25, 30];
let u5Day = [];
let user1 = new user('Stanislav','Smirnov','Nikolaevich','admin','admin', dayArr(u1Day), 'Senior QC Engineer');
let user2 = new user('Evgenia', 'Kozhukhova', 'Aleksandrovna', 'example', 'example', dayArr(u2Day), 'Lead of BSSaQ');
let user3 = new user('Evgeniy', 'Abolin', 'Sergeevich', 'example', 'example', dayArr(u3Day), 'Lead of Quality Service');
let user4 = new user('Alexandr', 'Marusin', 'Nikolaevich', 'example', 'example', dayArr(u4Day), 'Middle QC Enginer Entry Control');
let user5 = new user('Dalgat', 'Gudaev', 'Muratovich', 'example', 'example', dayArr(u5Day), 'Middle QC Engineer of BBSaQ');
function dayArr(usable) {
	day = usable;
return day;
}
function user(name, midleName,secondName, login, password, day, position) {
	this.name = name;
	this.midleName = midleName;
	this.secondName = secondName;
	this.login = login;
	this.password = password;
	this.day = day;
	this.position = position;
}
//Logic for .CalCell constructor STAR
	Date.prototype.getDays = function () {
	   	let check = new Date(this.getTime());
	    check.setDate(32);
	return 32 - check.getDate();
	};

	$(function() {
			$("#outputs").on("click", function() {
				let date = new Date();
				alert(getWeekDay(date));
			});
	});

//Logic for .CalCell constructor END
//Users operators END
/**/
//Onload scripts START
window.onload = function() {
//crewList search START
$("#crewSearch").html("<input type='text' id='crewSearchBar' placeholder='Search matches..'>");
$("#crewSearchBar").keyup(function(inputSe) {
    let input, filter, crewDiv, p;
    input = document.getElementById("crewSearchBar");
    filter = input.value.toUpperCase();
    crewDiv = document.getElementById("crewListPersona");
    p = crewDiv.getElementsByTagName('p');
    	for (let i = 0; i < p.length; i++) {
    	    if (p[i].innerText.toUpperCase().indexOf(filter) > -1) {
    	        p[i].style.display = "";
    	    } else {
    	        p[i].style.display = "none";
    	    }
    	}
});
//crewList search END
$('.calCellDis').prop('disabled', true);	
//CrewList adder START
/*
There can be a code, but sompthing going wrong!! 
*/
//CrewList adder END
/**/
//.show and .hide START
$("#crewListHead").click(function() {
	$("#crewListPersona").fadeToggle(600)
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
//.show and .hide END
/**/
//.calCell dynamic highlight START
	$('.users').mouseenter(function(){
	  	let uIdFinder = this.id;
	  	let userNum = (getParse(uIdFinder));
	  		function getParse(uId) {
				let result = 0;
					for (let i = 0; i < uId.length; i++) {
						let temporaryGetParseCharAt = uId.charAt(i);
							if (isNaN(temporaryGetParseCharAt) === false) {
								result = temporaryGetParseCharAt;
							}
					}
			return result;
			} 
			function uDayNumberConstructor(num) {
				let interimRes = ("u" + num + "Day");
				let results = eval(interimRes);
				return results;
			}
		let interrimResForGetNum = eval(uDayNumberConstructor(userNum));
		let $calCellHighLight = eval(getNum(interrimResForGetNum));
	  	$calCellHighLight.css('color', 'goldenrod');	
	});
	$('.users').mouseout(function(){
		$('.calCell').css('color', 'khaki');
		removeHighLightFromCell();
	});				
	function removeHighLightFromCell() {
		$('.calCell').hover(function(){
			//:hover color on
	  		$(this).css("color", 'goldenrod');
		}, function () {
	  		//:hover color off
	  	$(this).css("color", 'khaki');
		});
	}
//.calCell dynamic highlight END
/**/
//From SL START
	$(function() {
		$("#add").on("click", function() {
			let val = $("#upperAdder").val();
			if (val !== '') {
				let elem = $("<li></li>").text(val);
				$(elem).append("<button class='rem'>X</button>");
				$("#newList").append(elem);
				$("input").val("");
				$(".rem").on("click", function() {
					$(this).parent().remove();
				});
			}
		});
	});
//From SL END
//Onload scripts END
/**/
//Function for dynamicH Highlight START
	function getNum(uArr) {
	let num = uArr.length;
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
	
			result += (localLft(i) + localZeroFinder(uArr[i]) + localRght(i));
		}
	return result;
	}
}
//Function for dynamicH Highlight END
/*
dynamic calCell add START
*/
function getWeekDay(date) {
    let nDays = date.getDate();
    let day = (date.getDay() + 1);
    return nDays - day;
}
function switchWday(day) {
	switch (day) {
		case 'Sun':
			return "Mon";
		break;
		case 'Mon':
			return "Tue";
		break;
		case 'Tue':
			return "Wed";
		break;
		case 'Wed':
			return "Thu";
		break;
		case 'Thu':
			return "Fri";
		break;
		case 'Fri':
			return "Sat";
		break;
		case 'Sat':
			return "Sun";
		break;
				}
	}
$(function() {
	let wCount = 1;
	let wDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	let table = $("<table border ='2'></table>").attr('id', 'calCellTab');
		let thead = $("<thead></thead>").attr('id', 'calCellTabHead');
		let tbody = $("<tbody></tbody>").attr('id', 'calCellTabBody');
			let trBody = $("<tr></tr>").attr("id", "calCellTabTrBody"+ wCount +"");
	function getTr() {
		trBody = $("<tr></tr>").attr("id", "calCellTabTrBody"+ wCount +"");
		return trBody;
	}
	$('#callBox').append(table);
	$("#calCellTab").append(thead);
	$("#calCellTab").append(tbody);
	$("#calCellTabBody").append(trBody);
	for (let i = 0; i < 7; i++) {
		let day = wDay[i];
		let tHeadIns = $("<th></th>").attr("id", "wdHead"+ i +"").text(switchWday(day));
		$(calCellTabHead).append(tHeadIns);
	}
	let date = new Date();
	function beforeDays() {
		if (getWeekDay(date) == 0) {
			let result = getWeekDay(date);
			result -= 6;
			result = Math.abs(result);
			return result;
		} 
		if (getWeekDay(date) > 0) {
			let result = (getWeekDay(date) - 1);
			return result;
		} 
	}
	function inFirstRow() {
			let result = (7 - beforeDays());
			return result;
	}
//do disabled cells
		$("#calCellTabBody").append(getTr());
			let w = new Date;
			w.setDate(0);
			let x = w.getDate();
			x = (x - (beforeDays() - inFirstRow()));
		for (let i = 0; i < beforeDays(); i++) {
			let tbodyIns = $('<td></td>').append("<button class='calCellDis'>"+ x +"</button>");
			$("#calCellTabTrBody"+ wCount +"").append(tbodyIns);
			x++;
		}	
		for (let z = 0; z < inFirstRow(); z++) {
			let tbodyIns = $('<td></td>').append("<button class='calCell'>"+ ("0" + (z + 1)) +"</button>");
			$("#calCellTabTrBody"+ wCount +"").append(tbodyIns);
			wCount = (wCount + 1);
		}
//do disabled cells END
//do calCell START
	let icoun = inFirstRow();
	for (let i = 0; i < (new Date().getDays() - inFirstRow()); i++) {
		function getCurDay(x) {
			let counter = (x + 1);
			if (counter < 10) {
				counter = ("0" + counter);
			return counter;
			} else {
				return counter;
			}
		}	
		$("#calCellTabBody").append(getTr());
		let tbodyIns = $('<td></td>').append("<button class='calCell'>"+ (getCurDay(i + inFirstRow())) +"</button>");
		$("#calCellTabTrBody"+ wCount +"").append(tbodyIns);
		function icounResult(counter) { //function results is how many week (with append) in this month
			let icounRes = [1, 2, 3, 4, 5, 6];
			for (let z = 0; z < icounRes.length; z++) {
				if ((counter / 7) == icounRes[z]) {
					return true;
				}
			}
		}
		if ((icoun + 1) >= 7 && icounResult(icoun) == true) {
			wCount++;
		}
		icoun++;
	}
//do calCell END
/*
when addCells is end, in results appers many empty <tr>
it will bee perfect, if I can find bug in cicle
function at the botton is a temporary solution, I hope...
idea - mby I should do wCount++ trought function?! ask function, do wCount++ after.
*/
//temporary solution START
	$("tr").each(function () { 
    	if ($.trim($(this).text()) == "") {
    	   $(this).remove();
    	}
});
//temporary solution END
//disabled cells for bottom START
	let dis = ($("#calCellTabBody").find("tr").length * 7);
	dis = (dis - new Date().getDays());
	dis = (dis - beforeDays());
	for (let i = 0; i < dis; i++) {
		let tbodyIns = $('<td></td>').append("<button class='calCellDis'>"+ (i + 1) +"</button>");
		$("#calCellTabTrBody"+ wCount +"").append(tbodyIns);
	}
//disabled cells for bottom END
//current day cell STAR
	function currentDateConvertor() {
		let currentDayConvert;
		if (new Date().getDate() < 10) {
			currentDayConvert = ("0" + new Date().getDate());
		} else { 
			currentDayConvert = new Date().getDate();
		}
		return currentDayConvert
	}

	let currentDayCell = $(".calCell:contains("+ currentDateConvertor() +")");
	$(currentDayCell).css("backgroundColor", "rgba(255,255,0,0.2)");
	// current day cell END
	// Get the modal LOGIN
	let modalLogin = document.getElementById('id01');
	// When the user clicks anywhere outside of the modal, close it

// modal window START
$(function() {
// Get the modal
let modal = document.getElementById('modalW');

// Get the button that opens the modal
let btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("closeW")[0];

// When the user clicks on the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
	if (event.target == modalLogin) {
	     modalLogin.style.display = "none";
	}
}
});
// modal END
/*
*/
//get user activity (modal) START
let modalCounter = 0;
$('.users').on("click", function(){
	if (modalCounter > 0) {
	  	modalCounter--;
	  	$(".headerContent").empty();
	  	$(".bodyContent").empty();
	 }
	  	let uIdFinder = this.id;
	  	let userNum = (getParse(uIdFinder));
	  	function getParse(uId) {
			let result = 0;
				for (let i = 0; i < uId.length; i++) {
					let temporaryGetParseCharAt = uId.charAt(i);
					if (isNaN(temporaryGetParseCharAt) === false) {
						result = temporaryGetParseCharAt;
					}
				}
			return result;
		}
		// let uArr = eval(uIdFinder + 'Day');
	 	let temConstruct = eval('user' + getParse(uIdFinder));
	 	let modal = document.getElementById('modalW');
	 	let trigger = document.getElementById(uIdFinder);
	 	let span = document.getElementsByClassName("closeW")[0];
    	modal.style.display = "block";
		trigger.onclick = function() {
		    modal.style.display = "block";
		}
		span.onclick = function() {
		    modal.style.display = "none";
		}
		// window.onclick = function(event) {
		//     if (event.target == modal) {
		//         modal.style.display = "none";
		//     }
		// 	if (event.target == modalLogin) {
		// 	     modalLogin.style.display = "none";
		// 	}
		// }
		/* focused user info append to modalW */
		function modalDate() {
			let newD = new Date();
			let result = ('.0' + newD.getMonth() + '.' + newD.getFullYear() + ': '); 
			return result;
		}
			for (; modalCounter < 1; modalCounter++) {
				$(".headerContent").append("<p class='modalHead'>Crew member info</p>");
				$(".headerContent").append("<p class='modalHead'>"+ temConstruct.name +
				 ' ' + temConstruct.midleName + ' - ' + temConstruct.position +"</p>");
	  			let temporaryDay;
	  			if (temConstruct.day.length > 0) {
	  					temporaryDay = Array.from(temConstruct.day);
	  			} else {
	  				$(".bodyContent").append("<p class='modalBody' id='modalBodyContentNoAction'>No action in this month yet!</p>");
	  				modalCounter++;
	  			}
	  			function compareNumbers(a, b) {
  					return a - b;
				}
	  			for (let i = 0; i < temporaryDay.length; i++) {
	  				if(temporaryDay.length > 0) {   
   					// not empty 
   						temporaryDay = temporaryDay.sort(compareNumbers)
   							$(".bodyContent").append("<p class='modalBody' id='modalBodyContent"+
	  						i +"'>"+ (temporaryDay[i] + modalDate()) + eval(uIdFinder + "Activity" +
	  						 "." + 'Day' + temporaryDay[i]) +"</p>");
	  						$("#modalBodyContent"+ i + "").append("<p class='modalBody' id='modalBodyContentDescription"+
	  						i +"'>Short description: "+ eval(uIdFinder + "Activity" + "." + 'Day' + temporaryDay[i] + 'result')) +"</p>";
	  						$("#modalBodyContentDescription"+ i +"").append("<hr>");
					}
	  			// alert(u1Activity.Day11);
	  			}
	  		}
	  	// alert(temConstruct.day);
	});
/*
Animated btn for pop-up list START
*/
	
	$(function() {
		$("#crew").bind("click", function() {
			for (let i = 0; i < 5; i++) {
				let popBtn = $("<div id='testBtn"+ i +"' class='containerPopUp'></div>").on("click", function() {
					alert(this.id);
    						this.classList.toggle("change");
				});
				$(popBtn).append("<div class='bar1' id='bar1'></div>",
					"<div class='bar2' id='bar2'></div>", "<div class='bar3' id='bar3'></div>");
				$("#upper").append(popBtn);
			}
		});
	});

	// $('parent_static').on('event', 'children_dinamic', handler);

			// $("#upper").append(
			// 	$('<div/>',{
   //  			id: 'popUpBtn',
   //  			class: 'popBtn',
   //  			title: 'Pop-Up',
   //  			onclick: "animatePopUpBtn(this)"
			// }).appendTo('#popUpBtn'));
			// $("#popUpBtn").append("<div class='bar1' id='bar1'></div>","<div class='bar2' id='bar2'></div>",
  	// 			"<div class='bar3' id='bar3'></div>");
			// });

/*
Animated btn for pop-up list END
*/
/*
There is some problem I need to solve tomorrow:
	1. If Day array is empty - Need to create logic for this, what do not bugs
		- Solve problems on calCell procedure
		- Solve problem on new User function
		- Solve problem on modalW, there need to do message (User do not trip at this month yet) 
*/
});	

/*
*****GRAVE YARD*****
*******OF GOOD******
********IDEAS*******
*********RIP********
*/