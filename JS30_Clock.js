const t = new Date();
let sec = ((t.getSeconds()+1) * 6) + 90;
let min = ((t.getMinutes()) * 6) + 90;
let hr = t.getHours();
  if (hr > 12) {
    hr = hr - 12;
  }
  hr = 90 + (hr * 30);

window.onload = getBaseTime;
function getBaseTime() {
  document.getElementsByClassName("hrHand")[0].style.transform = "rotate(" + hr + "deg)";
  document.getElementsByClassName("minHand")[0].style.transform = "rotate(" + min + "deg)";
  document.getElementsByClassName("secHand")[0].style.transform = "rotate(" + sec + "deg)";
  //note: getElementsByClassName returns Nodelist (like an array).
  setInterval(moveHands,50);  //50 milliseconds
}

function moveHands() {
  sec += (360/60/20);  // 360/60/20 degrees every 50 milliseconds
  if (sec > 360) {
    sec = sec - 360;
  }
  document.getElementsByClassName("secHand")[0].style.transform = "rotate(" + sec + "deg)";
  
  min += (360/60/60/20);  // 360/60/60/20 degrees every 50 milliseconds
  if (min > 360) {
    min = min - 360;
  }
  document.getElementsByClassName("minHand")[0].style.transform = "rotate(" + min + "deg)";
  
  hr += (360/60/60/12/20);  // 360/60/60/12/20 degrees every 50 milliseconds
  if (hr > 360) {
    hr = hr - 360;
  }
  document.getElementsByClassName("hrHand")[0].style.transform = "rotate(" + hr + "deg)";

}


