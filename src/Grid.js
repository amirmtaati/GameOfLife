export default class Grid {
    constructor(width , height , cellSise , context) {
        this.width = width;
        this.height = height;
        this.cellSize = cellSise;
        this.context = context;
        this.grid = [];

        this.initGrid();
    }

    initGrid() {
        for (let x = 0 ; x < this.width ; x++) {
            for (let y = 0 ; y < this.height ; y++) {
                this.grid[x] = new Array(this.height).fill(0);
            }
        }
    }

    drawCell(x , y) {
        this.context.fillRect(this.cellSize * x , this.cellSize * y , this.cellSize - 1 , this.cellSize - 1);
    }

    draw() {
        for (let x = 0 ; x < this.width ; x++) {
            for (let y = 0 ; y < this.height ; y++) {
                this.drawCell(x , y);
            }
        }
    }
}