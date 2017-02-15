const t = new Date();
let mil = (t.getMilliseconds() * 0.006) + 90; //how many degrees in 1 mil
let sec = (t.getSeconds() * 6) + mil;         //how many degrees in 1 sec
let min = (t.getMinutes() * 6) + ((sec-90)/3600) + 90;  //how many degrees in 1 min
let hr = t.getHours();
if (hr > 12) {
    hr = hr - 12;
}

hr = (hr * 30) + ((min-90)/60) + 90;

window.onload = getBaseTime;
function getBaseTime() {
  document.getElementsByClassName("hrHand")[0].style.transform = "rotate(" + hr + "deg)";
  document.getElementsByClassName("minHand")[0].style.transform = "rotate(" + min + "deg)";
  document.getElementsByClassName("secHand")[0].style.transform = "rotate(" + sec + "deg)";
  //note: getElementsByClassName returns Nodelist (like an array).
  setInterval(moveHands,1000);  //1 second
}

function moveHands() {
  sec += (360/60);  // 360/60 degrees every second
  if (sec > 360) {
    sec = sec - 360;
  }
  document.getElementsByClassName("secHand")[0].style.transform = "rotate(" + sec + "deg)";
  
  min += (360/60/60);  // 360/60/60 degrees every second
  if (min > 360) {
    min = min - 360;
  }
  document.getElementsByClassName("minHand")[0].style.transform = "rotate(" + min + "deg)";
  
  hr += (360/12/60/60);  // 360/12/60/60 degrees ever second
  if (hr > 360) {
    hr = hr - 360;
  }
  document.getElementsByClassName("hrHand")[0].style.transform = "rotate(" + hr + "deg)";

}


