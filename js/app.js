$(document).ready(function(){

    $(".hidden-menu").click(function () {
      $("ul").toggleClass("show", 400, "easeOutSine");
    });

    $(".info").click(function() {
      $(this).toggleClass('expand', 500);
    });

});
