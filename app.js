const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");
const calculate = {
    "+": function (a, b) { return a + b },
    "-": function (a, b) { return a - b },
    "*": function (a, b) { return a * b },
    "/": function (a, b) { return a / b },
};
let operator = "";
let num1 = 0;
let num2 = 0;

calculator.addEventListener("click", (event) => {
    console.log(event.target.innerText);

    if (event.target.classList.contains("number")) {
        display.textContent += event.target.innerText;
    };
    if (event.target.classList.contains("operator") && event.target.textContent != "C") {
        num1 = parseInt(display.textContent);
        operator = event.target.textContent;
        display.textContent = "";
    };

    if (event.target.innerText === "=") {
        num2 = parseInt(display.textContent);
        display.textContent = calculate[operator](num1, num2);
        num1 = parseInt(display.textContent);
        num2 = 0;
    };
    if (event.target.innerText === "C") {
        operator = "";
        num1 = 0;
        num2 = 0;
        display.textContent = "";
    };
});

