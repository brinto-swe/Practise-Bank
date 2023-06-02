document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('connected')
    const depositField = document.getElementById('deposit-field');
    const depositString = depositField.value;
    const depositAmount = parseFloat(depositString);
    depositField.value = '';

    if(isNaN(depositAmount)){
        alert('Please Enter an amount');
        return;
    }


    const  depositTotal = document.getElementById('deposit-total');
    const depositTotalString = depositTotal.innerText;

    const depositTotalNumber =parseFloat(depositTotalString);
    
    const newDepositAmount = depositTotalNumber + depositAmount;
    
    depositTotal.innerText = newDepositAmount;


    const balanceTotal = document.getElementById('balance-total');
    const balanceString = balanceTotal.innerText;
    const balanceDefaultAmount = parseFloat(balanceString);

    const newTotalBalance = balanceDefaultAmount + depositAmount;

    
    balanceTotal.innerText = newTotalBalance;

    depositField.value = '';

})