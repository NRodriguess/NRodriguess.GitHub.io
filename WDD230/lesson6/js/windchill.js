let temp = parseFloat(document.querySelector("#temp").textContent);
let speed = parseFloat(document.querySelector("#windspeed").textContent);

if(temp <= 50 && speed > 3.0){
  let result = windChill(temp, speed);
  document.querySelector('#windoutput').textContent = result.toFixed(2);
}
else {
  document.querySelector('#windoutput').textContent = "N/A";
}


function windChill(t, s) {
  let windChill = 35.74 + (0.6215*t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s,0.16))
  return windChill;
}