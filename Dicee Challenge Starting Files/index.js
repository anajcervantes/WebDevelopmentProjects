//get a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6 + 1);

//generate an image name/path with the random number
var randomImg1 = "images/dice" + randomNumber1 + ".png";

//change the image name for the first dice
document.querySelector(".img1").setAttribute("src",randomImg1); 

//same process for the second dice
var randomNumber2 = Math.floor(Math.random() * 6 +1);
var randomImg2 = "images/dice" +randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomImg2);

//Display a message based on the winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Both of you lose"
}
