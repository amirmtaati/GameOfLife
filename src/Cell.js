export default class Cell {
    constructor(x , y , cellSize , context) {
        this.x = x;
        this.y = y;
        this.cellSise = cellSize;
        this.context  = context;
        this.isAlive  = 0;
        this.neighbors = [];

    }

    drawCell() {
        this.context.fillRect(this.cellSise * this.x , this.cellSise * this.y , this.cellSise - 1 , this.cellSise - 1);
    }
}