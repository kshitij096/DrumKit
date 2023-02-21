//  beginner method document.querySelectorAll("button").addEventListener("click",clickedOne);

// function clickedOne(){
//     alert("I got Clicked");
// }

// Click Pressed------

var noOfDrums = document.querySelectorAll(".drum").length;
for(var i=0; i < noOfDrums ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var buttonInnerHTML= this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}


// Keyboard Pressed------

document.addEventListener('keydown', function(event) {
    makeSound(event.key) ;
    buttonAnimation(event.key);

});

function makeSound (key) {

        switch (key) {
            case "w":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play(); 
                break;
            case "a":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play(); 
                break;
            case "s":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play(); 
                break;
            case "d":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play(); 
                break;
            case "j":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play(); 
                break;
            case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play(); 
                break;
            case "l":
                var audio = new Audio("sounds/snare.mp3");
                audio.play(); 
                break;  
            default: console.log(buttonInnerHTML);
                break;
        }
    };
 
function buttonAnimation(currentkey){
   var activeButton = document.querySelector("."+currentkey);
   activeButton.classList.add("pressed");

   setTimeout (function(){
    activeButton.classList.remove("pressed");
   },100);
}




// 2nd tareeka-- without making function

    // document.addEventListener('keydown', function(event) {
    //     switch(event.code) {
//       case "KeyW":
//         var audio = new Audio("sounds/tom-2.mp3");
//         audio.play(); 
//         break;
//         case "KeyA":
//                 var audio = new Audio("sounds/tom-3.mp3");
//                 audio.play(); 
//                 break;
                
//       case "KeyS":
//             var audio = new Audio("sounds/tom-1.mp3");
//             audio.play(); 
//             break;
//         case "KeyD":
//             var audio = new Audio("sounds/tom-4.mp3");
//             audio.play(); 
//             break;
//         case "KeyJ":
//             var audio = new Audio("sounds/kick-bass.mp3");
//             audio.play(); 
//             break;
//         case "KeyK":
//             var audio = new Audio("sounds/crash.mp3");
//                 audio.play(); 
//                 break;
//         case "KeyL":
//             var audio = new Audio("sounds/snare.mp3");
//             audio.play(); 
//             break;  
//         default: console.log(event.code);
//             break;
//     }
//   });

// document.addEventListener("keydown",function (){
//     var InnerHTML= this.innerHTML;
//         switch (buttonInnerHTML) {
//             case "w":
//                 var audio = new Audio("sounds/tom-1.mp3");
//                 audio.play(); 
//                 break;
//             case "a":
//                 var audio = new Audio("sounds/tom-2.mp3");
//                 audio.play(); 
//                 break;
//             case "s":
//                 var audio = new Audio("sounds/crash.mp3");
//                 audio.play(); 
//                 break;
//             case "d":
//                 var audio = new Audio("sounds/tom-4.mp3");
//                 audio.play(); 
//                 break;
//             case "j":
//                 var audio = new Audio("sounds/kick-bass.mp3");
//                 audio.play(); 
//                 break;
//             case "k":
//                 var audio = new Audio("sounds/tom-3.mp3");
//                 audio.play(); 
//                 break;
//             case "l":
//                 var audio = new Audio("sounds/snare.mp3");
//                 audio.play(); 
//                 break;  
//             default: console.log(buttonInnerHTML);
//                 break;
// })




// 
// console.log(this.style.color='white');