
let thedate = new Date();
let weekDay = thedate.getDate();
if (thedate.getDay() == 6 ) { 
  document.querySelector('aside').style.display = 'block'
}
else {
  document.querySelector('aside').style.display = 'none'
}