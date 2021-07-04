/* To write those codes I got help from Brenda from my group evn if I am not able to complete*/
const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=598afcc840d433c248fad5fe3deff034&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  
 console.log(jsObject)
   
    let wheater = jsObject;
   
    let p = wheater.weather[0].description;
    let high = wheater.main.temp_max;
    let chill = wheater.wind.speed;
    let humidity = wheater.main.humidity;
    let quick = wheater.wind.speed;

    if (parseInt(high) <= 50 && parseInt(chill) > 3) {
      const windchill = 35.74 + 0.6215 * temp - 35.75 * wind ** 0.16 + 0.4275 * temp * wind ** 0.16;
      const chillwind = Math.round(windchill);  
      document.querySelector('#wind').textContent = chillwind + "°F";
  } else {
      document.querySelector('#wind').textContent = "N/A";
  }
 

   document.getElementById("currently").textContent = p;
   document.getElementById("high").textContent = high;
   document.getElementById("wind").textContent = chill;
   document.getElementById("humidity").textContent = humidity;
    document.getElementById("speed").textContent = quick;
      
    }
  );