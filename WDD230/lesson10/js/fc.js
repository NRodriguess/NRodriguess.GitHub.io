const cityid = "5604473";
const APPID = "598afcc840d433c248fad5fe3deff034";

const apiURL = `http://api.openweathermap.org/data/2.5/forecast?id=${cityid}&appid=${APPID}&units=imperial`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const fiveDay = jsObject.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        console.log(fiveDay);

        fiveDay.forEach( x => {
            const d = new Date(x.dt_txt);
            const weekDay = days[d.getDay()];
            const dayHigh = Math.round(x.main.temp_max);
            const imagesrc = 'https://openweathermap.org/img/wn/' + x.weather[0].icon + '.png';

            let dayContainer = document.createElement('div');
            let weekDayContainer = document.createElement('p');
            let forecastImg = document.createElement('img');
            let dayHighTemp = document.createElement('p');

            weekDayContainer.textContent = weekDay;
            forecastImg.setAttribute('src', imagesrc);
            forecastImg.setAttribute('alt', "Weather Icon");
            dayHighTemp.textContent = dayHigh + ' °F';

            dayContainer.classList.add("five-day");
            dayContainer.appendChild(weekDayContainer);
            dayContainer.appendChild(forecastImg);
            dayContainer.appendChild(dayHighTemp);

            document.querySelector('div.five-wrap').appendChild(dayContainer);

            console.log(forecastImg)

        });
  });