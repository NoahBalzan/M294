//Document ready
$(function () {
  //Initialisierung Modal
  $(".modal").modal();

  //ID wird bei anklicken auf Konsole ausgegeben
  /*   $("#datatable tbody tr").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("data-id");
    console.log(id);
  }); */

  /*   $.getJSON("api.php", function (response) {
    console.log(response);
  }); */

  var template = $("#template").html();
  var hb_template = Handlebars.compile(template);

  //JSON holen
  $.getJSON("api.php", function (response) {
    //console.log(hb_template(response));
    $("#datatable tbody").html(hb_template(response));

    $("#datatable .tank").click(function (e) {
      e.preventDefault();
      var id = $(this).parent().parent().attr("data-id");
      console.log("tanke: " + id);
    });

    $("#datatable .edit").click(function (e) {
      e.preventDefault();
      var id = $(this).parent().parent().attr("data-id");
      console.log("edit: " + id);
    });

    $("#datatable .delete").click(function (e) {
      e.preventDefault();
      var id = $(this).parent().parent().attr("data-id");
      console.log("delete: " + id);
    });

    $("#add").click(function (e) {
      e.preventDefault();
      console.log("ADD .......");
      //Zuerst html, danach via function js laden
      $("#mod_content").load("pages/form.html", function () {
        $.getScript("js/form.js");
      });
    });
  });

  //Beispiel vor der Handlebar Template
  /* 
  $("#datatable .tank").click(function (e) {
    e.preventDefault();
    var id = $(this).parent().parent().attr("data-id");
    console.log("tanke: " + id);
  }); */
});
