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
	  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
	} 

	function gameStart() {
		compNum = getRandomInt(19, 120);
		gemValuesSet();
	}

	gameStart(); 

	function gemValuesSet() {

		var x = 13 
		console.log( gemValuesLimit );
		
		for ( var i = 0 ; i < 4; i++ ) {
			x -= 1;
			gemValues[i] = gemValuesLimit[ getRandomInt ( 1, x ) ];
			
			/* method to reduce duplicate gem values 
			
			gemValuesLimit.splice($.inArray(gemValues[1], gemValuesLimit),1); 

			var y = gemValuesLimit.indexOf( gemValues[i] );
			if (y != -1) {
				gemValuesLimit.splice(i, 1);
			}
			*/

		} 

		// assigning value to each gem 
		gem1 = gemValues[0];
		gem2 = gemValues[1];
		gem3 = gemValues[2];
		gem4 = gemValues[3];

		// to know what gem has what value for testing 
		console.log( 'Gem 1 = ' + gem1 );
		console.log( 'Gem 2 = ' + gem2 );
		console.log( 'Gem 3 = ' + gem3 );
		console.log( 'Gem 4 = ' + gem4 );

	}

	$( '#compRandNum' ).text( compNum );
	$( '#wins' ).text( wins );
	$( '#losses' ).text( losses );
	$( '#playerTotal' ).text( playerScore);


	// adding playerscore on gem clicks
	$( '#crystal1' ).on('click', function () {
		playerScore += gem1;
		$( '#playerTotal' ).text( playerScore );
		gameState( playerScore, compNum ); 
	}); 

	$('#crystal2').on('click', function () {
		playerScore += gem2;
		$( '#playerTotal' ).text( playerScore );
		gameState( playerScore, compNum );  
	}); 	

	$('#crystal3').on('click', function () {
		playerScore += gem3;
		$( '#playerTotal' ).text( playerScore );
		gameState( playerScore, compNum );  
	}); 

	$('#crystal4').on('click', function () {
		playerScore += gem4; 
		$( '#playerTotal' ).text( playerScore );
		gameState( playerScore, compNum );
	});  


	function gameState (player , computer) { 

		if (player === computer ) {
			wins++; 
			$( '#wins' ).text( wins );
			gameRefresh();	
		
		} else if ( player > computer ) { 
			
			losses++;
			$( '#losses' ).text( losses );
			gameRefresh();
		}

	}

	function gameRefresh () {
		
		gameStart();
		playerScore = 0;
		$( '#compRandNum' ).text( compNum );
		$( '#playerTotal' ).text( playerScore);
		console.log(compNum);
		console.log(gemValues);
	}

}); 


