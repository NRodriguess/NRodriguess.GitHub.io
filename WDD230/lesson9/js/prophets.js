const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let img = document.createElement('img')
      let h4 = document.createElement('p')
      let p = document.createElement('p')

      h2.innerHTML =  `${prophets[i].name} <span class="purple">${prophets[i].lastname}</span>`;
      h4.innerHTML = 'Date of Birth - '  + prophets[i].birthdate;
      p.innerHTML = 'Date of Place - '  + prophets[i].birthplace;
      img.setAttribute('src', prophets[i].imageurl);
      img.setAttribute('alt', `The official portrait of ${prophets[i].name} ${prophets[i].lastname}!`);
      


      card.append(h2);
      card.append(h4);
      card.append(p);
      card.append(img);



      document.querySelector('div.cards').append(card);

    }


  });