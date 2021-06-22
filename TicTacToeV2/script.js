var plays = 0; // counts the turn #

var board = document.querySelector("#board");

board.b0.addEventListener("click", takeTurn);
board.b1.addEventListener("click", takeTurn);
board.b2.addEventListener("click", takeTurn);
board.b3.addEventListener("click", takeTurn);
board.b4.addEventListener("click", takeTurn);
board.b5.addEventListener("click", takeTurn);
board.b6.addEventListener("click", takeTurn);
board.b7.addEventListener("click", takeTurn);
board.b8.addEventListener("click", takeTurn);

function takeTurn(){
    if (plays % 2 == 0 && this.value == ""){
        this.value = "Red";
        this.style.border = "20px solid #ff0c1e";
        this.style.color = "#117f9a";
        ++plays;
        if (plays > 4) {
            checkWin();
        } // if
    } // if
    else if (plays % 2 != 0 && this.value == ""){
        this.value = "Green";
        this.style.border = "20px solid #32cd32";
        this.style.color = "#117f9a";
        ++plays;
        if (plays > 4) {
            checkWin();
        } // if
    } // else if
    console.log("Turn number: " + plays);
} // takeTurn

function checkWin() {
    if (board.b0.value != "" && board.b0.value == board.b1.value && board.b1.value == board.b2.value) {
        announceWin(board.b0.value);
    } // if 012
    else if (board.b3.value != "" && board.b3.value == board.b4.value && board.b4.value == board.b5.value) {
        announceWin(board.b3.value);
    } // if 345
    else if (board.b6.value != "" && board.b6.value == board.b7.value && board.b7.value == board.b8.value) {
        announceWin(board.b6.value);
    } // if 678
    else if (board.b0.value != "" && board.b0.value == board.b3.value && board.b3.value == board.b6.value) {
        announceWin(board.b0.value);
    } // if 036
    else if (board.b1.value != "" && board.b1.value == board.b4.value && board.b4.value == board.b7.value) {
        announceWin(board.b1.value);
    } // if 147
    else if (board.b2.value != "" && board.b2.value == board.b5.value && board.b5.value == board.b8.value) {
        announceWin(board.b2.value);
    } // if 258
    else if (board.b0.value != "" && board.b0.value == board.b4.value && board.b4.value == board.b8.value) {
        announceWin(board.b0.value);
    } // if 048
    else if (board.b2.value != "" && board.b2.value == board.b4.value && board.b4.value == board.b6.value) {
        announceWin(board.b2.value);
    } // if 246
    else if (plays == 9){
        announceCatsGame();
    } // else
} // checkWin

function announceWin(player) {
    document.querySelector("#popup").innerHTML = '<img src = "images/restart.png" alt = "x" id = "x"><h2>' + player + ' wins<h2>';
    document.querySelector("#x").addEventListener("click", hidePopup);
    
    
    document.querySelector("#container").style.display = "flex";
} // anounceWin

function announceCatsGame() {
    document.querySelector("#container").style.display = "flex";
} // anounceWin

document.querySelector("#x").addEventListener("click", hidePopup);

function hidePopup() {
    location.reload();
} // anounceWin
