


document.getElementById('DepositBtn').addEventListener('click', function () {
    const DepositField = document.getElementById('DepositField')
    // get the value inside the amount
    const newDepositAmountString = DepositField.value
   const newDepositAmount = parseFloat(newDepositAmountString)

   DepositField.value = '';
   if(isNaN (newDepositAmount)){
    alert ('please provide a valid number');
    return;
   }


    // get the current deposit total 
    const depositTotalElement = document.getElementById('depositTotal')
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    const currentDepositTotal = previousDepositTotal + newDepositAmount
    depositTotalElement.innerText = currentDepositTotal;

    // get balance total 
    const totalBalanceElement = document.getElementById('totalBalance')
    const preBalanceTotalString = totalBalanceElement.innerText
    const preTotalBalance = parseFloat(preBalanceTotalString)

    // calculate total balance 
    const currentBalanceTotal = preTotalBalance + newDepositAmount
    totalBalanceElement.innerText = currentBalanceTotal

   
    
})


// withdraw js 
document.getElementById('withdrawBtn').addEventListener('click', function(){
   const windowField = document.getElementById('windowField')
   const newAmountWithdrawStrong = windowField.value
   const newAmountWithdraw = parseFloat(newAmountWithdrawStrong)
   windowField.value = '';
   if(isNaN (newAmountWithdraw)){
    alert ('please provide a valid number');
    return;
   }
//    console.log(typeof(newAmountWithdraw))

   const withdrawTotalElement = document.getElementById('withdrawTotal')
    const previousWithdrawTotalString = withdrawTotalElement.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)
    // console.log(previousWithdrawTotal)

   

    windowField.value = '';


    const balanceTotalElement = document.getElementById('totalBalance')
    const previousBalanceTotalString = balanceTotalElement.innerText
    const previousBalanceTotal = parseFloat (previousBalanceTotalString)

    if(newAmountWithdraw > previousBalanceTotal ){
        alert ('not enough balance')
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newAmountWithdraw ;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotal = previousBalanceTotal - newAmountWithdraw

    balanceTotalElement.innerText = balanceTotal;




})




