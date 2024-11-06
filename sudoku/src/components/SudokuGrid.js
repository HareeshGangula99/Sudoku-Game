import React from 'react';

const SudokuGrid = ({ grid, onCellChange }) => {
  const handleChange = (rowIndex, colIndex, e) => {
    const value = e.target.value;
    if (/^[1-9]$/.test(value) || value === '') {
      onCellChange(rowIndex, colIndex, value === '' ? 0 : parseInt(value));
    }
  };

  return (
    <table className="sudoku-grid">
      <tbody>
        {grid.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex}>
                <input
                  type="text"
                  value={cell === 0 ? '' : cell}
                  onChange={(e) => handleChange(rowIndex, colIndex, e)}
                  maxLength={1}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SudokuGrid;
