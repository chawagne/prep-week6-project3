/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {



// Question #3
// $("button.changeColor").on("click", function(){
//     $("ul li:nth-child(3)").addClass("randomColor");
//
// } )
$(".changeColor").click(function(){
  $("ul li:nth-child(3)").css("color","#8A2BE2");
});

// Question #1
$("ul li:nth-child(4)").on("click", function () {
  $(this).append("<li>Aaaayyyyyy!</li>");
})


// Question #2

$("#removeLi").on("click", function () {
  $("ul li:nth-child(2)").remove();
})
// Question #4
$("ul li:last").on("click", function() {
    $("ul li").hide(0);
    $("ul li:last").show().css("font-size", "40px");
})

// Question #5
$(".cute").on("click", function () {
  $(".clones").append($(".cute").clone(true));
})

  // Question #6
$("body").on("dblclick", function () {
  $("#makeSquare").css("border-radius","0px").css("width","120px");
})

// Question #7 WIP
// $(".swatches").each(function(){
//             alert($(this).())})


  // Question #8
$("#hover").hover(function (){
  $("#hover").css("background-color","red");
    $("#hover").on("click", function () {
      $("#hover").toggleClass("green");
  })
});



});
