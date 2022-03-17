var userwin = 0
var userCardtotal = 0
var compwin = 0
var compCardtotal = 0
var repeat;
var stop;
var autoLoss = false;
do {
	var replay = false;
	stop = "y";

	do {
		var compCard = Math.floor(Math.random() * 10) + 1;
		compCardtotal = compCardtotal + compCard;
		alert(`The computer drew ${compCard}. The new total is ${compCardtotal}`);
		console.log(compCard);
		if ( compCardtotal > 20){
			autoLoss = true;
			continue;
		}
	} while ( compCardtotal <= 15);

	alert(`The computer stopped at ${compCardtotal}`)

	do {
		if (autoLoss == true){
			continue;
		}
		var draw = false;
		var userCard = Math.floor(Math.random() * 10) + 1;
		userCardtotal = userCardtotal + userCard;
		alert(`You drew ${userCard}. The new total is ${userCardtotal}`);
		console.log(userCard);
		if ( userCardtotal <= 20){
			stop = prompt(`You have ${userCardtotal} and the computer has ${compCardtotal}. Do you want to draw again? y or n`);
		}else{
		continue;
		}
		if (stop == "y"){
			draw = true;
		}else if (stop == "n"){
			draw = false;
		}
	} while ( draw == true );

	if ( (compCardtotal > 20) ){
		alert(`The computer went over with ${compCardtotal}`)
		userwin = userwin + 1;
		userCardtotal = 0;
		compCardtotal = 0;
	}else if((userCardtotal > compCardtotal) && (userCardtotal <= 20)){
		alert(`You win! You had ${userCardtotal} and the computer had ${compCardtotal}`)
		userwin = userwin + 1;
		userCardtotal = 0;
		compCardtotal = 0;
	}else{
		alert(`Sorry the computer won with ${compCardtotal}, and you lost with ${userCardtotal}`)
		compwin = compwin + 1;
		userCardtotal = 0;
		compCardtotal = 0;
	}
	alert(`You have won ${userwin} times and the computer has won ${compwin} times.`)
	repeat = prompt("Do you want to play again? y or n");
	do {
		if (repeat == "n"){
		replay = false;
		}else if (repeat == "y"){
		replay = true;
		}
	} while ((repeat != "y") && (repeat != "n"));
} while (replay == true);