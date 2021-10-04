export default class Cell {
    constructor(x , y , isAlive ,cellSize , context) {
        this.x = x;
        this.y = y;
        this.cellSize = cellSize;
        this.context  = context;
        this.isAlive  = isAlive;
        this.neighbors = [];

    }

    drawCell() {
        this.cellColor();
        this.context.fillRect(this.cellSize * this.x , this.cellSize * this.y , this.cellSize - 0.5, this.cellSize - 0.5);
    }

    cellColor() {
        if(this.isAlive) {
            this.context.fillStyle = "#fff";
        } else {
            this.context.fillStyle = "green";
        }
    }
}