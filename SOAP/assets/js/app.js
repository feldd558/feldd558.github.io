$(".hoverarea").on({
mouseenter: function () {
    $(".hoverarea").addClass("hoverareahover");
  },

mouseleave: function () {
    $(".hoverarea").removeClass("hoverareahover");
  }
});

$(".about").click(function() {
	window.alert("\nLet's work together! \n-Dan");
});