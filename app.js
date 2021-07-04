function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}


function operate(operator, operand1, operand2) {
    switch (operator) {
        case '+':
            return add(operand1, operand2)
        case '-':
            return subtract(operand1, operand2)
        case '*':
            return multiply(operand1, operand2)
        case '/':
            return divide(operand1, operand2)
        default:
            return -1
    }
}

let num1 = null;
let num2 = null;
let op = null;
let equalsop = document.getElementById("equals")
let acBtn = document.getElementById("clear")

function populateDisplay() {
    let btns = document.querySelectorAll(".num-btn")
    let display = document.querySelector(".input")
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            display.textContent = btn.textContent
            if(num1 != null) num2 = parseInt(display.textContent);
            else num1 = parseInt(display.textContent);
            console.log(display.textContent)
            return display.textContent
        })
    })
}

function getOperator() {
    let operators = document.querySelectorAll(".operator-btn")
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            console.log(operator.textContent)
            op = operator.textContent;
            return operator.textContent;
        })
    })
}

populateDisplay()
getOperator()

equals.addEventListener('click', () => {
    console.log(operate(op,num1,num2))
    let result = operate(op,num1,num2)
    if(result != - 1){
        setDisplay(result)
        num1 = result
    }
    else setDisplay("ERROR")
})

acBtn.addEventListener('click', () => {
    clear()
    num1 = null
    num2 = null
    op = null
})

function setDisplay(value){
    let display = document.querySelector(".input")
    display.textContent = value
}

function clear(){
    let display = document.querySelector(".input")
    display.textContent = ""
}

// function evaluate(){
//     let num1 = populateDisplay()
//     let operators = document.querySelectorAll(".operator-btn")
//     let op = "";
//     let clicked = false
//     operators.forEach(operator => {
//         operator.addEventListener('click', () => {
//             op = operator.textContent;
//             // clicked = true
//             let num2 = populateDisplay()    
//             if(num2){
//             console.log(num2)
//             console.log(operate(op,num1,num2))}
//         })
//     })
//     if(clicked){
//     }
// }

// evaluate()

function driver() {
    let num1 = populateDisplay()
    let operator = getOperator()
    let num2 = 20
    // while(!(num1 && num2 && operator)){
    //     let num1 = populateDisplay()
    //     let operator = getOperator()
    //     let num2 = 20
    // }
    console.log(num1)
    console.log(num2)
    console.log(operator)
    // let result = operate(operator, num1, num2)
    // console.log(result)
    // setDisplay(result)
}