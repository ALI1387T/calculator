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
// number guessing game
document.querySelector("#guessField").setAttribute("disabled", "")
document.querySelector("#Submit_guess").setAttribute("disabled", "")
let start_game = document.querySelector("#Submit_guess1")
start_game.addEventListener("click", () => {
    document.querySelector("#guessField").removeAttribute("disabled", "")
    document.querySelector("#Submit_guess").removeAttribute("disabled", "")
    document.querySelector("#Submit_guess1").setAttribute("hidden", "")
    namber_guess()
})

function namber_guess() {
    let player = prompt("player vs cpu = 1\nplayer vs player = 2")
    if (player == 1) {
        let random_number = Math.floor(((Math.random()) * 100))
        if (random_number == 0) {
            let random_number = Math.floor(((Math.random()) * 100))
        }
        console.log(random_number)
        let i = 0;
        addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                game_start()
            }
        })
        document.querySelector("#Submit_guess").addEventListener('click', game_start);
        function game_start() {
            foresat = 9 - i
            if (i != 10) {

                i += 1
                show_forsat = document.querySelector(".resultParas > h3 > big");
                show_forsat.innerHTML = foresat
                console.log(i)
                let ussr_guess = Number(document.querySelector("#guessField").value)
                let result = document.querySelector(".resultParas > h2 > big");

                if (ussr_guess && ussr_guess < random_number) {
                    result.innerHTML = "your guess too short";
                }
                else if (ussr_guess && ussr_guess > random_number) {
                    result.innerHTML = "your guess too big";
                }
                else if (ussr_guess && ussr_guess == random_number) {
                    result.innerHTML = "please enter your guess"
                    alert("you win\n\npress ok to restart game")
                    show_forsat.innerHTML = 10
                    random_number = Math.floor(((Math.random()) * 100))
                    i = 0
                }
                if (i == 10) {
                    result.innerHTML = "please enter your guess";
                    alert("you lose \n\npress ok to restart game")
                    show_forsat.innerHTML = 10
                    i = 0
                }
            }
        }
    }
    else if (player == 2) {
        let random_number = prompt("player1: please enter answer between 1 and 100 : ")
        console.log(random_number)
        let i = 0;
        addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                game_start()
            }
        })
        document.querySelector("#Submit_guess").addEventListener('click', game_start);
        function game_start() {
            foresat = 9 - i
            if (i != 10) {

                i += 1
                show_forsat = document.querySelector(".resultParas > h3 > big");
                show_forsat.innerHTML = foresat
                console.log(i)
                let ussr_guess = Number(document.querySelector("#guessField").value)
                let result = document.querySelector(".resultParas > h2 > big");
                if (ussr_guess && ussr_guess < random_number) {
                    result.innerHTML = "your guess too short";
                }
                else if (ussr_guess && ussr_guess > random_number) {
                    result.innerHTML = "your guess too big";
                }
                else if (ussr_guess && ussr_guess == random_number) {
                    result.innerHTML = "please enter your guess"
                    alert("player2 : you win\n\npress ok to restart game")
                    show_forsat.innerHTML = 10
                    random_number = Math.floor(((Math.random()) * 100))
                    i = 0
                }
                if (i == 10) {
                    result.innerHTML = "please enter your guess";
                    alert("player2 : you lose \n\npress ok to restart game")
                    random_number = prompt("player2: please enter answer between 1 and 100 : ")
                    show_forsat.innerHTML = 10
                    i = 0
                }
            }
        }
    }
}