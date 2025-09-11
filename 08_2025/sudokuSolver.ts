/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
    const isValid = (row: number, col: number, num: string): boolean => {
        for (let i = 0; i < 9; i++)
            { // Check the row, column, and 3x3 subgrid
            if (board[row][i] === num || board[i][col] === num || board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + (i % 3)] === num) {
                return false; // if we found a conflict, the number is not valid
            }
        }
        return true; // if we didn't find any conflicts, the number is valid
    };

    const solve = (): boolean => { // Backtracking function
        for (let i = 0; i < 9; i++) 
        { 
            for (let j = 0; j < 9; j++)
            {
                if (board[i][j] === '.')
                {
                    for (let num = 1; num <= 9; num++)
                    {
                        const n = num.toString();

                        if (isValid(i, j, n)) // call isValid using the current row, column, and number
                        {
                            board[i][j] = n;
                            if (solve())
                            {
                                return true; // if we found a solution, return true
                            }
                            board[i][j] = '.';
                        }
                    }
                    return false; // if we didn't find a solution, return false
                }
            }
        }
        return true; // if we filled all cells successfully, the Sudoku is solved
    };

    solve(); // Let's solve the Sudoku puzzle
};