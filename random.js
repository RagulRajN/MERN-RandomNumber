var randomNumber=Math.floor(Math.random()*100)+1;
var attempt=0;
var level=0;
var img = document.getElementById("img");
document.getElementById('btn').addEventListener('click',function(){
    var guess=parseInt(document.getElementById('guessInput').value);
    attempt++;
    if(guess==randomNumber){
        level++;
        display("Congratulations You guessed the number in "+attempt+" attempts. Find Next Random Number For Next Level : "+(level+1));
        randomNumber=Math.floor(Math.random()*100)+1;
        attempt=0;
        if(level == 5){
            img.src="gift1.jpg";
        display("Congratulations You Won The Game");
    }
}
    else if(guess<randomNumber){
        display('Number is too low'+ randomNumber)
    }else if(guess>randomNumber){
        display('Number is too high'+ randomNumber);
    }else{
        display('Enter The Number!');
    }
});

function display(msg){
    document.getElementById('msg').textContent=msg;
}