var numberOfBtn = document.querySelectorAll(".drumbtn");
var btn_w = document.querySelector(".w");

for (var i = 0; i < numberOfBtn.length; i++) {
    document.querySelectorAll(".drumbtn")[i].addEventListener("click", function () {
        var button = this.textContent;
        btnPress(button);
        btnActive(button);
    })
}
function play(address){
    var audio = new Audio(address);
    audio.play();
}
document.addEventListener("keypress", function(event){
    console.log(event.key);
    btnPress(event.key);
    btnActive(event.key);
})
function btnPress(key){
    switch(key){
            case "w":
                play("sounds/crash.mp3");
                break;
            case "a":
                play("sounds/kick-bass.mp3");
                break;
            case "s":
                play("sounds/snare.mp3");
                break;
            case "d":
                play("sounds/tom-1.mp3");
                break;

            case "j":
                play("sounds/tom-2.mp3");
                break;
            case "k":
                play("sounds/tom-3.mp3");
                break;
            case "l":
                play("sounds/tom-4.mp3");
                break;
            default:
                break;
    }
}
function btnActive(key){
    var active = document.querySelector("."+key);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    }, 100);
}