//event handler
document.getElementById("depositbtn").addEventListener("click", function () {
  const deposits = document.getElementById("deposit-input");
  const depositValueText = deposits.value;
  const depositValue = parseFloat(depositValueText);

  const desposit = document.getElementById("curent-deposit");
  const previusDpositAmontText = desposit.innerText;
  const previusDpositAmont = parseFloat(previusDpositAmontText);
  const newDepositTotal = parseFloat(previusDpositAmont + depositValue);

  desposit.innerText = newDepositTotal;

  //Account update balance
  const balanceTotal = document.getElementById("curent-blance");
  const balanceValueText = balanceTotal.innerText;
  console.log(balanceValueText);
  const balanceValue = parseFloat(balanceValueText);

  const totalBalance = balanceValue + newDepositTotal;
  balanceTotal.innerText = totalBalance;

  deposits.value = "";
});
//withdraw process
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withDrawInput = document.getElementById("withdraw-input");
    const withDrawInputText = withDrawInput.value;
    const withDrawInputValue = parseFloat(withDrawInputText);

    //relation with withdraw field
    const withdraw = document.getElementById("curent-withdraw");
    const withdrawChangeText = withdraw.innerText;
    const withdrawChangeValue = parseFloat(withdrawChangeText);
    const withdrawTotal = withDrawInputValue + withdrawChangeValue;
    withdraw.innerText = withdrawTotal;
    //Account update balance
    const balanceTotal = document.getElementById("curent-blance");
    const balanceValueText = balanceTotal.innerText;
    console.log(balanceValueText);
    const balanceValue = parseFloat(balanceValueText);

    const totalBalance = balanceValue - withdrawTotal;
    balanceTotal.innerText = totalBalance;

    withDrawInput.value = "";
  });
