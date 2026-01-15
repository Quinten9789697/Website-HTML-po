// Set the date we're counting down to
var countDownDate = new Date("jan 21, 2026 11:36:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = "Het event start over: " + days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    var elapsedTime = Math.abs(distance);
    var elapsedDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    var elapsedHours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var elapsedMinutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    var elapsedSeconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    
    document.getElementById("demo").innerHTML = "Het event was: " + elapsedDays + "d " + elapsedHours + "h " + elapsedMinutes + "m " + elapsedSeconds + "s " + "geleden.";
  }
}, 1000);


