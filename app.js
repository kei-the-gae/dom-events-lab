const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");

calculator.addEventListener("click", (event) => {
    console.log(event.target.innerText);

    if (event.target.classList.contains("number")) {
        display.textContent += event.target.innerText;
    };
    if (event.target.innerText === "+") {
        //do something
    };
    if (event.target.innerText === "-") {
        //do something
    };
    if (event.target.innerText === "*") {
        //do something
    };
    if (event.target.innerText === "/") {
        //do something
    };
    if (event.target.innerText === "=") {
        //do something
    };
    if (event.target.innerText === "C") {
        //do something
    };
});

