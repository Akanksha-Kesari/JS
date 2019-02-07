/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScores,activePlayer,gamePlaying,prevDice,dice;


init();

//anonymous function
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        //1.  random number
       prevDice=dice; 
       console.log('prev'+prevDice);
       
dice = Math.floor(Math.random()*6)+1;
console.log('dice'+dice);
if(dice===prevDice===6)
console.log('equal 6');

//2. dispay result
var diceDOM = document.querySelector('.dice');
diceDOM.style.display='block';
diceDOM.src='dice-' +dice + '.png';

//3. update the round score only if rolled number was not a 1
if(prevDice===6&&dice===6){
   // console.log('equal');
    nextPlayer();
}
else if(dice !==1){
    //add score
    roundScore+=dice;
    document.querySelector('#current-'+ activePlayer).textContent=roundScore;
}
else{
//next player

nextPlayer();
}
 }

});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
 //1. Add Current score to global
 scores[activePlayer] +=roundScore;
 //2. update ui
 document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];
 
 //3. check if player won the game
 if(scores[activePlayer]>=20){
     document.getElementById('name-'+activePlayer).textContent='Winner!!';
     document.querySelector('.dice').style.display='none';
     document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
     document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
      gamePlaying=false;
 }
 else{
 //4. next player
 nextPlayer();
 }
  }
   
});

function nextPlayer()
{
    activePlayer===0 ? activePlayer=1: activePlayer=0;
    roundScore=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    //document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
     
}


document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores=[0,0];
roundScore=0;
activePlayer= 0;
 gamePlaying =true;
document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
document.querySelector('.dice').style.display='none';
document.querySelector('#name-0').textContent='Player 1';
document.querySelector('#name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}







