console.log('checkers.js');

let player1 = 1; //white
let player2 = -1; //black

const rulesButton = document.querySelector('.rules-button');
const rulesPanel = document.querySelector('.rules-panel');

rulesButton.addEventListener('click', function () {
    if(rulesPanel.style.display === 'block'){ // Check if the 'rulesPanel' is currently displayed as 'block' (visible)
        rulesPanel.style.display = 'none'; // If it's visible ('block'), hide the rulesPanel.
    } else {
        rulesPanel.style.display = 'block'; // If it's not visible (display is not 'block'), show the rulesPanel.
    }
});

//board array (player 2= black, player1 = white)
const checkersBoard = [
    [0, player2, 0, player2, 0, player2, 0, player2],
    [player2, 0, player2, 0, player2, 0, player2, 0],
    [0, player2, 0, player2, 0, player2, 0, player2],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [player1, 0, player1, 0, player1, 0, player1, 0],
    [0, player1, 0, player1, 0, player1, 0, player1],
    [player1, 0, player1, 0, player1, 0, player1, 0]
];

const playerNames = new Map(); //keeps key and value to later exchange 

let checkerPieces = []; //empty array with pieces

// Constructor function for creating a new Piece object
function Piece(id, row, column) {
    this.id = id;  // Unique identifier for the piece
    this.row = row;  // Row position on the board
    this.column = column;  // Column position on the board

    // Assign player based on the piece's id; if id < 12, it's player2, else player1
    this.player = id < 12 ? player2 : player1;

    this.king = false;  // Initial state of the piece is not a king

    //creates html representation of piece object
    this.render = function () {
        // Determine the color based on the player's number (white for player1, black for player2)
        let color = this.player === player1 ? "white" : "black";

        // Return a string representing the HTML for the piece element
        return `<div id="${id}" class="piece ${color}"></div>`;
    };

    // Method to get the HTML element corresponding to this piece object
    this.getPieceElement = function () {
        //return html element with corresponding id
        return document.querySelector(`.piece[id="${this.id}"]`);
    };

    // Method to move the piece to a new row and column
    this.move = function (newRow, newColumn) {
        this.row = newRow;  // Update the row position
        this.column = newColumn;  // Update the column position
        if (this.player === player1 && newRow === 0 || this.player === player2 && newRow === 7) { //checking if white || black piece is on opposite side
            this.king = true;
            this.getPieceElement().classList.add("king");
            // Log for debugging
            console.log('Piece promoted to king:', this.id);
        }
    }
}

