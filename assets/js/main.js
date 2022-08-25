const grid = document.querySelector(".grid");
const btnPopUp = document.getElementById("btn-popup");
const form = document.getElementById("form");
const btnEnter = document.getElementById("btn-enter");

let squaresContainer = [];

function showPopUp () {
    form.classList.remove("hide");
    btnEnter.addEventListener("click", (e) => {
        let inputValue = e.target.previousElementSibling.value;
        form.classList.add("hide");
        createSquares(inputValue);
        colorSquares();
	});
}

function createSquares (number) {
	const conversion = number * number;

	for (let i = 0; i < conversion; i++) {
        const square = document.createElement("div");
        grid.style.width = `${number * 10}px`
        grid.style.height = `${number * 10}px`
		square.classList.add("grid-square");
		grid.appendChild(square);
		squaresContainer.push(square);
    }
}

function colorSquares() {
	squaresContainer.forEach((square) => {
		square.addEventListener("mouseover", (e) => {
            square.classList.add("black");
		});
	});
}


btnPopUp.addEventListener("click", showPopUp);
