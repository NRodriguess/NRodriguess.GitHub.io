//I worked with Brenda from my group to create those codes//
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven" || towns[i].name == "Preston") {
            let card = document.createElement('section');
            let text = document.createElement('div')
            let h2 = document.createElement('h2');
            let motto = document.createElement('p')
            let founded = document.createElement('p')
            let population = document.createElement('p')
            let rainfall = document.createElement('p')
            let img = document.createElement('img')

            text.classList.add('citytown')
            

            h2.textContent = `${towns[i].name}`;
            motto.textContent = `${towns[i].motto}`;
            founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Population: ' + towns[i].currentPopulation;
            rainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
            img.setAttribute('src', `images/${towns[i].photo}`);
            img.setAttribute('alt', 'Towns Photos' + towns[i].name);

            text.appendChild(h2);
            text.appendChild(motto)
            text.appendChild(founded);
            text.appendChild(population);
            text.appendChild(rainfall);
            card.appendChild(text)
            card.appendChild(img);

            document.querySelector('div.cards').appendChild(card);
    }}
  });