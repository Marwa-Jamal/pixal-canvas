var table = document.querySelector('#pixelCanvas')
var color = document.getElementById('colorPicker')
// A code to change the height and width of the grid by the user input:
var gridHeight = document.getElementById('inputHeight');
var gridWidth = document.getElementById('inputWidth')
var sizePicker = document.getElementById('sizePicker')
var height = gridHeight.value;
var width = gridWidth.value;



function makeGrid(height, width){
    sizePicker.addEventListener('submit', event => {
        event.preventDefault();
        makeGrid(gridHeight.value, gridWidth.value);
      });
    for ( var i = 0; i < height; ++i){
        const tr = document.createElement('tr');
            table.appendChild(tr);
        for(var c = 0; c<width; ++c){
            const td = document.createElement('td');
            tr.appendChild(td);
        }
    };
}; makeGrid(height, width)

// A code to color the cell by the user selected color
table.addEventListener('click', function(evt){
    if (evt.target.tagName === "TD") {
        var td = evt.target;
        td.style.backgroundColor = color.value;
    }
    
});