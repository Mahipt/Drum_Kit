// select the object
// new sound generate function
function press_play_sound(pressed){
    switch (pressed){
        case "w": 
            var sound = new Audio("sounds/crash.mp3"); 
            break; 
        case "a": 
            var sound = new Audio("sounds/kick-bass.mp3"); 
            break; 
        case "s": 
            var sound = new Audio("sounds/snare.mp3"); 
            break; 
        case "d": 
            var sound = new Audio("sounds/tom-1.mp3"); 
            break; 
        case "j": 
            var sound = new Audio("sounds/tom-2.mp3"); 
            break; 
        case "k": 
            var sound = new Audio("sounds/tom-3.mp3"); 
            break; 
        case "l": 
            var sound = new Audio("sounds/tom-4.mp3"); 
            break; 
        default: 
            break; 
    }
    sound.play(); 
}

// add key detection
document.addEventListener("keydown", function (event){
    //console.log(event); 
    press_play_sound(event.key); 
    button_animation(event.key); 
}); 


var n = document.querySelectorAll(".drum").length; 
for (var i=0; i < n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",
        function (){
            buttonType = this.innerHTML; 
            click_play_sound(buttonType); 
            button_animation(buttonType); 
        }
    ); 
}

function button_animation(buttonType){
    var buttonActive = document.querySelector("." + buttonType); 
    // adding pressed class to the class list
    buttonActive.classList.add("pressed"); 
    // pause for few second 
    // remove the pressed class from class list
    setTimeout(function() {
        buttonActive.classList.remove("pressed"); 
    }, 100); 
}

function click_play_sound(buttonType){
    switch (buttonType){
        case "w": 
            var crash = new Audio("sounds/crash.mp3")
            crash.play(); 
            break; 
        case "a": 
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play(); 
            break; 
        case "s": 
            var snare = new Audio("sounds/snare.mp3")
            snare.play(); 
            break; 
        case "d": 
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play(); 
            break; 
        case "j": 
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play(); 
            break;
        case "k": 
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play(); 
            break; 
        case "l": 
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play(); 
            break; 
        default: 
            return; 
    }
}