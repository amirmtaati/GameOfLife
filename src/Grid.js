import Cell from "./Cell.js";

export default class Grid {
  constructor(width, height, cellSise, context) {
    this.width = width;
    this.height = height;
    this.cellSize = cellSise;
    this.context = context;
    this.grid = [];

    this.initGrid();
  }

  initGrid() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        this.grid[x] = new Array(this.height);
      }
    }

    this.fillGrid();
  }

  fillGrid() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const cell = new Cell(x , y , this.randomNum() , this.cellSize , this.grid , this.context);
        this.grid[x][y] = cell;
      }
    }
  }

  randomNum() {
      return (Math.ceil(Math.random() * 100) + 1) > 35 ? 1 : 0;
  }

  draw() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        this.grid[x][y].drawCell();
      }
    }
  }
}
