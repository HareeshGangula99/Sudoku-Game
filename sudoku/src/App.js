import React, { useState } from 'react';
import SudokuGrid from './components/SudokuGrid';
import { solveSudoku } from './utils/sudokuSolver';
import './styles/App.css';

const App = () => {
  const [grid, setGrid] = useState(
    Array(9).fill().map(() => Array(9).fill(0)) 
  );
  const [errorMessage, setErrorMessage] = useState('');

  const handleCellChange = (rowIndex, colIndex, value) => {
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex] = value;
    setGrid(newGrid);
    setErrorMessage('');
  };

  const handleSolve = () => {
    const gridCopy = grid.map(row => [...row]);
    if (solveSudoku(gridCopy)) {
      setGrid(gridCopy);
      setErrorMessage('');
    } else {
      setErrorMessage('No solution exists for this puzzle.');
    }
  };

  return (
    <div className="App">
      <h1>Sudoku Solver</h1>
      <SudokuGrid grid={grid} onCellChange={handleCellChange} />
      <button onClick={handleSolve}>Solve</button>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default App;
