//calcuator
let display = document.querySelector("#display")
let backvalue = "";
function btn(val) {
    if (display.value == 0) { display.value = "" }
    display.value += val
    backvalue = display.value
}

function btnk(k) {
    function keys(key) {
        if (k === key) {
            k = k.replace("*", "×")
            k = k.replace("/", "÷")
            if (display.value == 0) { display.value = "" }
            display.value += k
            backvalue = display.value
        }
    }
    if (k == "Enter") {
        sum()
    }
    else if (k == "Backspace") {
        C()
    }
    else if (k == ("Delete")) {
        AC()
    }
    keys("1")
    keys("2")
    keys("3")
    keys("4")
    keys("5")
    keys("6")
    keys("7")
    keys("8")
    keys("9")
    keys("0")
    keys("*")
    keys("/")
    keys("+")
    keys("-")
}
function AC() {
    display.value = "0"
}
function C() {
    let display_length = display.value.length
    display.value = display.value.slice(0, display_length - 1)
    if (display.value == "") { display.value = "0" }
}
function sum() {
    backvalue = backvalue.replace("×", "*")
    backvalue = backvalue.replace("÷", "/")
    let show_sum = eval(backvalue)
    display.value = show_sum
}