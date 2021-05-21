const fav = document.querySelector('#fav');
const button = document.querySelector('button');
const output = document.querySelector('.list');



button.addEventListener('click', () => {
  if (fav.value != '') {
    //create the elements that will appeared in the list
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    //change the properties for those the user will put...textcontent
    li.textContent = fav.value;
    deletebutton.textContent = '❌';
    // add the button to the li (delete)
    li.append(deletebutton);
    output.append(li);
    deletebutton.addEventListener('click', function() {
      output.removeChild(li);
      fav.focus;
    });

    fav.value = '';
    fav.focus;
  }
});
 