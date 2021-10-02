export default class Grid {
    constructor(width , height) {
        this.width = width;
        this.height = height;
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
}