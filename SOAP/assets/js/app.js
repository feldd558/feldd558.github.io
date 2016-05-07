
//object = "ck".html
//
//object.onmouseover(function(){
//    $("ck").html.addClass("ckhover");
//});

$(".ck").hover(
  function () {
    $(this).addClass("ckhover");
    $(".about").addClass("abouthover");
  }
);

$(".about").click(function() {
	window.alert("\nLet's work together! \n-Dan");
});