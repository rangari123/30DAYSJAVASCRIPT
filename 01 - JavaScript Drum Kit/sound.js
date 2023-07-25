window.addEventListener("keydown", playsound);

function playsound(e) {
  // grab the audio elment
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  // grap the keyborad key
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // stop the function from running all together
  if (!audio) return;

  // rewind to start.
  audio.currentTime = 0;
  audio.play();

  // add class of playing when keydown
  key.classList.add("playing");
}

// remove the css playing class

// get the all key
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removetranstiton));

function removetranstiton(e) {
  if (e.propertyName != "transform") return;
  // else remove playing class
  this.classList.remove("playing");
  //   console.log(this);
}
