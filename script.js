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
            let tile = document.createElement("img");
            // make dummy imgs for game/////
            tile.src = "picturefolder/empty1.jpg";
            tile.style.height = "80px"
            document.querySelector("#gameBoard").append(tile);
        }
    }
}
    // pieces///
    let pieces = [];
    for (let i=1; i <= rows*columns; i++){
        pieces.push(i.toString()); /// put "1" to "25" into arr (puzzle images name)     
    }

    // insert puzzle pieces in bottom section///////////
    for (let i = 0; i < pieces.length; i++){
        let tile = document.createElement("img");
        tile.src = "picturefolder" + pieces[i] + ".jpg";
        document.querySelector("puzzPieces").append(tile)
    }


