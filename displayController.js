// displayController.js
const DisplayController = (() => {
  const renderBoard = () => {
    const boardDiv = document.getElementById('game-board');
    const boardArray = Gameboard.getBoard();

    // Clear the existing content of the game board div
    boardDiv.innerHTML = '';

    // Loop through the boardArray and create cells dynamically
    boardArray.forEach((cellValue, index) => {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = cellValue;

      // Add event listener for cell click
      cell.addEventListener('click', () => handleCellClick(index));

      boardDiv.appendChild(cell);
    });

    if (Game.isGameOver()) {
      announceResult();
      createRematchButton();
    }
  };

  const handleCellClick = (index) => {
    if (!Game.isGameOver()) {
      Game.playTurn(index);
      renderBoard();
    }
  };

  const announceResult = () => {
    const resultContainer = document.getElementById('announcement-container');
    resultContainer.innerHTML = ''; // Clear previous content

    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');
    const winner = Game.checkForWinner();
    if (winner) {
      resultDiv.textContent = `Player ${winner.name} ${winner.marker} wins!`;
    } else {
      resultDiv.textContent = 'It\'s a tie!';
    }
    resultContainer.appendChild(resultDiv);
  };

  const createRematchButton = () => {
    const rematchContainer = document.getElementById('result-container');
    rematchContainer.innerHTML = ''; // Clear previous content

    const rematchButton = document.createElement('button');
    rematchButton.textContent = 'Rematch';
    rematchButton.addEventListener('click', () => {
      Game.startGame(Game.playerOneName, Game.playerTwoName);
      renderBoard();
      removeResult();
    });

    rematchContainer.appendChild(rematchButton);
  };

  const removeResult = () => {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = ''; // Clear previous content
  };

  const init = () => {
    // Initialize your display, add event listeners, etc.
    renderBoard();
  };

  return { renderBoard, handleCellClick, init };
})();
