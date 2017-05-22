$(document).ready(function(){

var compNum = null; 
var wins = 0;
var losses = 0; 
var playerCount = null; 
var gem1 = null, gem2 = null, gem3 = null, gem4 = null;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function gameStart() {
	compNum = getRandomInt(19, 120);
	gem1 = getRandomInt(1, 12); 
	gem2 = getRandomInt(1, 12);
	gem3 = getRandomInt(1, 12);
	gem4 = getRandomInt(1, 12); 

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

}); 

function gameRefresh () {

}  
