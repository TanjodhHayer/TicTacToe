// game.js
const Game = (() => {
    let currentPlayer;
    let isGameOverFlag = false;
    let player1;
    let player2;
    let playerOneName; // Store player names
    let playerTwoName;
  
    const switchPlayer = () => {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    };
  
    const checkForWinner = () => {
      const board = Gameboard.getBoard();
  
      // Check rows, columns, and diagonals for a winner
      for (let i = 0; i < 3; i++) {
        // Check rows
        if (board[i * 3] !== '' && board[i * 3] === board[i * 3 + 1] && board[i * 3] === board[i * 3 + 2]) {
          return currentPlayer;
        }
  
        // Check columns
        if (board[i] !== '' && board[i] === board[i + 3] && board[i] === board[i + 6]) {
          return currentPlayer;
        }
      }
  
      // Check diagonals
      if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
        return currentPlayer;
      }
  
      if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
        return currentPlayer;
      }
  
      return null; // No winner yet
    };
  
    const checkForTie = () => {
      const board = Gameboard.getBoard();
      // Check if every cell is filled (no empty cells)
      return board.every((cell) => cell !== '');
    };
  
    const isGameOver = () => isGameOverFlag;
  
    const playTurn = (cellIndex) => {
      if (!isGameOverFlag && Gameboard.markCell(cellIndex, currentPlayer.marker)) {
        const winner = checkForWinner();
        if (winner) {
          isGameOverFlag = true;
        } else if (checkForTie()) {
          isGameOverFlag = true;
        } else {
          switchPlayer();
        }
      }
    };
  
    const startGame = (newPlayerOneName, newPlayerTwoName) => {
      // Use stored names if available, otherwise use new names
      playerOneName = playerOneName || newPlayerOneName;
      playerTwoName = playerTwoName || newPlayerTwoName;
  
      player1 = Player(playerOneName, 'X');
      player2 = Player(playerTwoName, 'O');
      currentPlayer = player1;
      isGameOverFlag = false;
      Gameboard.resetBoard();
    };
  
    return { startGame, playTurn, isGameOver, checkForWinner, playerOneName, playerTwoName };
  })();
  