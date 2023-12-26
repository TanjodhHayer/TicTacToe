// app.js
document.addEventListener('DOMContentLoaded', () => {
    DisplayController.init();
  
    const startButton = document.getElementById('start-game-btn');
    startButton.addEventListener('click', () => {
      const playerOneName = prompt('Enter Player One\'s Name:');
      const playerTwoName = prompt('Enter Player Two\'s Name:');
      Game.startGame(playerOneName, playerTwoName);
      DisplayController.renderBoard();
    });
  });
  