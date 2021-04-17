let cols,rows,grid;
const res          = 5;
const canvas       = document.getElementById('canvas');
const ctx          = canvas.getContext('2d');
const start_btn    = document.querySelector('.start');
const stop_btn     = document.querySelector('.stop');
function create2Darray(c,r){
    let arr = new Array(c);
    for(let i = 0; i < arr.length; i++){
        arr[i] = new Array(r);
    }
    return arr
}

function setup(){   
    cols = canvas.width  / res;
    rows = canvas.height / res;
    grid = create2Darray(cols,rows);
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid.length; j++){
            //let number = Math.round(Math.random() * 100)+1 ;
            //grid[i][j] = number >= 90 ? 1 : 0;
            grid[i][j] = 0;
            grid[15][15] = 1;
            grid[15][16] = 1;
            grid[14][15] = 1;
            grid[14][16] = 1;
            grid[24][15] = 1;
            grid[24][16] = 1;
            grid[24][17] = 1;
            grid[25][14] = 1;
            grid[25][18] = 1;
            grid[26][13] = 1;
            grid[27][13] = 1;
            grid[26][19] = 1;
            grid[27][19] = 1;
            grid[28][16] = 1;
            grid[29][18] = 1;
            grid[29][14] = 1;
            grid[30][17] = 1;
            grid[30][16] = 1;
            grid[30][15] = 1;
            grid[31][16] = 1;
            grid[34][15] = 1;
            grid[34][14] = 1;
            grid[34][13] = 1;
            grid[35][15] = 1;
            grid[35][14] = 1;
            grid[35][13] = 1;
            grid[36][12] = 1;
            grid[36][16] = 1;
            grid[38][12] = 1;
            grid[38][11] = 1;
            grid[38][16] = 1;
            grid[38][17] = 1;
            grid[48][14] = 1;
            grid[48][13] = 1;
            grid[49][13] = 1;
            grid[49][14] = 1;














        }
    }
    draw();
}

function draw(){
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid.length; j++){
            ctx.fillRect(i * res,j * res,res-2,res-2);
            ctx.fillStyle = grid[i][j] == 1 ? 'green' : '#e6e6e6';
        }
    }
}
function countNeighbors(grid,x,y){
    let sum = 0;
    for(let i = -1; i < 2; i++){
        for(let j = -1; j < 2; j++){
            sum += grid[(x+i+cols)%cols][(y+j+rows)%rows];
        }
    }
    sum -= grid[x][y];
    return sum;
}

function evolution(){
    let next = create2Darray(cols,rows);
    for(let i =0 ; i < cols; i++){
        for(let j = 0; j < rows;j++){
            let state = grid[i][j];
            let neighbors = countNeighbors(grid,i,j);
            if(state == 0 && neighbors == 3){
                next[i][j] = 1;
            } else if(state == 1 && (neighbors < 2 && neighbors > 3)){
                next[i][j] = 0;
            }
            else{
                next[i][j] = state;
            }
        }
    }
    grid = next;
    draw();
}

setup();
start_btn.onclick = () => {
    setInterval(evolution,1);
}
stop_btn.onclick = () => {
    clearInterval(evolution);
}
//console.table(grid);