class TicTacToe {
  constructor() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.currentPlayer = 'X';
    this.winner = null;
  }

  initializeGame() {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.currentPlayer = 'X';
    this.winner = null;
    this.renderBoard();
    this.updateStatus(`Player ${this.currentPlayer}'s turn`);
  }

  renderBoard() {
    const boardDiv = document.getElementById('game-board');
    boardDiv.innerHTML = '';

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = this.board[row][col];
        cell.addEventListener('click', () => this.handleCellClick(row, col));
        boardDiv.appendChild(cell);
      }
    }
  }

  handleCellClick(row, col) {
    if (this.board[row][col] !== '' || this.winner) {
      alert("Invalid move!");
      return;
    }

    this.board[row][col] = this.currentPlayer;
    if (this.checkWinner()) {
      this.winner = this.currentPlayer;
      this.updateStatus(`🏆 Player ${this.currentPlayer} wins!`);
    } else if (this.isDraw()) {
      this.winner = 'Draw';
      this.updateStatus("It's a draw!");
    } else {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      this.updateStatus(`Player ${this.currentPlayer}'s turn`);
    }

    this.renderBoard();
  }

  checkWinner() {
    const b = this.board;
    const p = this.currentPlayer;

    // Rows, columns, diagonals
    for (let i = 0; i < 3; i++) {
      if (b[i][0] === p && b[i][1] === p && b[i][2] === p) return true;
      if (b[0][i] === p && b[1][i] === p && b[2][i] === p) return true;
    }
    if (b[0][0] === p && b[1][1] === p && b[2][2] === p) return true;
    if (b[0][2] === p && b[1][1] === p && b[2][0] === p) return true;

    return false;
  }

  isDraw() {
    return this.board.flat().every(cell => cell !== '');
  }

  updateStatus(message) {
    document.getElementById('status').textContent = message;
  }
}

// Initialize game on load
const game = new TicTacToe();
game.initializeGame();
