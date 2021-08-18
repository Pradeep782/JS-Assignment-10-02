// use strict makes the js code to be executed in the strict mode.
"use strict";

// when the window is loaded the below function will be executed.
$(document).ready(() => {
  // adding the click event listener on the button whose id is calculate.
  $("#calculate").click(() => {
    // Assiging the cents entered to a variable named cents.
    let cents = new Coins($("#cents").val().trim());

    // checking whether the input entered is valid or not.
    if (cents.isValid()) {
      $("#cents").next().text("");
      // Displaying the no of quarters.
      $("#quarters").val(cents.calculate_quaters());
      // Displaying the no of dimes.
      $("#dimes").val(cents.calculate_dimes());
      // displaying the no of nickles
      $("#nickels").val(cents.calculate_nickels());
      // Displaying the no of nickles
      $("#pennies").val(cents.calculate_pennies());
    } else {
      // giving the error message if entered input is not valid.
      $("#cents").next().text("Please enter a valid number");
    }
  });
});
