//Document ready
$(function () {
/*   $("#datatable tbody tr").click(function (e) {
    e.preventDefault();
    var id = $(this).attr("data-id");
    console.log(id);
  }); */

  $.getJSON("data/daten.json",
    function (response) {
        console.log(response);
    }
  );

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
  
  $(document).ready(function(){
    $('.datepicker').datepicker();
  });
});
