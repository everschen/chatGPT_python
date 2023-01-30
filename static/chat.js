$(document).ready(function(){
  $("#send").click(function(){
    var message = $("#message").val();
    $("#message").val("");
    $.get("/get?msg=" + message, function(data){
      addMessage("User", message, data);
    });
  });

  $("#message").keypress(function(e) {
    if(e.which == 13 && !e.shiftKey) {
      e.preventDefault();
      var message = $("#message").val();
      $("#message").val("");
      $.get("/get?msg=" + message, function(data){
        addMessage("User", message, data);
      });
    }
  });
});

function addMessage(user, message, response) {
  response = response.trim();
  response = response.replace(/^\n+/g, '');
  /*$("#output").append(`${user}: ${message}<pre>${response}</pre>`);*/
  $("#output").append(`<p>${user}: ${message}<pre>${response}</pre></p>`);
}
