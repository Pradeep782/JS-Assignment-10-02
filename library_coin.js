// use strict makes the js code to be executed in the strict mode.
"use strict";

// creating the constructor
class Coins {
  constructor(cents) {
    this.cents = cents;
  }

  // validating the entered input.
  isValid() {
    if (isNaN(this.cents) || this.cents == "") {
      return false;
    } else if (this.cents <= 0 || this.cents >= 100) {
      return false;
    } else {
      return true;
    }
  }

  //calculating number of quaters
  calculate_quaters() {
    let quarter = this.cents / 25;
    quarter = Math.floor(quarter);
    this.cents = this.cents % 25;
    return quarter;
  }

  //calculating number of dimes
  calculate_dimes() {
    let dime = this.cents / 10;
    dime = Math.floor(dime);
    this.cents = this.cents % 10;
    return dime;
  }

  //calculating number of nickels
  calculate_nickels() {
    let nickel = this.cents / 5;
    nickel = Math.floor(nickel);
    return nickel;
  }

  //calculating number of penneis
  calculate_pennies() {
    let pennie = this.cents % 5;
    return pennie;
  }
}
