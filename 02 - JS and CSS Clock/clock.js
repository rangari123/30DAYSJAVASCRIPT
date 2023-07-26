// get all hands
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();

  // The + 90 is added to compensate for the initial offset,
  //so the hands start pointing to the 12 o'clock position.

  const seconddegreeConvert = (second / 60) * 360 + 90; // 60sec
  const minutegreeConvert = (min / 60) * 360 + 90; // 60min
  const hourgreeConvert = (hour / 12) * 360 + 90; //12hr

  secondHand.style.transform = `rotate(${seconddegreeConvert}deg)`;
  minuteHand.style.transform = `rotate(${minutegreeConvert}deg)`;
  hourHand.style.transform = `rotate(${hourgreeConvert}deg)`;
}
setInterval(setDate, 1000);
