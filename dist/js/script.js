"use strict";

// Elements

const tipBtns = document.querySelectorAll(".tip-btn");
const tipInputField = document.querySelector(".tip-input");

// Functions

function removeSelectedClass() {
  for (let i = 0; i < tipBtns.length; i++) {
    tipBtns[i].classList.remove("selected");
  }
}

// Main functionality

/*

Manipulating with 'selected' active class...

On ANY clicked button with '%', it'll add a darker cyan background and text color. On the other side, when input field for percentages is clicked ('Custom'), it'll remove all colors from previously clicked buttons...

*/

for (let i = 0; i < tipBtns.length; i++) {
  tipBtns[i].addEventListener("click", function () {
    removeSelectedClass();

    tipBtns[i].classList.add("selected");
  });
}

tipInputField.addEventListener("click", removeSelectedClass);
