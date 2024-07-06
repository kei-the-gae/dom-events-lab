const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");

let operator = ""
let num1 = 0;
let num2 = 0;

calculator.addEventListener("click", (event) => {
    console.log(event.target.innerText);

    if (event.target.classList.contains("number")) {
        display.textContent += event.target.innerText;
        console.log(display.textContent);
    };
    if (event.target.classList.contains("operator") && event.target.textContent != "C") {
        num1 = parseInt(display.textContent);
        operator = event.target.textContent;
        display.textContent = "";
    };

    if (event.target.innerText === "=") {
        //do something
    };
    if (event.target.innerText === "C") {
        //do something
    };
});

