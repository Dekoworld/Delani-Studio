//business logic...>

$(document).ready(function() {
  $("p").click(function() {
    $("img").show();
  });
});
$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});



function confirm(){
  alert("Message was received successfully!Thank you for reaching Delani Studio");
}
