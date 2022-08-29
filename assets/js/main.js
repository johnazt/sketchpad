const grid = document.querySelector(".grid");
const btnPopUp = document.getElementById("btn-popup");
const form = document.getElementById("form");
const btnEnter = document.getElementById("btn-enter");
const btnErase = document.getElementById("btn-erase");

const color = "black";
let size = 20;
createSquares(size);

// TAKES THE USER INPUT AND CALL CREATESQUARE FUNCTION
btnEnter.addEventListener("click", (e) => {
	// SIZE TAKES A NEW VALUE
	size = e.target.previousElementSibling.value; //
	grid.innerHTML = "";
	createSquares(size);
});



// CREATE AND ADD SIZES TO GRID AND SQUARES
function createSquares(inputValue) {
	for (let i = 0; i < inputValue ** 2; i++) {
		const square = document.createElement("div");
		square.classList.add("grid-square");
		grid.style.gridTemplateColumns = `repeat(${inputValue}, 1fr)`;
		grid.style.gridTemplateRows = `repeat(${inputValue}, 1fr)`;
		grid.appendChild(square);
	}
}


// PAINTING SQUARES
function paintGrid(event, color) {
	if (event.buttons == 1) {
		if (event.target.classList == "grid-square") {
			let square = event.target;
			square.style.backgroundColor = color;
		}
	} else {
		//Exit condition if mouse is not clicked.
		return;
	}
}
// CONDITION FOR USE MOUSEDOWN WITH MOUSEOVER
grid.addEventListener("mousedown", (e) => {
	if (e.buttons == 1) {
		window.addEventListener("mouseover", (e) => {
			paintGrid(e, color);
		});
	}
});

// RESET THE GRID
function eraseSquare() {
	grid.innerHTML = "";
	createSquares(size);
}

btnErase.addEventListener("click", eraseSquare);
