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

// Accessory

let events = ["keyup", "touchend"];

// Functions

function removeSelectedClass() {
  for (let i = 0; i < tipBtns.length; i++) {
    tipBtns[i].classList.remove("selected");
  }
}

function calculateTip(tip) {
  const billValue = Number(billInputField.value);
  const numberOfPeopleValue = Number(numberOfPeopleField.value);

  const tipAmountPerPerson = Number((billValue * (tip / 100)).toFixed(2));

  const totalPerPerson = (numberOfPeopleValue * tipAmountPerPerson).toFixed(2);

  tipAmountDisplay.textContent = `$${tipAmountPerPerson}`;
  totalAmountDisplay.textContent = `$${totalPerPerson}`;

  resetBtn.classList.remove("unclickable");
}

function addAllWarnings() {
  billInputField.classList.add("empty-field");
  numberOfPeopleField.classList.add("empty-field");

  for (let i = 0; i < warningMessages.length; i++) {
    warningMessages[i].classList.remove("hidden");
  }
}

function removeAllWarnings() {
  billInputField.classList.remove("empty-field");
  numberOfPeopleField.classList.remove("empty-field");

  for (let i = 0; i < warningMessages.length; i++) {
    warningMessages[i].classList.add("hidden");
  }
}

function emptyBillInputField() {
  billInputField.classList.add("empty-field");
  numberOfPeopleField.classList.remove("empty-field");

  warningMessages[0].classList.remove("hidden");
  warningMessages[1].classList.add("hidden");
}

function emptyNumberOfPeopleInputField() {
  billInputField.classList.remove("empty-field");
  numberOfPeopleField.classList.add("empty-field");

  warningMessages[0].classList.add("hidden");
  warningMessages[1].classList.remove("hidden");
}

function addInputEventHandler(inputField, message, tipPercentage) {
  for (let i = 0; i < events.length; i++) {
    inputField.addEventListener(events[i], function (e) {
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
          inputField.classList.remove("empty-field");

          message.classList.add("hidden");

          calculateTip(tipPercentage);
          break;
        default:
          return;
      }
    });
  }
}

// Main functionality

for (let i = 0; i < tipBtns.length; i++) {
  tipBtns[i].addEventListener("click", function () {
    removeSelectedClass();

    tipBtns[i].classList.add("selected");

    tipInputField.value = "";

    const tipPercentage = tipBtns[i].textContent;
    const tipPercentageNumber = Number(
      tipPercentage.substring(0, tipPercentage.length - 1)
    );

    if (!billInputField.value && !numberOfPeopleField.value) {
      addAllWarnings();

      addInputEventHandler(
        billInputField,
        warningMessages[0],
        tipPercentageNumber
      );

      addInputEventHandler(
        numberOfPeopleField,
        warningMessages[1],
        tipPercentageNumber
      );
    } else if (!billInputField.value) {
      emptyBillInputField();

      addInputEventHandler(
        billInputField,
        warningMessages[0],
        tipPercentageNumber
      );
    } else if (!numberOfPeopleField.value) {
      emptyNumberOfPeopleInputField();

      addInputEventHandler(
        numberOfPeopleField,
        warningMessages[1],
        tipPercentageNumber
      );
    } else {
      removeAllWarnings();

      calculateTip(tipPercentageNumber);
    }
  });
}

tipInputField.addEventListener("click", removeSelectedClass);
tipInputField.addEventListener("keyup", function (e) {
  let eventCode = e.key;

  const tipPercentage = tipInputField.value;

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
        addAllWarnings();

        addInputEventHandler(billInputField, warningMessages[0], tipPercentage);
        addInputEventHandler(
          numberOfPeopleField,
          warningMessages[1],
          tipPercentage
        );
      } else if (!billInputField.value) {
        emptyBillInputField();

        addInputEventHandler(billInputField, warningMessages[0], tipPercentage);
      } else if (!numberOfPeopleField.value) {
        emptyNumberOfPeopleInputField();

        addInputEventHandler(
          numberOfPeopleField,
          warningMessages[1],
          tipPercentage
        );
      } else {
        removeAllWarnings();

        calculateTip(tipPercentage);
      }
      break;
    default:
      return;
  }
});

resetBtn.addEventListener("click", function () {
  removeAllWarnings();
  removeSelectedClass();

  billInputField.value = "";
  tipInputField.value = "";
  numberOfPeopleField.value = "";

  tipAmountDisplay.textContent = "$0.00";
  totalAmountDisplay.textContent = "$0.00";

  resetBtn.classList.add("unclickable");

  const allInputFields = document.querySelectorAll(".input");

  for (let i = 0; i < allInputFields.length; i++) {
    allInputFields[i].addEventListener(events[i], function () {
      return;
    });
  }
});
