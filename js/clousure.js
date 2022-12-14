//funcion que retorna otra funcion, ademas recuerda el scope en el que fueron creadas


//function example for clousure
function buildSum(a){
    return function (b) {
        return a+b;
    }

}

const addFive = buildSum(5)
console.log(addFive(5)) // 10

// --------------------------------Oscar Barajas, Clousure----------------------


function greeting(){
    let userName = 'Edgar'
    return function displayUserName () {
        return `Hello ${userName}`;
    }
}

const g = gereting();
console.log(g)
console.log(g())

// --------------------------------Oscar Barajas, Clousure----------------------

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