Board = {
    board: checkersBoard, //clone board so initial array will not change after/ during game object is changed
    boardContainer: document.querySelector('.board'),
    playerTurnContainer: document.querySelector('.turn'),
    scoreContainer: document.querySelector('.right-side'),
    score: {
        player1: 0, //each player starts with 0 pieces, +1 everytime a piece is captured
        player2: 0
    },
    playerTurn: player1, //player 1 (white) starts 
    selectedPiece: null, //no piece is selected in initial state
    capturedPiece: new Map(),

    //initialize board by rendering(showing) the tiles and pieces
    initialize: function () {
        let pieces = 0;
        // render checkers board
        for (let row in this.board) {
            for (let column in this.board[row]) {
                // render tiles
                if (row % 2 == 0) { //always true
                    if (column % 2 == 0) { 
                        // render white tile & column is even
                        this.renderTile(row, column, "white");
                    } else {
                        // render black tile
                        this.renderTile(row, column, "black");
                    }
                } else {
                    if (column % 2 == 0) { //row uneven but column even
                        // render black tile
                        this.renderTile(row, column, "black");
                    } else {
                        // render white tile
                        this.renderTile(row, column, "white");
                    }
                }
                // render pieces
                if (this.board[row][column] == player2 || this.board[row][column] == player1) {
                    // render black piece
                    pieces = this.renderPiece(row, column, pieces); //counter 
                }

            }
        }
        this.updatePlayerTurnContainer();
        this.renderScore();
    },

    //renders single tile (black or white)
    renderTile: function (row, column, color) {
        this.boardContainer.innerHTML += `<div class="block ${color}" id="${row}-${column}"></div>`
    },

    // create Piece object and renders piece on the board at a specific row and column
    renderPiece: function (row, column, orderNb) {
        let tile = document.querySelector(`div.block[id="${row}-${column}"]`);
        let piece = new Piece(orderNb, parseInt(row), parseInt(column)); //create new piece object
        checkerPieces[orderNb] = piece; //store piece in checkerPieces array

        tile.innerHTML = piece.render(); //insert piece into correct tile
        return orderNb + 1; //return the next piece ID
    },

    renderScore: function () { //show score on page of player1 & 2
        this.scoreContainer.innerHTML = ` 
            <p>Player 1 (White): ${this.score.player1}</p>
            <p>Player 2 (Black): ${this.score.player2}</p>
        `;
        // Check for winner based on player scores
        if (this.score.player1 === 12) {
            console.log("Player 1 wins");
            this.scoreContainer.innerHTML = "Player 1 wins";
            this.playerTurnContainer.innerHTML = "";
        } else if (this.score.player2 === 12) {
            console.log("Player 2 wins");
            this.scoreContainer.innerHTML = "Player 2 wins";
            this.playerTurnContainer.innerHTML = "";
        }
    },

    //clear any current selection or highlights on board
    clearSelection: function () {
        const tiles = document.querySelectorAll('.block');
        for (let tile of tiles) {
            tile.classList.remove("moveAllowed"); //remove classlist moveallowed
        }
        const pieces = document.querySelectorAll('.piece');
        for (let piece of pieces) {
            piece.classList.remove("selected"); //remove classlist selected
        }
    },

    //switch player  turn
    changePlayerTurn: function () {
        this.playerTurn = this.playerTurn === player1 ? player2 : player1;
        this.updatePlayerTurnContainer();
    },

    updatePlayerTurnContainer: function () {
        let playerName = playerNames.get(this.playerTurn); //instead of -1 || 1, show player names 
        this.playerTurnContainer.innerHTML = `It's ${playerName}'s turn`;
    },

    //show allowed moves for selected piece
    showAllowedMoves: function () {
        if (this.selectedPiece != null) {
            this.clearSelection(); //clear any previous selection

            //get current row and column of selected piece
            const pieceRow = this.selectedPiece.row;
            const pieceColumn = this.selectedPiece.column;


            if (this.selectedPiece.king) {
                console.log('is king');

                // Loop through both possible move directions (up and down)
                const moveRows = [pieceRow - 1, pieceRow + 1]; // Up and down
                for (let i = 0; i < moveRows.length; i++) {
                    const moveRow = moveRows[i];

                    if (moveRow >= 0 && moveRow < 8) { // Make sure the move is within bounds

                        // Calculate left and right columns for diagonal moves
                        const leftColumn = pieceColumn - 1;
                        const rightColumn = pieceColumn + 1;

                        // Check left diagonal move
                        if (leftColumn >= 0 && this.board[moveRow][leftColumn] === 0) { //check if it has no piece
                            document.querySelector(`.block[id="${moveRow}-${leftColumn}"]`).classList.add("moveAllowed");
                        } else if (this.board[moveRow][leftColumn] === player1 || this.board[moveRow][leftColumn] === player2) {
                            console.log("Jump allowed?");
                            const jumpRow = moveRow + (moveRow < pieceRow ? -1 : 1); // Jump two rows in the respective direction
                            const jumpColumn = leftColumn - 1; // Move left

                            // Check if landing space is empty after jump
                            if (jumpRow >= 0 && jumpRow < 8 && jumpColumn >= 0 && this.board[jumpRow][jumpColumn] === 0) {
                                document.querySelector(`.block[id="${jumpRow}-${jumpColumn}"]`).classList.add("moveAllowed");
                                this.capturedPiece.set(`${jumpRow}-${jumpColumn}`, `${moveRow}-${leftColumn}`); //
                            }
                        }

                        // Check right diagonal move
                        if (rightColumn < 8 && this.board[moveRow][rightColumn] === 0) {
                            document.querySelector(`.block[id="${moveRow}-${rightColumn}"]`).classList.add("moveAllowed");
                        } else if (this.board[moveRow][rightColumn] === player1 || this.board[moveRow][rightColumn] === player2) {
                            console.log("Jump allowed?");
                            const jumpRow = moveRow + (moveRow < pieceRow ? -1 : 1); // Jump two rows in the respective direction
                            const jumpColumn = rightColumn + 1; // Move right

                            // Check if landing space is empty after jump
                            if (jumpRow >= 0 && jumpRow < 8 && jumpColumn < 8 && this.board[jumpRow][jumpColumn] === 0) {
                                document.querySelector(`.block[id="${jumpRow}-${jumpColumn}"]`).classList.add("moveAllowed");
                                this.capturedPiece.set(`${jumpRow}-${jumpColumn}`, `${moveRow}-${rightColumn}`); //key of jump position(that you jump to), value is id of jumped over piece
                            }
                        }
                    }
                }
            } else if (this.playerTurn === player1) { //check if its player 1's turn
                const moveRow = pieceRow - 1; //make sure white moves up
                if (moveRow >= 0) { //make sure piece cannot go off the board

                    //calculate moves diagonal (left & right)
                    const leftColumn = pieceColumn - 1;
                    const rightColumn = pieceColumn + 1;

                    if (leftColumn >= 0 && this.board[moveRow][leftColumn] === 0) { //check if left diagonal move is empty
                        document.querySelector(`.block[id="${moveRow}-${leftColumn}"]`).classList.add("moveAllowed"); //if yes, highlight the tile
                    } else if (this.board[moveRow][leftColumn] === player2) { //if its not empty, check for jump
                        console.log("Jump allowed?"); //show in console if yes
                        const jumpRow = moveRow - 1; //make sure jump goes two rows ahead
                        if (jumpRow >= 0) {
                            const jumpColumn = leftColumn - 1; //jump to the left

                            //check if landing space is empty
                            if (jumpColumn >= 0 && this.board[jumpRow][jumpColumn] === 0) {
                                document.querySelector(`.block[id="${jumpRow}-${jumpColumn}"]`).classList.add("moveAllowed");
                                this.capturedPiece.set(`${jumpRow}-${jumpColumn}`, `${moveRow}-${leftColumn}`); //key of jump position(that you jump to), value is id of jumped over piece
                            }
                        } else {
                            console.log("Jump not allowed"); //no valid jump
                        }
                    }

                    //check if right diagonal move is empty
                    if (rightColumn < 8 && this.board[moveRow][rightColumn] === 0) {
                        //if yes, highlight the tile
                        document.querySelector(`.block[id="${moveRow}-${rightColumn}"]`).classList.add("moveAllowed");
                    } else if (this.board[moveRow][rightColumn] === player2) { //if its not empty, check for jump
                        console.log("Jump allowed?");
                        const jumpRow = moveRow - 1;
                        if (jumpRow >= 0) {
                            const jumpColumn = rightColumn + 1; //go to the right

                            //check if landing space is empty
                            if (jumpColumn >= 0 && this.board[jumpRow][jumpColumn] === 0) {
                                document.querySelector(`.block[id="${jumpRow}-${jumpColumn}"]`).classList.add("moveAllowed");
                                this.capturedPiece.set(`${jumpRow}-${jumpColumn}`, `${moveRow}-${rightColumn}`); //key of jump position(that you jump to), value is id of jumped over piece
                            }
                        } else {
                            console.log("Jump not allowed");
                        }
                    }
                } else {
                    console.log("No move allowed");
                }
            } else { //if its player 2's turn
                //calculate row (downward for player 2)
                const moveRow = pieceRow + 1;
                if (moveRow < 8) {
                    //calculate possible columns for left and right diagonal move
                    const leftColumn = pieceColumn - 1;
                    const rightColumn = pieceColumn + 1;

                    //check if left diagonal move is empty
                    if (leftColumn >= 0 && this.board[moveRow][leftColumn] === 0) {
                        //if so, highlight the tile
                        document.querySelector(`.block[id="${moveRow}-${leftColumn}"]`).classList.add("moveAllowed");
                    } else if (this.board[moveRow][leftColumn] === player1) {
                        console.log("Jump allowed?");
                        const jumpRow = moveRow + 1; //ensure jump goes two rows ahead 
                        if (jumpRow < 8) {
                            const jumpColumn = leftColumn - 1; //jump left
                            //check if landing space is empty
                            if (jumpColumn >= 0 && this.board[jumpRow][jumpColumn] === 0) {
                                document.querySelector(`.block[id="${jumpRow}-${jumpColumn}"]`).classList.add("moveAllowed");
                                this.capturedPiece.set(`${jumpRow}-${jumpColumn}`, `${moveRow}-${leftColumn}`); //key of jump position(that you jump to), value is id of jumped over piece
                            }
                        } else {
                            console.log("Jump not allowed"); //log jump not allowed
                        }
                    }

                    //check if right diagonal move is empty
                    if (rightColumn < 8 && this.board[moveRow][rightColumn] === 0) {
                        //if so, highlight move
                        document.querySelector(`.block[id="${moveRow}-${rightColumn}"]`).classList.add("moveAllowed");
                    } else if (this.board[moveRow][rightColumn] === player1) { //check if jump is possible
                        console.log("Jump allowed?");
                        const jumpRow = moveRow + 1; //jump 2 rows ahead if jump is available
                        if (jumpRow < 8) {
                            const jumpColumn = rightColumn + 1; //jump to the right
                            //check if landing space is empty
                            if (jumpColumn >= 0 && this.board[jumpRow][jumpColumn] === 0) {
                                document.querySelector(`.block[id="${jumpRow}-${jumpColumn}"]`).classList.add("moveAllowed"); //add moveallowed based on conditions
                                this.capturedPiece.set(`${jumpRow}-${jumpColumn}`, `${moveRow}-${rightColumn}`); //key of jump position(that you jump to), value is id of jumped over piece
                            }
                        } else {
                            console.log("Jump not allowed"); //log jump not allowed
                        }
                    }
                } else {
                    console.log("No move allowed"); //log no valid move
                }
            }
        } else {
            console.log("No piece selected"); //log no piece selected
        }
    },

    move: function (tile) {
        //get attribute row and column from clicked tile id
        const id = tile.getAttribute("id");
        const parts = id.split("-");

        //set current square where selected piece initially was to empty (0)
        this.board[this.selectedPiece.row][this.selectedPiece.column] = 0;
        //set new square where piece is moving to current players move
        this.board[parseInt(parts[0])][parseInt(parts[1])] = this.playerTurn;

        //moves the HTML element representing the selected piece into the clicked tile DOM element, placing it as the first child of the tile. 
        tile.insertBefore(this.selectedPiece.getPieceElement(), tile.firstChild);
        this.selectedPiece.move(parseInt(parts[0]), parseInt(parts[1])); //update internal position to reflect move

        // remove the piece if jumped
        if (this.capturedPiece.get(id) != null) { // get captured piece associated with the given ID
            let jumpedPieceTileId = this.capturedPiece.get(id); // Retrieve the ID of the tile where the jumped piece was located
            let jumpedPieceTile = document.querySelector(`.block[id="${jumpedPieceTileId}"]`);// Select the tile element from the DOM using the retrieved ID
            let jumpedPiece = jumpedPieceTile.firstChild; // Get the first child of the tile (the jumped piece itself)
            let jumpedPieceId = jumpedPiece.getAttribute("id"); // Get the ID of the jumped piece
            let jumpedPieceObject = checkerPieces[jumpedPieceId];// Retrieve the jumped piece object from the `checkerPieces` array using its ID
            this.board[jumpedPieceObject.row][jumpedPieceObject.column] = 0;// Update the board state to reflect that the jumped piece is no longer present
            checkerPieces[jumpedPieceId] = null;// Remove the jumped piece from the `checkerPieces` array by setting it to null
            jumpedPieceTile.innerHTML = ""; //clear the tile
            if (this.playerTurn === player1) { //if player one caught player2's piece
                this.score.player1++; //add a point to white
            } else {
                this.score.player2++; //else add a point to black
            }
            this.renderScore();
        }

        this.selectedPiece = null; //reset selected piece after the move is complete
        this.capturedPiece = new Map(); //reinitialize
        this.clearSelection(); //clear highlights
        this.changePlayerTurn(); //change players turn
    },

}

