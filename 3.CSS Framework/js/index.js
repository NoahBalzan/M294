//Document ready
$(function () {
  var carID;
  //Initialisierung Modal
  $(".modal").modal();

  $.ajax({
    type: "GET",
    url: "api.php",
    dataType: "json",
    success: function (response) {
      console.log(response.jwt.admin);
      if (response.jwt.admin) {
        console.log("admin");
        $("#login").hide();
      } else {
        console.log("kein admin");
        $("#logout").hide();
      }
    },
  });

  $("#login").click(function (e) {
    e.preventDefault();
    $("#mod_content").load("pages/login.html", function () {
      $.getScript("js/login.js");
    });
  });

  $("#logout").click(function (e) {
    e.preventDefault();
    $.ajax({
      type: "LOGOUT",
      url: "api.php",
      dataType: "json",
      success: function (response) {
        console.log(response);
        $("#login").show();
        $("#logout").hide();
        M.toast({ html: "Goodbye", classes: "blue darken-4" });
      },
    });
  });

  //schreiben von Daten
  /*   $.ajax({
    type: "POST",
    url: "api.php",
    data: {
      name: "harald",
      kraftstoff: "diesel",
      farbe: "indigo",
      bauart: "Cabriolet",
      tanken: 9,
      date: "07.08.2021",
      bemerkung: "Beschreibung 04",
    },
    dataType: "json",
    success: function (response) {
      console.log(response);
    },
  }); */

  //ID wird bei anklicken auf Konsole ausgegeben
  /*   $("#datatable tbody tr").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("data-id");
    console.log(id);
  }); */

  $("#add").click(function (e) {
    e.preventDefault();
    console.log("ADD .......");
    //Zuerst html, danach via function js laden
    $("#mod_content").load("pages/carForm.html", function () {
      $.getScript("js/carForm.js");
    });
  });

  showList();

  //Beispiel VOR Handlebar Template
  /* 
  $("#datatable .tank").click(function (e) {
    e.preventDefault();
    var id = $(this).parent().parent().attr("data-id");
    console.log("tanke: " + id);
  }); */
});

function showList() {
  var template = $("#template").html();
  var hb_template = Handlebars.compile(template);

  //JSON holen
  $.getJSON("api.php", function (response) {
    //console.log(hb_template(response));
    console.log(response); //evtl. wichtig für debugging
    $("#datatable tbody").html(hb_template(response));

    $("#datatable .tank").click(function (e) {
      e.preventDefault();
      var id = $(this).parent().parent().attr("data-id");
      console.log("tanke: " + id);
      var car;
      $.ajax({
        type: "GET",
        url: "api.php?id=" + id,
        data: "data",
        dataType: "json",
        success: function (response) {
          car = Object.values(response.data[0]);
          console.log(car);
          $.ajax({
            type: "POST",
            url: "api.php?id=" + id,
            data: {
              id: car[0],
              name: car[1],
              kraftstoff: car[2],
              farbe: car[3],
              bauart: car[4],
              tanken: parseInt(car[5]) + 1,
              date: car[6],
              bemerkung: car[7],
              status: car[8],
            },
            dataType: "json",
            success: function (response) {
              showList();
            },
          });
        },
      });
    });

    $("#datatable .edit").click(function (e) {
      e.preventDefault();
      var id = $(this).parent().parent().attr("data-id");
      console.log("edit: " + id);
      $("#mod_content").load("pages/carForm.html", function () {
        $.getScript("js/carForm.js");
        //Daten holen und Felder füllen
        $.getJSON("api.php?id=" + id, function (response) {
          console.log(response);
          $("#id").val(response.data[0].id);
          $("#name").val(response.data[0].name);
          $("#kraftstoff").val(response.data[0].kraftstoff);
          $("#farbe").val(response.data[0].farbe);
          $("#farbe").spectrum({
            color: response.data[0].farbe,
            type: "component",
          });
          $("#bauart").val(response.data[0].bauart);
          $("#tanken").val(response.data[0].tanken);
          $("#date").val(response.data[0].date);
          $("#bemerkung").val(response.data[0].bemerkung);
          if (response.data[0].status == "checked") {
            $("#status").prop("checked", true);
          }
          M.updateTextFields();
          $("select").formSelect();
        });
        var modal = M.Modal.getInstance($(".modal"));
        modal.open();
      });
    });

    $("#datatable .delete").click(function (e) {
      e.preventDefault();
      var id = $(this).parent().parent().attr("data-id");
      console.log("delete: " + id);
      $.ajax({
        type: "DELETE",
        url: "api.php?id=" + id,
        dataType: "json",
        success: function (response) {
          showList();
        },
      });
    });
  });
}
