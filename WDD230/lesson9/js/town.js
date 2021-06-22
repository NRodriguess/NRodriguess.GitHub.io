const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven' || towns[i].name == 'Preston');
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p = document.createElement('p')
      let year = document.createElement('year')
      let population = document.createElement('population')
      let annual = document.createElement('annual')
      let img = document.createElement('img');
    
      h2.innerHTML =  `${towns[i].name}`;
      p.innerHTML = `${towns[i].motto}`;
      year.innerHTML = '<br> Year Founded: ' + `${towns[i].yearFounded}</br>`;
      population.innerHTML = '<br> Population: ' + `${towns[i].currentPopulation}</br>`;
      annual.innerHTML = '<br> Annual Raim Fall: ' + `${towns[i].averageRainfall}</br>`;
      img.setAttribute('src', towns[i].photo);
      img.setAttribute('alt', `Towns photos ${towns[i].name}!`);

      card.append(h2);
      card.append(p);
      card.append(year);
      card.append(population);
      card.append(annual);
      card.append(img);

      document.querySelector('div.cards').append();
    }}
  );