$(document).ready(function(){
  $(".design-c").click(function(){
    $("#design-image").toggle()
    $("#design-para").toggle()
  });
  $(".devpt-c").click(function(){
    $("#devpt-image").toggle();
    $("#devpt-para").toggle();
  });

  $(".prdt-c").click(function(){
    $("#prdt-image").toggle();
    $("#prdt-para").toggle();
  });

  $("form").submit (function(event){
    var name =$("#name").val();
    alert("Thank you " + name + "for you message!Received successfully");
  });
});