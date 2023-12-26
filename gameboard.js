// gameboard.js
const Gameboard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
  
    const getBoard = () => [...board];
  
    const markCell = (index, playerMarker) => {
      if (index >= 0 && index < board.length && board[index] === '') {
        board[index] = playerMarker;
        return true; // Marking successful
      }
      return false; // Cell already marked or invalid index
    };
  
    const isCellEmpty = (index) => {
      return board[index] === '';
    };
  
    const resetBoard = () => {
      board.fill('');
    };
  
    return { getBoard, markCell, isCellEmpty, resetBoard };
  })();
  