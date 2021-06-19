const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const towns = jsonObject['towns'];
    const filtertowns = towns.filter(towns => towns.name == 'Preston' || towns.name == 'Soda Springs' || towns.name == 'Fish Haven');

    filtertowns.forEach(towns => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h4 = document.createElement('h4')
      let img = document.createElement('img');

      h2.textContent =  `${towns[i].name}`;
      h4.textContent = 'Year Founded : '  + towns[i].yearFounded;
      img.setAttribute('src', towns[i].photo);
      img.setAttribute('alt', `Towns photos ${towns[i].name}!`);

      card.append(h2);
      card.append(h4);
      card.append(img);

      document.querySelector('div.cards').append(card);
    })
  });