//Document ready
$(function () {
  $("#in").hide();

  $("main").prepend("text <hr>");
  $("main").after("OOOOOOOOOO");
  $("main").before("XXXXXXXXX"); //für dropdown-Icons geeignet

  $("main").click(function (e) {
    e.preventDefault();
    console.log("main click");

    /*     if ($("main").hasClass("blue")) {
      $("main").removeClass("blue");
      //$("#in").hide();
      $("#in").fadeOut(5000);
    } else {
      $("main").addClass("blue");
      //$("#in").show();
      $("#in").fadeIn(5000);
    } */

    $("main").toggleClass("blue");
  });

  $(".liste li").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("data-id");
    console.log(id);
  });
});

/* $("#click").click(function (e) {
  alert("click");
});

$("#dblclick").dblclick(function (e) {
  alert("dblclick");
}); */

//Mouse Events
/* - click
- dblclick
- mouseenter
- mouseleave */
