$(document).ready(function(){

	var userChoice = null;
	var compNum = null; 
	var wins = 0;
	var losses = 0; 
	var playerScore = 0; 
	var gemValues = []; 
	var gemValuesLimit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	var gem1 = null, gem2 = null; gem3 = null; gem4 = null;


	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	} 

	function gameStart() {
		compNum = getRandomInt(19, 120);
		gemValuesSet();
	}

	function gemValuesSet() {

		var x = 13 
		console.log(gemValuesLimit);
		for (var i = 0 ; i < 4; i++ ) {
			x -= 1;
			gemValues[i] = gemValuesLimit[getRandomInt(1, x)];
			// gemValuesLimit.splice($.inArray(gemValues[1], gemValuesLimit),1); 
			
			// method to reduce duplicate gem values 
			var y = gemValuesLimit.indexOf(gemValues[i]);
			if(y != -1) {
				gemValuesLimit.splice(i, 1);
			}

			console.log(gemValuesLimit);

		} 

		gem1 = gemValues[0];
		gem2 = gemValues[1];
		gem3 = gemValues[2];
		gem4 = gemValues[3];

		console.log('Gem 1 = ' + gem1);
		console.log('Gem 2 = ' + gem2);
		console.log('Gem 3 = ' + gem3);
		console.log('Gem 4 = ' + gem4);

	}



	gameStart(); 


	$('#compRandNum').text(compNum);
	$('#wins').text(wins);
	$('#losses').text(losses);
	$('#crystal1').attr('value', gem1); 
	$('#crystal2').attr('value', gem2);
	$('#crystal3').attr('value', gem3);
	$('#crystal4').attr('value', gem4);


	function gameRefresh () {

	}  

	$('crystal1').on('click' function (e) {
		userChoice = this.value; 
		playerScore = $(this).attr('value');
		$('#playerTotal').text(playerScore);

	});


}); 


