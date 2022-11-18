//Pro html Datei eine dazugehörige js für dessen expliziten Code
console.log("form.js loaded");

$("#send").click(function (e) {
  e.preventDefault();
  console.log("senden");
  var write = $("#name").val();
  console.log(write);
});

//Textarea
$("#textarea").val("New Text");
M.textareaAutoResize($("#textarea"));
M.updateTextFields();

//Datepicker
$(".datepicker").datepicker();

//Timepicker
$(".timepicker").timepicker();

//Colorpicker
$('#color-picker').spectrum({
    type: "component"
  });
  
//Dropdown
$('.dropdown-trigger').dropdown();

//Feld lesen
var read = $("#name").val();
console.log(read);

//Feld schreiben
$("#name").val("Text welcher geschrieben wird");
$("#name").addClass("valid");
M.updateTextFields();
