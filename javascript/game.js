$(document).ready(function(){

	var gameobj = { 

		uchoice: null,
		compNum: null,
		wins: 0, 
		losses: 0, 
		playerScore: 0,
		gemValues: [], 
		gemValuesLimit: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		getRandomInt: function (min, max) {
	  		return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
		}, 
	}


	var gem1 = null, gem2 = null; gem3 = null; gem4 = null;

	/*
	function getRandomInt(min, max) {
	  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
	} 
	*/

	function gameStart() {
		gameobj.compNum = gameobj.getRandomInt(19, 120);
		gemValuesSet();
	}

	gameStart(); 

	function gemValuesSet() {

		var x = 12; 
		for ( var i = 0 ; i < 4; i++ ) {
			x -= 1;
			gameobj.gemValues[i] = gameobj.gemValuesLimit[ getRandomInt ( 1, x ) ];
			
			gameobj.gemValuesLimit.splice($.inArray(gameobj.gemValues[i], gameobj.gemValuesLimit),1); 

		} 

		// assigning value to each gem 
		gem1 = gameobj.gemValues[0];
		gem2 = gameobj.gemValues[1];
		gem3 = gameobj.gemValues[2];
		gem4 = gameobj.gemValues[3];

		// to know what gem has what value for testing 
		//console.log( 'Gem 1 = ' + gem1 );
		//console.log( 'Gem 2 = ' + gem2 );
		//console.log( 'Gem 3 = ' + gem3 );
		//console.log( 'Gem 4 = ' + gem4 );
		//console.log( gemValuesLimit );

	}

	$( '#compRandNum' ).text( gameobj.compNum );
	$( '#wins' ).text( gameobj.wins );
	$( '#losses' ).text( gameobj.losses );
	$( '#playerTotal' ).text( gameobj.playerScore);


	// adding playerscore on gem clicks
	$( '#crystal1' ).on('click', function () {
		gameobj.playerScore += gem1;
		$( '#playerTotal' ).text( gameobj.playerScore );
		gameState( gameobj.playerScore, gameobj.compNum ); 
	}); 

	$('#crystal2').on('click', function () {
		gameobj.playerScore += gem2;
		$( '#playerTotal' ).text( gameobj.playerScore );
		gameState( gameobj.playerScore, gameobj.compNum );  
	}); 	

	$('#crystal3').on('click', function () {
		gameobj.playerScore += gem3;
		$( '#playerTotal' ).text( gameobj.playerScore );
		gameState( gameobj.playerScore, gameobj.compNum );  
	}); 

	$('#crystal4').on('click', function () {
		gameobj.playerScore += gem4; 
		$( '#playerTotal' ).text( gameobj.playerScore );
		gameState( gameobj.playerScore, gameobj.compNum );
	});  


	function gameState (player , computer) { 

		if (player === computer ) {
			gameobj.wins++; 
			$( '#wins' ).text( gameobj.wins );
			gameRefresh();	
		
		} else if ( player > computer ) { 
			
			gameobj.losses++;
			$( '#losses' ).text( gameobj.losses );
			gameRefresh();
		}

	}

	function gameRefresh () {
		
		gameobj.gemValuesLimit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		gameStart();
		gameobj.playerScore = 0;
		$( '#compRandNum' ).text( gameobj.compNum );
		$( '#playerTotal' ).text( gameobj.playerScore);
		
		console.log(gameobj.compNum);
		console.log(gameobj.gemValues);
		console.log(gameobj.gemValuesLimit);
	}

}); 


