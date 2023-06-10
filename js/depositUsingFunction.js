// Step 1 - Get the Deposit value from the input field and convert into a number 
function getInputValueFromId(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValueNumber = parseFloat(inputValueString);
    inputField.value = '';

    // if(isNaN(inputValueNumber)){
    //     window.alert('Please Enter an amount');
    //     return;
    // }
    return inputValueNumber;
}

// Step 2- Get the Previous Deposit value from the deposit total section and convert it into a number 
function getTextValueFromId(previousValue){
    const previousvalueField = document.getElementById(previousValue);
    const previousValueString = previousvalueField.innerText;
    const previousValueNumber = parseFloat(previousValueString);

    return previousValueNumber;
}

// Step 3- Set the total value in the Element fields
function setTextElementValueFromId(elementId, newTotal){
    const elementField = document.getElementById(elementId);
    elementField.innerText = newTotal;
} 




document.getElementById('deposit-button').addEventListener('click', function(){
    const newDepositAmount = getInputValueFromId('deposit-field');
    const previousdepositAmount = getTextValueFromId('deposit-total');
    const newDepositTotal = previousdepositAmount + newDepositAmount;

    setTextElementValueFromId('deposit-total', newDepositTotal);

    const previousBalanceAmount = getTextValueFromId('balance-total');
    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    setTextElementValueFromId('balance-total', newBalanceTotal);
    
})