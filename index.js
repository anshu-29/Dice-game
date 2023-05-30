var random1 = Math.floor(Math.random()*6);//1-6
random1 = random1+1;;
var image = "dice"+random1 +".png";//dice1.png-dice6.png
var source1 = "images/"+image;//images/dice1.png-images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",source1);

var random2= Math.floor(Math.random()*6)+1;
var source2 ="images/dice"+random2 +".png";
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src",source2)
//if player1 wins
if(random1>random2)
{
    document.querySelector("h1").innerHTML="🚩Player1 Wins";

}else if(random2>random1){
    document.querySelector("h1").innerHTML="🚩Player2 wins"
}else{
    document.querySelector("h1").innerHTML="Tie-Try again";
}
// console.log(document.querySelector("img").attributes);
// document.querySelector("img").setAttribute("src",'images/dice1.png');


