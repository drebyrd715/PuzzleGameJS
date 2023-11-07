////// get my rows and columns////////
const rows =5;
const columns = 5;
/////////// create variables//////////
const currentPiece = currentPiece; /// tile I click to drag///
const otherPiece = otherPiece; /// tile I want to swap with ///
///// create number turns///////
const turns = 0;

window.onload = function() {
    // start the gameboard/// need loop //////
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            // create tile img /////
            let piece = document.createElement("img");
            //// make dummy imgs for game/////
            piece.src = "dummy.png";
            document.querySelector("#gameBoard").append(piece);
        }
    }
}
