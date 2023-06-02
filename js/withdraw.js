document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmountNumber= parseFloat(withdrawAmountString);


    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotal.innerText;
    const withdrawTotalNumber = parseFloat(withdrawTotalString);

    const newWithdrawTotal = withdrawAmountNumber + withdrawTotalNumber;

    withdrawTotal.innerText = newWithdrawTotal;



    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalString);

    const newWithdrawBalance = balanceTotalNumber - withdrawAmountNumber;

    balanceTotal.innerText = newWithdrawBalance;
})