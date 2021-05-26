function check() {
  var now = new Date();
  var month = now.getMonth();
  var dayOfMonth = now.getDate();
  var dayOfWeek = now.getDay();
  let output = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";

  if (dayOfWeek == 3 ) {   //0 is Sunday, 6 is Saturday
   output = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";

} else {
     
  }
  
  document.getElementById("output").innerHTML = output;
}

