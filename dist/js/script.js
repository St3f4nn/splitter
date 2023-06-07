"use strict";

// Elements

const billInputField = document.querySelector("#bill");
const numberOfPeopleField = document.querySelector("#people-number");

const tipBtns = document.querySelectorAll(".tip-btn");
const tipInputField = document.querySelector(".tip-input");

const tipAmountDisplay = document.querySelector("#tip-amount");
const totalAmountDisplay = document.querySelector("#total-amount");

const resetBtn = document.querySelector("#reset-btn");

const warningMessages = document.querySelectorAll(".warning-message");

// Functions

function removeSelectedClass() {
  for (let i = 0; i < tipBtns.length; i++) {
    tipBtns[i].classList.remove("selected");
  }
}

// Main functionality

for (let i = 0; i < tipBtns.length; i++) {
  tipBtns[i].addEventListener("click", function () {
    removeSelectedClass();

    tipBtns[i].classList.add("selected");

    if (!billInputField.value && !numberOfPeopleField.value) {
      billInputField.classList.add("empty-field");
      numberOfPeopleField.classList.add("empty-field");

      for (let i = 0; i < warningMessages.length; i++) {
        warningMessages[i].classList.remove("hidden");
      }
    } else if (!billInputField.value) {
      billInputField.classList.add("empty-field");
      numberOfPeopleField.classList.remove("empty-field");

      warningMessages[0].classList.remove("hidden");
      warningMessages[1].classList.add("hidden");
    } else if (!numberOfPeopleField.value) {
      billInputField.classList.remove("empty-field");
      numberOfPeopleField.classList.add("empty-field");

      warningMessages[0].classList.add("hidden");
      warningMessages[1].classList.remove("hidden");
    } else {
      billInputField.classList.remove("empty-field");
      numberOfPeopleField.classList.remove("empty-field");

      for (let i = 0; i < warningMessages.length; i++) {
        warningMessages[i].classList.add("hidden");
      }

      const billValue = Number(billInputField.value);

      const tipPercentage = tipBtns[i].textContent;
      const tipPercentageNumber = Number(
        tipPercentage.substring(0, tipPercentage.length - 1)
      );

      const tipAmountPerPerson = Number(
        (billValue * (tipPercentageNumber / 100)).toFixed(2)
      );

      const totalPerPerson = billValue + tipAmountPerPerson;

      tipAmountDisplay.textContent = tipAmountPerPerson;
      totalAmountDisplay.textContent = totalPerPerson;

      resetBtn.classList.remove("unclickable");
    }
  });
}

tipInputField.addEventListener("click", removeSelectedClass);
