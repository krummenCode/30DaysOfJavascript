const secondsHand = document.querySelector('.sec-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  // Seconds
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Minutes
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // Hours
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12 )  * 360 ) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

  // console.log("Time: " + hours + " : " + minutes + " : " + seconds)
  console.log(secondsDegrees);
}

setInterval(setDate, 1000)
