const grid = document.querySelector(".grid");

const squaresContainer = [];

function createSquares() {
	for (let i = 0; i < 256; i++) {
		const square = document.createElement("div");
		square.classList.add("grid-square");
		grid.appendChild(square);
        squaresContainer.push(square)
    }
}
createSquares();

function colorSquares () {
    squaresContainer.forEach(square => {
        square.addEventListener("mouseover", (e) => {
            square.classList.add("black")
        })
    })
}
colorSquares()