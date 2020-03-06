//  Javascript for the Drum Kit website ---------------------------------------
// ----------------------------------------------------------------------------
//  Event Listener setup for mouse clicks on individual drum images
var numButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    makeSound(this.textContent);
    buttonAnimation(this.textContent);
  });
}
// ----------------------------------------------------------------------------
// Event Listener setup for mouse clicks on the header and footer drumkits
document.querySelector('.drumkit').addEventListener('click', function () {
  makeSound('f');
  drumkitAnimation(document.querySelector('.drumkit'));
});
document.querySelector('.drumkit2').addEventListener('click', function () {
  makeSound('h');
  drumkitAnimation(document.querySelector('.drumkit2'));
});
// ----------------------------------------------------------------------------
// Event Listener setup for the keyboard key presses
document.addEventListener('keydown', function (event) {
  if (event.key !== 'h' && event.key !== 'f') {
    makeSound(event.key);
    buttonAnimation(event.key);
  }
});
// ----------------------------------------------------------------------------
// Main function to play the appropriate sound file
function makeSound(key) {

  var sound;
  switch (key) {
    case 'w':
      sound = 'sounds/tom-1.mp3';
      break;
    case 'a':
      sound = 'sounds/tom-2.mp3';
      break;
    case 's':
      sound = 'sounds/tom-3.mp3';
      break;
    case 'd':
      sound = 'sounds/tom-4.mp3';
      break;
    case 'j':
      sound = 'sounds/snare.mp3';
      break;
    case 'k':
      sound = 'sounds/crash.mp3';
      break;
    case 'l':
      sound = 'sounds/kick-bass.mp3';
      break;
    case 'h':
      sound = 'sounds/MarchingDrums2.mp3';
      break;
    case 'f':
      sound = 'sounds/drumroll2.mp3';
      break;
    default:
      console.log(this.textContent);
  }
  var audio = new Audio(sound);
  audio.play();
}
// ----------------------------------------------------------------------------
// Function to animate the buttons for individual drums
function buttonAnimation(key) {
  var activeButton = document.querySelector('.' + key);
  activeButton.classList.add('pressed');
  setTimeout(function () {
    activeButton.classList.remove('pressed')
  }, 150)
}
// ----------------------------------------------------------------------------
// Function to animate the drumkit images in header and footer
function drumkitAnimation(drumkit) {
  drumkit.style.verticalAlign = 'bottom';
  setTimeout(function () {
    drumkit.style.verticalAlign = 'middle';
  }, 200)
}
// ----------------------------------------------------------------------------
