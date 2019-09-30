$(document).ready(function(){
  $("#design").click(function(){
    $("#design").toggle();
    $(".p1").toggle();
  });
  $(".p1").click(function(){
     $(".p1").toggle();
     $("#design").toggle();
  });

  $("#devpt").click(function(){
    $("#devpt").hide();
    $(".p2").show();
  });
  $(",p2").click(function(){
    $(".p2").hide();
    $("#devpt").show();
  });

  $("#prdt").click(function(){
    $("#prdt").hide();
    $(".p3").show();
  });
  $(".p3").click(function(){
    $(".p3").hide();
    $("#prdt").show();
  });




  $("form").submit (function(event){
    var name =$("#name").val();
    alert("Thank you " name + "for you message!Received successfully");
  });
});