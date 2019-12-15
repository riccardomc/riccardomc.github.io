$(document).ready(function(){

  $("#typer").typed({
    strings: ["Hi! I am Riccardo,"],
    typeSpeed: 5,
    startDelay: 500
  });

  $("#front").delay(1500).fadeTo("slow", 0, function(){
    $("#front").remove();
  });

  $('.i-link')
    .mouseenter(function(){
      var type = $(this).data('icon');
      var name = ('#icon-' + type);
      $(name).fadeTo(200, 0.3);
    })
    .mouseleave(function(){
      var type = $(this).data('icon');
      var name = ('#icon-' + type);
      $(name).fadeOut(200);
    });


// END
});
