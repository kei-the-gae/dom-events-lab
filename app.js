/*-------------------------------- Constants --------------------------------*/

const calculator = document.querySelector("#calculator");

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener("click", (event) => {
    console.log(event.target.innerText);

    if (event.target.classList.contains("number")) {
        //do something
    }
    if (event.target.innerText === "+") {
        //do something
    }
    if (event.target.innerText === "-") {
        //do something
    }
    if (event.target.innerText === "*") {
        //do something
    }
    if (event.target.innerText === "/") {
        //do something
    }
    if (event.target.innerText === "=") {
        //do something
    }
    if (event.target.innerText === "C") {
        //do something
    }
})

/*-------------------------------- Functions --------------------------------*/
