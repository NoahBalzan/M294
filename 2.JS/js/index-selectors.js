//Document ready
$(function () {
  //...HTML Code i.O
  //schreiben
  $("main").html("super Text");
  //lesen
  console.log($("main").html());
  $("main").append("<hr>jjjj");

  //CSS Selektoren
  $("[href]");
  $("a[target='_blank']");
  $(":button");
  $("p:first");
  $("p:last");
  $("p:even");
  $("p:odd");
  $("p:eq(2)");
  $("p:lt(2)");
  $("p:not(#test)"); //# = id
  $("p:first-child");
  $("p:last-child");
  $("p:nth-child(2)");
  $("p:nth-child(2n)");
  $("p:nth-child(2n+1");

  $(".class");
  $("#id");
  $("HTMLtag");
});
