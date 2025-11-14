$(document).ready(function() {
  $(".card").addClass("card--visible");

  // Глитч линии раз в несколько секунд
  setInterval(() => {
    $(".divider").addClass("glitch");
    setTimeout(() => $(".divider").removeClass("glitch"), 180);
  }, 4000 + Math.random() * 3000);
});