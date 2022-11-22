M.textareaAutoResize($("#textarea"));
M.updateTextFields();

$(".datepicker").datepicker({
  format: "dd.mm.yyyy",
  setDefaultDate: true,
  firstDay: 1,
  selectMonths: true,
  selectYears: 2,
  i18n: {
    labelMonthNext: "Nexter Monat",
    labelMonthPrev: "Vorheriger Monat",
    labelMonthSelect: "Monat wählen",
    labelYearSelect: "Jahr wählen",
    months: [
      "Jan",
      "Feb",
      "Mär",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez",
    ],
    monthsShort: [
      "Jan",
      "Feb",
      "Mär",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Dez",
    ],
    monthsLong: [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ],
    weekdays: [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ],
    weekdaysShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    weekdaysAbbrev: ["S", "M", "D", "M", "D", "F", "S"],
    today: "Heute",
    close: "schliessen",
    cancel: "abbrechen",
    clear: "löschen",
    done: "wählen",
  },
});

$("#farbe").spectrum({
  type: "component",
});

$("select").formSelect();

$("#save").click(function (e) {
  e.preventDefault();
  console.log("senden");

  var send = true;
  var myName = $("#name").val();
  if (myName.length < 3) {
    send = false;
    M.toast({
      html: "Name ist kürzer als 3 Zeichen.",
      classes: "red darken-4 white-text",
    });
    $("#name").addClass("red");
  }
  $("#name").keyup(function (e) {
    var name = $("#name").val();
    $("#name").removeClass("red");
  });
  if (myName.includes(">")) {
    send = false;
  }
  if (myName.includes("<")) {
    send = false;
  }

  var id = $("#id").val();
  var url = "api.php";

  if (id != "") {
    url += "?id=" + id;
  }

  if (send) {
    $.ajax({
      type: "POST",
      url: url,
      data: {
        name: $("#name").val(),
        kraftstoff: $("#kraftstoff").val(),
        farbe: $("#farbe").val(),
        bauart: $("#bauart").val(),
        tanken: $("#tanken").val(),
        date: $("#date").val(),
        bemerkung: $("#beschreibung").val(),
      },
      dataType: "json",
      success: function (response) {
        showList();
        M.Modal.getInstance($(".modal")).close();
      },
    });
  }
});
