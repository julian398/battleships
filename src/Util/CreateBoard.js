export default (size)=>{
    let board= [];

    for(let i=0; i<size; i++){
        let row= [];
        for(let j=0;j<size;j++){
            row.push({
                value:0,
                shooted: false,
                x:i,
                y:j,
                placed:false,
            });
        }
        board.push(row);
    }
    return {board};
}