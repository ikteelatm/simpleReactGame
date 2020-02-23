
/**
 * init the grid with ZEROS - WHITE
 * @param numOfRows
 * @param numOfCols
 * @returns {Array}
 */
const initWithDeadCells = (numOfRows, numOfCols) => {
    const deadCells = [];
    for (let rowsIdx = 0; rowsIdx < numOfRows; rowsIdx++) {
        let row = [];
        for (let colsIdx = 0; colsIdx < numOfCols; colsIdx++) {
            row[colsIdx] = 0;
        }
        deadCells[rowsIdx] = row;

    }
    return deadCells;
};

export const getRandomGrid = (numOfRows, numOfCols) => {
    const grid = initWithDeadCells(numOfRows, numOfCols);
    // Get arbitrary num of living cells
    const numOfLivingCells = Math.floor(Math.random() * (numOfRows * numOfCols - 1));

    for(let cntr = 0, visited=true; cntr < numOfLivingCells; cntr++, visited=true) {
        while(visited) {
            const randIdx = Math.floor(Math.random() * (numOfRows * numOfCols - 1));
            const row = Math.floor(randIdx / numOfCols);
            const col = randIdx % numOfCols;
            if(!grid[row][col]) {
                grid[row][col] = 1;
                visited = false;
            }
        }
    }

    return grid;
};

/**
 * Get number of living neighbours (Verify all the neighbours - which are 8 neighbours)
 * @param grid
 * @param rowIdx
 * @param colIdx
 * @param NUM_OF_COLS
 * @param NUM_OF_ROWS
 */
export const getNumberOfLivingNeighbours = (grid, rowIdx, colIdx, NUM_OF_ROWS, NUM_OF_COLS) => {
    let count = 0;

    if(NUM_OF_ROWS <= 0 || NUM_OF_COLS <= 0)
        return 0;

    // Check all neighbours values in the previous row
    count += (rowIdx - 1 >= 0 && rowIdx - 1 < NUM_OF_ROWS && colIdx - 1 >= 0 && colIdx - 1 < NUM_OF_COLS && grid[rowIdx - 1][colIdx - 1]) ? 1 : 0;
    count += (rowIdx - 1 >= 0 && rowIdx - 1 < NUM_OF_ROWS && colIdx >= 0 && colIdx < NUM_OF_COLS && grid[rowIdx - 1][colIdx]) ? 1 : 0;
    count += (rowIdx - 1 >= 0 && rowIdx - 1 < NUM_OF_ROWS && colIdx + 1 >= 0 && colIdx + 1 < NUM_OF_COLS && grid[rowIdx - 1][colIdx + 1]) ? 1 : 0;

    // Check all neighbours values in the same row
    count += (rowIdx >= 0 && rowIdx < NUM_OF_ROWS && colIdx - 1 >= 0 && colIdx - 1 < NUM_OF_COLS && grid[rowIdx][colIdx - 1]) ? 1 : 0;
    count += (rowIdx >= 0 && rowIdx < NUM_OF_ROWS && colIdx + 1 >= 0 && colIdx + 1 < NUM_OF_COLS && grid[rowIdx][colIdx + 1]) ? 1 : 0;

    // Check all neighbours values in the next row
    count += (rowIdx + 1 >= 0 && rowIdx + 1 < NUM_OF_ROWS && colIdx - 1 >= 0 && colIdx - 1 < NUM_OF_COLS && grid[rowIdx + 1][colIdx - 1]) ? 1 : 0;
    count += (rowIdx + 1 >= 0 && rowIdx + 1 < NUM_OF_ROWS && colIdx >= 0 && colIdx < NUM_OF_COLS && grid[rowIdx + 1][colIdx]) ? 1 : 0;
    count += (rowIdx + 1 >= 0 && rowIdx + 1 < NUM_OF_ROWS && colIdx + 1 >= 0 && colIdx + 1 < NUM_OF_COLS && grid[rowIdx + 1][colIdx + 1]) ? 1 : 0;

    return count;
};

/**
 *  Rule 1. Any live cell with fewer than two live neighbours dies (underpopulation).
 * @param grid
 * @param rowIdx
 * @param colIdx
 * @param numOfLiving
 */
const isFirstRuleApplied = (grid, rowIdx, colIdx, numOfLiving) => {
    return (grid[rowIdx][colIdx] && numOfLiving < 2);
};
/**
 * 2. Any live cell with two or three live neighbours lives on to the next generation.
 * @param grid
 * @param rowIdx
 * @param colIdx
 * @param numOfLiving
 */
const isSecondRuleApplied = (grid, rowIdx, colIdx, numOfLiving) => {
    return (grid[rowIdx][colIdx] && (numOfLiving === 2 || numOfLiving === 3));
};
/**
 * 3. Any live cell with more than three live neighbours dies (overcrowding).
 * @param grid
 * @param rowIdx
 * @param colIdx
 * @param numOfLiving
 */
const isThirdRuleApplied = (grid, rowIdx, colIdx, numOfLiving) => {
    return (grid[rowIdx][colIdx] && numOfLiving > 3);
};
/**
 * 4. Any dead cell with exactly three live neighbours becomes a live cell (reproduction).
 * @param grid
 * @param rowIdx
 * @param colIdx
 * @param numOfLiving
 */
const isFourthRuleApplied = (grid, rowIdx, colIdx, numOfLiving) => {
    return (!grid[rowIdx][colIdx] && numOfLiving === 3);
};

/**
 * calc Grid and next state according to the given grid
 *
 *
 1. Any live cell with fewer than two live neighbours dies (underpopulation).

 2. Any live cell with two or three live neighbours lives on to the next generation.

 3. Any live cell with more than three live neighbours dies (overcrowding).

 4. Any dead cell with exactly three live neighbours becomes a live cell (reproduction).
 */
export const calcNextGrid = (grid, NUM_OF_ROWS, NUM_OF_COLS) => {
    let newGrid = [];
    for (let rowsIdx = 0; rowsIdx < NUM_OF_ROWS; rowsIdx++) {
        let cols = [];
        for (let colsIdx = 0; colsIdx < NUM_OF_COLS; colsIdx++) {
            const numOfLiving = getNumberOfLivingNeighbours(grid, rowsIdx, colsIdx, NUM_OF_ROWS, NUM_OF_COLS);
            if(isFirstRuleApplied(grid, rowsIdx, colsIdx, numOfLiving)) {
                cols[colsIdx] = 0;
            } else if(isSecondRuleApplied(grid, rowsIdx, colsIdx, numOfLiving)) {
                cols[colsIdx] = 1;
            } else if (isThirdRuleApplied(grid, rowsIdx, colsIdx, numOfLiving)) {
                cols[colsIdx] = 0;
            } else if (isFourthRuleApplied(grid, rowsIdx, colsIdx, numOfLiving)) {
                cols[colsIdx] = 1;
            } else
                cols[colsIdx] = grid[rowsIdx][colsIdx];
        }
        newGrid[rowsIdx] = cols;
    }

    return newGrid;
};