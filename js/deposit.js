// Deposit component logic Start
// step 01: addEventListener to the deposit button
document.querySelector("#btn-deposit").addEventListener("click", function () {
  //   step 02: get the deposit amount from the deposit input field
  const depositField = document.querySelector("#deposit-field");
  // for input filed use .value to get the value from the inside of the input field.
  const depositAmount = parseFloat(depositField.value);

  // step 03: get the current deposit from the deposit total field

  const depositTotalElement = document.querySelector("#deposit-total");
  //  for non-input (element other than input, textarea) use .innerText to get the value from the inside of the span.
  const depositTotal = parseFloat(depositTotalElement.innerText);

  depositTotalElement.innerText = depositTotal + depositAmount;

  // step 04: get current balance total

   const balanceTotalElement = document.querySelector("#balance-total");
   const balanceTotal = parseFloat(balanceTotalElement.innerText);

   // step 05: calculate current balance total. and update the balance total
   const currentBalanceTotal = balanceTotal + depositAmount;

   balanceTotalElement.innerText = currentBalanceTotal;

  // step 05: clear the deposit input field
  depositField.value = "";
});

// Deposit component logic End
