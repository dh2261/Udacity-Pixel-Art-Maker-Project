// Select color input
// Select size input

// User input creates a grid size and calls makeGrid()
sizePicker.addEventListener("submit", function (event) {
  event.preventDefault();
  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;
  makeGrid(height, width);
  // console.log('Height: ' + height + ' and Width: ' + width);
});

function makeGrid(x, y) {
  //console.log(x + " " + y)
  // Constructs canvas and adds user defined color(s) to cell(s).
  const pixelCanvas = document.getElementById("pixelCanvas");
  pixelCanvas.innerHTML = null;
  for (var i = 1; i <= x; i++) {
    let row = document.createElement("tr");
    for (var j = 1; j <= y; j++) {
      let cell = document.createElement("td");
      cell.addEventListener("click", function addColor() {
        let color = document.getElementById("colorPicker").value;

        if (event.target.hasAttributes("background-color")) {
          event.target.removeAttribute("style");
        } else {
          event.target.style.backgroundColor = color;
        }
      });
      row.append(cell);
    }
    pixelCanvas.appendChild(row);
  }
}
