var numOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    console.log(this.innerHTML);
    keys(this.innerHTML);
    buttonAnimation(this.innerHTML);

  });
}

document.addEventListener("keypress", function (e) {
  keys(e.key);
  buttonAnimation(e.key);

});

function keys(pressed) {
  switch (pressed) {
    case "a":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "w":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    default:
  }
}

function buttonAnimation(key) {
    var keys = document.querySelector("."+key);

    keys.classList.add("pressed")//class name

    setTimeout(function() {
        keys.classList.remove("pressed")
    },50)
}