// ACTUAL START OF THE GAME!!
document.querySelector('input[id="start"]').addEventListener("click", function () {
    let player1Name = document.querySelector('input[id="namePlayerOne"]');
    let player2Name = document.querySelector('input[id="namePlayerTwo"]');
    if (player1Name.value != "" && player2Name.value != "") {
        playerNames.set(player1, player1Name.value); //adds onto map
        playerNames.set(player2, player2Name.value);
        // initialize the board
        Board.initialize();
        // piece listener, add eventlistener to each piece
        const pieces = document.querySelectorAll('.piece');
        for (let piece of pieces) { //loop through each piece
            piece.addEventListener("click", function (event) {
                event.stopPropagation(); //stop click event from progagating to parent elements

                //get selected piece from checkerpieces array using id
                const selectedPiece = checkerPieces[this.getAttribute("id")];
                console.log(`piece selected: [row=${selectedPiece.row}; column=${selectedPiece.column}]`);
                //check if its current player's turn
                if (Board.playerTurn === selectedPiece.player) {
                    console.log("Your turn");

                    //set the selected piece for current turn
                    Board.selectedPiece = selectedPiece;
                    Board.showAllowedMoves(); //show allowed moves for selected piece
                    this.classList.add("selected"); //add classlist selected
                } else {
                    console.log(`It's not ${selectedPiece.player}'s turn`); //else show its not their turn
                    Board.selectedPiece = null; //reset selected piece
                }
            });
        }

        // black tile listener
        const tiles = document.querySelectorAll(".block.black"); //get all black tiles
        for (let tile of tiles) { //loop through each black tile
            tile.addEventListener("click", function () {
                //check if tile has classlist moveAllowed
                if (this.classList.contains("moveAllowed")) {
                    Board.move(this); //move the piece if its allowed move
                    console.log("piece moved");
                } else {
                    console.log("Move not allowed"); //else log it in console
                }
            });
        }
    } else {
        console.log("You need to provide names first!!!");
    }
});