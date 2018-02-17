// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    // var newSleep = $(this).data("newsleep");

    // var newSleepState = {
    //   sleepy: newSleep
    // };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
    //  data: newSleepState
    }).then(
      function() {
        console.log("Yum Yum");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#newBurgerInput").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
