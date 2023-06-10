// Withdraw Process 

// Step 1- All function will be used from previous file because all are same file... 

document.getElementById('withdraw-button').addEventListener('click', function(){
    const newWithdrawAmount = getInputValueFromId('withdraw-field');
    
    // Add balance in the withdraw section 
    const previousWithdrawAmount = getTextValueFromId('withdraw-total');
    const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;

    setTextElementValueFromId('withdraw-total', totalWithdrawAmount);

    // Cut balance from the balance section 
    const previousBalanceTotal = getTextValueFromId('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueFromId('balance-total', newBalanceTotal);
})