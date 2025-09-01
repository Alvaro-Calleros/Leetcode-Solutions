/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
    const isValid = (row: number, col: number, num: string): boolean => {
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num || board[i][col] === num || board[3 * Math.floor(row / 3) + Math.floor(i / 3)][3 * Math.floor(col / 3) + (i % 3)] === num) {
                return false;
            }
        }
        return true;
    };

    const solve = (): boolean => {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === '.') {
                    for (let num = 1; num <= 9; num++) {
                        const n = num.toString();
                        if (isValid(i, j, n)) {
                            board[i][j] = n;
                            if (solve()) {
                                return true;
                            }
                            board[i][j] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    solve();
};