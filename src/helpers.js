export function checkWin(cells){
    for(let rows=0; rows < 10; rows++){
        for(let cols=0; cols < 6; cols++){
            if(cells[rows][cols] && cells[rows][cols] === cells[rows][cols+1]
                && cells[rows][cols] === cells[rows][cols+2]
                && cells[rows][cols] === cells[rows][cols+3]
                && cells[rows][cols] === cells[rows][cols+4]){
                
                return cells[rows][cols]
            }
        }
    }

    for(let cols=0; cols < 10; cols++ ){
        for(let rows = 0; rows<6; rows ++){
            if(cells[rows][cols] && cells[rows][cols] === cells[rows+1][cols]
                && cells[rows][cols] === cells[rows+2][cols]
                && cells[rows][cols] === cells[rows+3][cols]
                && cells[rows][cols] === cells[rows+4][cols]){
                
                return cells[rows][cols]
            }
        }
    }

    for(let rows = 0; rows < 6; rows++){
        for(let cols = 0; cols <6; cols++ ){
            if(cells[rows][cols] && cells[rows][cols] === cells[rows+1][cols+1]
                && cells[rows][cols] === cells[rows+2][cols+2]
                && cells[rows][cols] === cells[rows+3][cols+3]
                && cells[rows][cols] === cells[rows+4][cols+4]){

                return cells[rows][cols]
            }
        }
    }

    for(let rows = 0; rows < 6; rows++){
        for(let cols = 4; cols <10; cols++ ){
            if(cells[rows][cols] && cells[rows][cols] === cells[rows+1][cols-1]
                && cells[rows][cols] === cells[rows+2][cols- 2]
                && cells[rows][cols] === cells[rows+3][cols- 3]
                && cells[rows][cols] === cells[rows+4][cols- 4]){

                return cells[rows][cols]
            }
        }
    }

    return null;
}