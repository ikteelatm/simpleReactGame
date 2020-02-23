/**
 * If you want to use any of these examples:
 *
 * 1. you just modify line: 15 in game.js with any example you want
 * 2. DON'T FORGOT TO TO CHANGE THE CONSTANTS OF THE NUM_OF_ROWS && NUM_OF_COLS according to yours example dimensions.
 */

/**
 * 5X5 grid example
 *
 00000           00000
 00000           00100
 01110 - tick -> 00100
 00000           00100
 00000           00000

 * @returns {*}
 */
export const example1 = () => {
    const grid = [];
    grid[0] = [0,0,0,0,0];
    grid[1] = [0,0,0,0,0];
    grid[2] = [0,1,1,1,0];
    grid[3] = [0,0,0,0,0];
    grid[4] = [0,0,0,0,0];

    return grid;
};
/**
 * 6X6 grid example
 *
 *
 * @returns {Array}
 */
export const example2 = () => {
    const grid = [];
    grid[0] = [0,0,0,0,0,0];
    grid[1] = [0,0,0,1,0,0];
    grid[2] = [0,1,0,0,1,0];
    grid[3] = [0,1,0,0,1,0];
    grid[4] = [0,0,1,0,0,0];
    grid[5] = [0,0,0,0,0,0];

    return grid;
};
/**
 * 17X17 according to the screenshots appears in images folder/example_17_17.png
 * @returns {Array}
 */
export const example3 = () => {
    const grid = [];
    grid[0] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    grid[1] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    grid[2] = [0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0];
    grid[3] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    grid[4] = [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0];
    grid[5] = [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0];
    grid[6] = [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0];
    grid[7] = [0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0];
    grid[8] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    grid[9] = [0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0];
    grid[10] = [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0];
    grid[11] = [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0];
    grid[12] = [0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0];
    grid[13] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    grid[14] = [0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0];
    grid[15] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    grid[16] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    return grid;
};