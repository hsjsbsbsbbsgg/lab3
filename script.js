
let screen = document.getElementById("screen");

function show(value) {
    if (screen.innerText == "0") {
        screen.innerText = value;
    } else {
        screen.innerText = screen.innerText + value;
    }
}

function clearScreen() {
    screen.innerText = "0";
}

function calculate() {
    screen.innerText = eval(screen.innerText);
}