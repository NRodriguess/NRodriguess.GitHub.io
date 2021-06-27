const cityid = "5604473";
const APPID = "598afcc840d433c248fad5fe3deff034";

const apiURL = `http://api.openweathermap.org/data/2.5/forecast?id=${cityid}&appid=${APPID}&units=imperial`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
    console.log(fiveDayForecast);

    fiveDayForecast.forEach( x => {
      let a = new Date(x.dt_txt);
      document.getElementById(`dayofweek${day+1}`).textContent = dayofWeek[a.getDay()];
      document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
      day++
    
    });

  });


