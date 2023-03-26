const numberOfDrums = document.querySelectorAll('.drum').length;

for(var i=0;i<numberOfDrums;i++){
    document.querySelectorAll('.drum')[i].addEventListener("click",function (){
       var buttonInnerHtml = this.innerHTML;
       playAudio(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}
document.addEventListener("keypress",function(event){
    playAudio(event.key);
    buttonAnimation(event.key);
});


//playing audio functions

function playAudio(value){
    switch(value){

        case "w":
            var audioFile = new Audio("sounds/tom-1.mp3");
            audioFile.play();
            break;
        case "a":
            var audioFile = new Audio("sounds/tom-2.mp3");
            audioFile.play();
            break;
        case "s":
            var audioFile = new Audio("sounds/tom-3.mp3");
            audioFile.play();
            break;
        case "d":
            var audioFile = new Audio("sounds/tom-4.mp3");
            audioFile.play();
            break;
        case "j":
            var audioFile = new Audio("sounds/snare.mp3");
            audioFile.play();
            break;
        case "k":
            var audioFile = new Audio("sounds/crash.mp3");
            audioFile.play();
            break;
        case "l":
            var audioFile = new Audio("sounds/kick-bass.mp3");
            audioFile.play();
            break;
        default:
            console.log(buttonInnerHtml);
            break;
       }

}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}

