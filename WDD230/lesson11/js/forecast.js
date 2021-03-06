/*I worked with brenda from my group and I got some help from Sterling and Pedro that are not from my group.*/


const cityid = "5604473";
const APPID = "598afcc840d433c248fad5fe3deff034";

const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityid}&appid=${APPID}&units=imperial`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const forecastDay = jsObject.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        console.log(forecastDay);

        forecastDay.forEach( x => {
            const dt = new Date(x.dt_txt);
            const weekDay = days[dt.getDay()];
            const dayHigh = Math.round(x.main.temp_max);
            const imagesrc = 'https://openweathermap.org/img/wn/' + x.weather[0].icon + '.png';

            let dayContainer = document.createElement('div');
            let weekDayBox = document.createElement('p');
            let forecastImg = document.createElement('img');
            let dayHighTemp = document.createElement('p');

            weekDayBox.textContent = weekDay;
            forecastImg.setAttribute('src', imagesrc);
            forecastImg.setAttribute('alt', "Weather Icon");
            dayHighTemp.textContent = dayHigh + ' °F';

            dayContainer.classList.add("days");
            dayContainer.appendChild(weekDayBox);
            dayContainer.appendChild(forecastImg);
            dayContainer.appendChild(dayHighTemp);

            document.querySelector('div.forecast').appendChild(dayContainer);

            console.log(forecastImg)

        });
  });

