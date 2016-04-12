var stageCounter = 0;
var target = ".entrypoint";
var hasStarted = false;

$(window).keydown(function(e) { if (e.keyCode == 8) e.preventDefault(); });

$('.enter-icon').click(function(){
event.which == 13
$(target).append(newLetter);
});


$(window).keypress(function(event) {
  if (event.which == 13) {
    if (hasStarted != true) {
    $(".stage1").html("");
    $(".stage2").html("");
    $(".stage3").html("");
    $(".stage4").html("");
    $(".stage5").html("");
    $(".stage6").html("");
    $(".entrypoint").html("");
    hasStarted = true;

    }
  }

  if (hasStarted) {
  // press_enter();
  var newLetter = false;
  if (event.which == 13) {

    $(".enter-icon").css("background-color","black");
    $(".enter-icon").css("color","white");
    setTimeout(function(){ 
    $(".enter-icon").css("background-color","white");
    $(".enter-icon").css("color","black");
     }, 150);
    stageCounter++;

      if (stageCounter == 1) {
    //target = ".stage1";
    $(".stage1").html($(".entrypoint").html());
    $(".entrypoint").html("");
  }
  
    if (stageCounter == 2) {
    //target = ".stage2";
      $(".stage2").html($(".stage1").html());
      $(".stage1").html($(".entrypoint").html());
      $(".entrypoint").html("");
  }

    if (stageCounter == 3) {
    //target = ".stage3";
      $(".stage3").html($(".stage2").html());
      $(".stage2").html($(".stage1").html());
      $(".stage1").html($(".entrypoint").html());
      $(".entrypoint").html("");
    }

    if (stageCounter == 4) {
    //target = ".stage4";
      $(".stage4").html($(".stage3").html());
      $(".stage3").html($(".stage2").html());
      $(".stage2").html($(".stage1").html());
      $(".stage1").html($(".entrypoint").html());
      $(".entrypoint").html("");
  }

    if (stageCounter == 5) {
    //target = ".stage5";
      $(".stage5").html($(".stage4").html());
      $(".stage4").html($(".stage3").html());
      $(".stage3").html($(".stage2").html());
      $(".stage2").html($(".stage1").html());
      $(".stage1").html($(".entrypoint").html());
      $(".entrypoint").html("");
  }

    if (stageCounter >= 6) {
    //target = ".stage6";
      $(".stage6").html($(".stage5").html());
      $(".stage5").html($(".stage4").html());
      $(".stage4").html($(".stage3").html());
      $(".stage3").html($(".stage2").html());
      $(".stage2").html($(".stage1").html());
      $(".stage1").html($(".entrypoint").html());
      $(".entrypoint").html("");
  }


  }
  

//backspace

//a
  if (event.which == 97 || event.which == 65) {
   newLetter = $(".alphabet .letter-a").clone();     
   $(target).append(newLetter);
 }
 //b
  if (event.which == 98 || event.which == 66) {
   newLetter = $(".alphabet .letter-b").clone();     
   $(target).append(newLetter);
 }
 //c
  if (event.which == 99 || event.which == 67) {
   newLetter = $(".alphabet .letter-c").clone();     
   $(target).append(newLetter);
 }
 //d
  if (event.which == 100 || event.which == 68) {
   newLetter = $(".alphabet .letter-d").clone();     
   $(target).append(newLetter);
 }
 //e
  if (event.which == 101 || event.which == 69) {
   newLetter = $(".alphabet .letter-e").clone();     
   $(target).append(newLetter);
 }
 //f
   if (event.which == 102 || event.which == 70) {
   newLetter = $(".alphabet .letter-f").clone();     
   $(target).append(newLetter);
 }
 //g
   if (event.which == 103 || event.which == 71) {
   newLetter = $(".alphabet .letter-g").clone();     
   $(target).append(newLetter);
 }
 //h
   if (event.which == 104 || event.which == 72) {
   newLetter = $(".alphabet .letter-h").clone();     
   $(target).append(newLetter);
 }
 //i
   if (event.which == 105 || event.which == 73) {
   newLetter = $(".alphabet .letter-i").clone();     
   $(target).append(newLetter);
 }
 //j
   if (event.which == 106 || event.which == 74) {
   newLetter = $(".alphabet .letter-j").clone();     
   $(target).append(newLetter);
 }
 //k
   if (event.which == 107 || event.which == 75) {
   newLetter = $(".alphabet .letter-k").clone();     
   $(target).append(newLetter);
 }
 //l
   if (event.which == 108 || event.which == 76) {
   newLetter = $(".alphabet .letter-l").clone();     
   $(target).append(newLetter);
 }
 //m
   if (event.which == 109 || event.which == 77) {
   newLetter = $(".alphabet .letter-m").clone();     
   $(target).append(newLetter);
 }
  //n
   if (event.which == 110 || event.which == 78) {
   newLetter = $(".alphabet .letter-n").clone();     
   $(target).append(newLetter);
}
 //o
   if (event.which == 111 || event.which == 79) {
   newLetter = $(".alphabet .letter-o").clone();     
   $(target).append(newLetter);
 }
 //p
   if (event.which == 112 || event.which == 80) {
   newLetter = $(".alphabet .letter-p").clone();     
   $(target).append(newLetter);
 }
 //q
   if (event.which == 113 || event.which == 81) {
   newLetter = $(".alphabet .letter-q").clone();     
   $(target).append(newLetter);
 }
 //r
   if (event.which == 114 || event.which == 82) {
   newLetter = $(".alphabet .letter-r").clone();     
   $(target).append(newLetter);
 }
 //s
   if (event.which == 115 || event.which == 83) {
   newLetter = $(".alphabet .letter-s").clone();     
   $(target).append(newLetter);
 }
 //t
   if (event.which == 116 || event.which == 84) {
   newLetter = $(".alphabet .letter-t").clone();     
   $(target).append(newLetter);
 }
 //u
   if (event.which == 117 || event.which == 85) {
   newLetter = $(".alphabet .letter-u").clone();     
   $(target).append(newLetter);
 }
 //v
   if (event.which == 118 || event.which == 86) {
   newLetter = $(".alphabet .letter-v").clone();     
   $(target).append(newLetter);
 }
 //w
   if (event.which == 119 || event.which == 87) {
   newLetter = $(".alphabet .letter-w").clone();     
   $(target).append(newLetter);
 }
 //x
   if (event.which == 120 || event.which == 88) {
   newLetter = $(".alphabet .letter-x").clone();     
   $(target).append(newLetter);
 }
 //y
   if (event.which == 121 || event.which == 89) {
   newLetter = $(".alphabet .letter-y").clone();     
   $(target).append(newLetter);
 }
 //z
   if (event.which == 122 || event.which == 90) {
   newLetter = $(".alphabet .letter-z").clone();     
   $(target).append(newLetter);
 }
//space
   if (event.which == 32) {
   newLetter = $(".alphabet .letter-space").clone();     
   $(target).append(newLetter);
}


//   if (event.which == 32) {
//   newLetter = $(".alphabet .letter-space").clone();     
//   $(entrypoint).append(newLetter);
//}


}

});


//function press_enter() {
//  $('.small').attr('class', 'invisible');
//  $('.medium').attr('class', 'small');
//  $('.large').attr('class', 'medium');
//  $('.entrypoint').attr('class', 'large');
//  $('.wrapper').html('<div class="entrypoint"></div>');
//}