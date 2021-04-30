let width,height,grid,mirror;
width  = 1000;
height = 800;

grid = mirror = create_arr(width);
const canvas  = document.getElementById('canvas');
const ctx     = canvas.getContext('2d');
ctx.fillStyle = "green";
fill_random();
draw_grid();
setInterval(()=>{
  draw_grid();
  update_grid();
},10);
//loop();
function create_arr(rows){
    let arr = [];
    for(let i = 0; i < rows; i++){
        arr[i] = [];
    }
    return arr;
}

function fill_random(){
    for(let i = 0; i < width; i++){
        for(let j = 0; j < height; j++){
            grid[i][j] = Math.round(Math.random() * 100) + 1 < 85 ? 0 : 1;
        }
    }
}
function draw_grid(){
    console.log('draw');
    ctx.clearRect(0,0,height,width);
    for(let i = 1; i < width; i++){
        for(let j = 1; j < height; j++){
            if(grid[i][j] === 1){
                ctx.fillRect(i*5,j*5,4,4);
            }
        }
    }
}

function update_grid(){
    for(let i = 1; i < width - 1; i++){
        for(let j = 1; j < height - 1; j++){
            let total = 0;
            total    += grid[i-1][j-1];
            total    += grid[i][j-1];
            total    += grid[j-1][i];
            total    += grid[i-1][j+1];
            total    += grid[i][j+1];
            total    += grid[i+1][j];
            total    += grid[i+1][j+1];
            total    += grid[i+1][j-1];

            switch(total){
                case 2:
                    mirror[i][j] = grid[i][j]
                    break;
                case 3:
                    mirror[i][j] = 1;
                    break;
                default:
                    mirror[i][j] = 0;
            }
        }
    }

<<<<<<< HEAD
    for (var l = 1; l < height - 1; l++) {
	    //top and bottom
	    mirror[l][0] = mirror[l][height - 3];
	    mirror[l][height - 2] = mirror[l][1];
	    //left and right
	    mirror[0][l] = mirror[height - 3][l];
	    mirror[height - 2][l] = mirror[1][l];
	  }

    let copy = grid;
    grid     = mirror;
    mirror   = copy;
}
=======
setup();
let evolution_interval;
start_btn.onclick = () => {
   evolution_interval = setInterval(evolution,1);
}
stop_btn.onclick = () => {
    clearInterval(evolution_interval);
}
//console.table(grid);
>>>>>>> 8b31c71e2cf7a0a0f80990e676f46dfa6787c931
