$("#save").click(function (e) {
  e.preventDefault();
  $.ajax({
    type: "LOGIN",
    url:
      "api.php?username=" + $("#username").val() + "&password=" + $("#password").val(),
    dataType: "json",
    success: function (response) {
      console.log(response);
      if (response.jwt.admin) {
        $("#login").hide();
        $("#logout").show();
        M.toast({ html: "Hello Admin", classes: "green darken-4" });
      } else {
        M.toast({
          html: "Invalid username or password",
          classes: "red darken-4",
        });
      }
      M.Modal.getInstance($(".modal")).close();
    },
  });
});

