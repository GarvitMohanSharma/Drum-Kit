//sound by pressing button
var noOfDrums = document.querySelectorAll(".drum").length;

for(var i=0;i<noOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonhtml=this.innerHTML;
        playsound(buttonhtml);
    } ); 
}

//keyboard to audio play
document.addEventListener("keydown", function(event){

    playsound(event.key);
});


//function to play audio files
function playsound(key){
switch (key) {
    case "w":
        var sound = new Audio('sounds/tom-1.mp3');
        sound.play();   
        break;
    case "a":
        var sound = new Audio('sounds/tom-2.mp3');
        sound.play();   
        break;
    case "s":
        var sound = new Audio('sounds/tom-3.mp3');
        sound.play();   
        break;
    case "d":
        var sound = new Audio('sounds/tom-4.mp3');
        sound.play();   
        break;
    case "j":
        var sound = new Audio('sounds/snare.mp3');
        sound.play();   
        break;
    case "k":
        var sound = new Audio('sounds/crash.mp3');
        sound.play();   
        break;
    case "l":
        var sound = new Audio('sounds/kick-bass.mp3');
        sound.play();   
        break;

    default:
        break;
}
}