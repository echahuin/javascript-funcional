function moneyBox(){
    let saveCoins = 0;
    return function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: ${saveCoins}`)
    }
}

const myMoneyBox = moneyBox()

myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(135);
