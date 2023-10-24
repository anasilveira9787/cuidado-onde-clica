

export default function createBoard(squares){

    let monster = "<div class='square ghost'><i class='ph-bold ph-skull'></i></div>"

    let randomPosition = Math.floor((Math.random() * squares) + 1);


    let newBoard = Array.apply(null, Array(squares))

    for (let index = 0; index < newBoard.length; index++) {
        newBoard[index] = "<div class='square'></div>";
        
    }

    newBoard.splice(randomPosition, 1, monster);   
    
    let board = newBoard.join(" ")

    return board

}



