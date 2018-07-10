/*
Tempory storage for procedure
*/

//Dynamic calCell add START
	function getWeekDay(date) {
	    let nDays = (date.getDate() - 1);
	    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	    let day = date.getDay();
	    return nDays - day;
	}
	$(function() {
	let wCount = 1;
	let table = $("<table border ='2'></table>").attr('id', 'calCellTab');
	let thead = $("<thead></thead>").attr('id', 'calCellTabHead');
	let tbody = $("<tbody></tbody>").attr('id', 'calCellTabBody');
	let trBody = $("<tr></tr>").attr("id", "calCellTabTrBody"+ wCount +"");
	let wDay = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
				"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
				"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
				"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
				"Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",];
	$('#callBox').append(table);
	$("#calCellTab").append(thead);
	$("#calCellTab").append(tbody);
		function emptyDays() {
			let switchVal = getWeekDay(date);
			if (switchVal == 0) {
				switchVal = 6;
			}
			return switchVal
		}
		function getWeekDays(date) {
	    	let nDays = date.getDate();
	    	let day = date.getDay();
	    return days[nDays - day];
		}
		let date = new Date();
		let firstDay = emptyDays(); 
//Dynamic add calCelDis START
			let doConnect = 0;
			if (wDay[firstDay] == "Sun") {
				let con = 0; //after this procedure, it goes to 'calCell circle 1 to 31' procedure
	//Empty day START
				$(calCellTabBody).append(trBody);
				while (con != 6) {
					let tbodyIns = $('<td></td>').append("<button class='calCellDis'>D</button>");
					$("#calCellTabTrBody"+ wCount +"").append(tbodyIns);
					con++;
				}
	//First day	START
				while (wDay[con] == "Sun") {
    				let tbodyIns = $('<td></td>').append("<button class='calCell'>01</button>");
    				$("#calCellTabTrBody"+ wCount +"").append(tbodyIns);
    				$(calCellTabBody).append(trBody);
    				con++;
    			}
    			wCount++;
    			trBody = $("<tr></tr>").attr("id", "calCellTabTrBody"+ wCount +"");
    			con -= 6;
    			con = Math.abs(con);
    			doConnect = con;
    			//for correct results, need to do con+1 if con < 6
    			//realise it in future
			}
//Dynamic add calCelDis END
/**/
//Dynamic add calCell circle 1 to 31 START
		for (let i = 0; i < (new Date().getDays() - 1); i++) {
			$(calCellTabBody).append(trBody);
			if (wDay[i]  != "Sun") {
				if (i < 8) {
					let tbodyIns = $('<td></td>').append("<button class='calCell'>"+ ("0" + (doConnect + 1)) +"</button>");
					$("#calCellTabTrBody"+ wCount +"").append(tbodyIns);
				} else {
					let tbodyIns = $('<td></td>').append("<button class='calCell'>"+ (doConnect + 1) +"</button>");
					$("#calCellTabTrBody"+ wCount +"").append(tbodyIns);
				}
			}
    		if (wDay[i]  == "Sun") {
    			if (i < 8) {
    				let tbodyIns = $('<td></td>').append("<button class='calCell'>"+ ("0" + (doConnect + 1)) +"</button>");
    				$("#calCellTabTrBody"+ wCount +"").append(tbodyIns);
    				$(calCellTabBody).append(trBody);
    			} else {
    				let tbodyIns = $('<td></td>').append("<button class='calCell'>"+ (doConnect + 1) +"</button>");
    				$("#calCellTabTrBody"+ wCount +"").append(tbodyIns);
    				$(calCellTabBody).append(trBody);
    			}
    			wCount++;
    			trBody = $("<tr></tr>").attr("id", "calCellTabTrBody"+ wCount +"")
    		}
    		doConnect++;
		} 	
	});
//Dynamic add calCell circle 1 to 31 END
/*
There is need to do 'calCelDis' by the end of cells
*/
//Dynamic add calCell add END