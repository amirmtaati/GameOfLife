export default class Cell {
  constructor(x, y, isAlive, cellSize, grid, context) {
    this.x = x;
    this.y = y;
    this.cellSize = cellSize;
    this.context = context;
    this.isAlive = isAlive;
    this.grid = grid;
    this.neighbors = [];
  }

  drawCell() {
    this.cellColor();
    this.context.fillRect(
      this.cellSize * this.x,
      this.cellSize * this.y,
      this.cellSize - 0.5,
      this.cellSize - 0.5
    );
  }

  cellColor() {
    if (this.isAlive) {
      this.context.fillStyle = "#fff";
    } else {
      this.context.fillStyle = "green";
    }
  }

  getNeighbors() {
    for (let i = this.x - 1; i <= this.x + 1; i++) {
      for (let j = this.y - 1; j <= this.y + 1; j++) {
        if (
          i >= 0 &&
          i <= 34 &&
          j >= 0 &&
          j <= 24 &&
          !(this.x == i && this.y == j)
        ) {
          this.neighbors.push(this.grid[i][j]);
        }
      }
    }
  }
}
