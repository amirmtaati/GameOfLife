import Grid from "./Grid.js";

const canvas  = document.getElementById("canvas");
const context = canvas.getContext('2d');
let grid;

const CELL_SIZE     = 10;
const CANVAS_WIDTH  = 900;
const CANVAS_HEIGHT = 900;

const GRID_WIDTH  = CANVAS_WIDTH  / CELL_SIZE;
const GRID_HEIGHT = CANVAS_HEIGHT / CELL_SIZE;



(function main() {
    const world = new Grid(GRID_WIDTH , GRID_HEIGHT);
})();