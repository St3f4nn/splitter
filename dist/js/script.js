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

function calculateTip(tip) {
  const billValue = Number(billInputField.value);

  const tipAmountPerPerson = Number((billValue * (tip / 100)).toFixed(2));

  const totalPerPerson = (billValue + tipAmountPerPerson).toFixed(2);

  tipAmountDisplay.textContent = tipAmountPerPerson;
  totalAmountDisplay.textContent = totalPerPerson;

  resetBtn.classList.remove("unclickable");
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

      const tipPercentage = tipBtns[i].textContent;
      const tipPercentageNumber = Number(
        tipPercentage.substring(0, tipPercentage.length - 1)
      );

      calculateTip(tipPercentageNumber);
    }
  });
}

tipInputField.addEventListener("click", removeSelectedClass);
tipInputField.addEventListener("keyup", function (e) {
  let eventCode = e.key;

  switch (eventCode) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case "Backspace":
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

        const tipPercentage = tipInputField.value;

        calculateTip(tipPercentage);
      }
      break;
    default:
      return;
  }
});
