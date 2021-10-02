const canvas  = document.getElementById("canvas");
const context = canvas.getContext('2d');
let grid;

const CELL_SIZE     = 10;
const CANVAS_WIDTH  = 900;
const CANVAS_HEIGHT = 900;

const GRID_WIDTH  = CANVAS_WIDTH  / CELL_SIZE;
const GRID_HEIGHT = CANVAS_HEIGHT / CELL_SIZE;


function makeGrid() {
    let grid = [];

    for (let x = 0 ; x < GRID_WIDTH ; x++) {
        for (let y = 0 ; y < GRID_HEIGHT ; y++) {
            grid[y] = new Array(GRID_WIDTH);
        }
    }

    return grid;
}

(function main() {

})();