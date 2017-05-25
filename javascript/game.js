$(document).ready(function(){

	// game object declared with all variables and functions  
	var gameobj = { 

		compNum: null,
		wins: 0, 
		losses: 0, 
		playerScore: 0,
		gemValues: [], 
		gemValuesLimit: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		gem1: null, 
		gem2: null, 
		gem3: null, 
		gem4: null,

		// random number function 
		getRandomInt: function (min, max) {
	  		return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
		},

		// Initializes game and sets up values on screen 
		gameStart: function () {
			this.compNum = this.getRandomInt(19, 120);
			this.gemValuesSet();
			$( '#compRandNum' ).text( this.compNum );
			$( '#wins' ).text( this.wins );
			$( '#losses' ).text( this.losses );
			$( '#playerTotal' ).text( this.playerScore);
		},

		// assigns valies to gems 
		gemValuesSet: function () {

			var x = 12; 
			for ( var i = 0 ; i < 4; i++ ) {
				
				x -= 1;
				this.gemValues[i] = this.gemValuesLimit[ this.getRandomInt ( 1, x ) ];
				
				//avoids duplicate gem values 
				this.gemValuesLimit.splice($.inArray(this.gemValues[i], this.gemValuesLimit),1); 

			} 

			// assigns value to each gem using array 
			this.gem1 = this.gemValues[0];
			this.gem2 = this.gemValues[1];
			this.gem3 = this.gemValues[2];
			this.gem4 = this.gemValues[3];

		},	

		gameState: function (player , computer) { 
			if (player === computer ) {
				this.wins++; 
				$( '#wins' ).text( this.wins );
				this.gameRefresh();	
			
			} else if ( player > computer ) { 
				
				this.losses++;
				$( '#losses' ).text( this.losses );
				this.gameRefresh();
			}
		},

		gameRefresh: function () {
		
			this.gemValuesLimit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
			this.gameStart();
			this.playerScore = 0;
			$( '#compRandNum' ).text( this.compNum );
			$( '#playerTotal' ).text( this.playerScore);
			
			console.log(this.compNum);
			console.log(this.gemValues);
			console.log(this.gemValuesLimit);
		},

	}

	gameobj.gameStart(); 

	// adding playerscore on gem clicks
	$( '#crystal1' ).on('click', function () {
		gameobj.playerScore += gameobj.gem1;
		$( '#playerTotal' ).text( gameobj.playerScore );
		gameobj.gameState( gameobj.playerScore, gameobj.compNum ); 
	}); 

	$('#crystal2').on('click', function () {
		gameobj.playerScore += gameobj.gem2;
		$( '#playerTotal' ).text( gameobj.playerScore );
		gameobj.gameState( gameobj.playerScore, gameobj.compNum );  
	}); 	

	$('#crystal3').on('click', function () {
		gameobj.playerScore += gameobj.gem3;
		$( '#playerTotal' ).text( gameobj.playerScore );
		gameobj.gameState( gameobj.playerScore, gameobj.compNum );  
	}); 

	$('#crystal4').on('click', function () {
		gameobj.playerScore += gameobj.gem4; 
		$( '#playerTotal' ).text( gameobj.playerScore );
		gameobj.gameState( gameobj.playerScore, gameobj.compNum );
	});  

}); 


