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
    if (y === 0) {
        return -1;
    }
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
let delBtn = document.getElementById("delete")
let body = document.querySelector("body")

body.addEventListener('keypress', (e) => {
    let allowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','.']
    for (let i = 0; i < allowed.length; ++i) {
        if (e.key == allowed[i]) {
            const btn = document.getElementById(`${allowed[i]}`)
            btn.click()
        }
    }
})

function populateDisplay() {
    let btns = document.querySelectorAll(".num-btn")
    let display = document.querySelector(".input")
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.textContent == "." && display.textContent.includes(".")) {
                return
            }
            display.textContent += btn.textContent
        })
    })
}

body.addEventListener('keypress', (e) => {
    let allowed = ['+', '-', '/', '*']
    console.log(e.key)
    for (let i = 0; i < allowed.length; ++i) {
        if (e.key == allowed[i]) {
            const opBtn = document.getElementById(`${allowed[i]}`)
            opBtn.click()
            break
        }
        else if (e.key == "Enter") {
            const opBtn = document.getElementById("equals")
            opBtn.click()
            break
        }
    }
})

function getOperator() {
    let operators = document.querySelectorAll(".operator-btn")
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            num1 = getDisplay()
            clear()
            op = operator.textContent
        })
    })
}

populateDisplay()
getOperator()

equals.addEventListener('click', () => {
    num2 = getDisplay()
    let result = operate(op, num1, num2)
    if (result != - 1) {
        setDisplay(result)
        num1 = result
    }
    else {
        setDisplay("ERROR")
    }
})

acBtn.addEventListener('click', () => {
    clear()
    num1 = null
    num2 = null
    op = null
})

delBtn.addEventListener('click', () => {
    let display = document.querySelector(".input")
    display.textContent = display.textContent.slice(0, -1)
})

function setDisplay(value) {
    let display = document.querySelector(".input")
    display.textContent = value
}

function getDisplay() {
    let display = document.querySelector(".input")
    return +display.textContent
}

function clear() {
    let display = document.querySelector(".input")
    display.textContent = ""
}