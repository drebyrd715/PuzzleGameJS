////// get my rows and columns////////
const rows =5;
const columns = 5;
/////////// create variables//////////
let currentPiece /// tile I click to drag///
let otherPiece  /// tile I want to swap with ///
///// create number turns///////
const turns = 0;

window.onload = function() {
    // start the gameboard/// need loop //////
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            // create tile img /////
            let block = document.createElement("img");
            // make dummy imgs for game/////
            block.src = "dummy.png";
            document.querySelector("#gameBoard").append(block);
        }
    }

    //Pieces///
    let pieces = [];
    for (let i=1; i <= rows*columns; i++){
        pieces.push(i.toString()); /// put "1" to "25" into arr (puzzle images name)     
    }
    //// insert puzzle pieces in bottom section///////////
    // for (let i = 0; i < pieces.length; i++){
    //     let block = document.createElement("img");
    //     block.src = "./images" + pieces[i] + ".png";
    //     document.querySelector("puzzPieces").append(block)
    // }
}
