
import {getNumberOfLivingNeighbours, calcNextGrid} from '../utils';

describe("Verify rules", () => {

    it("Verify empty grid for getNumberOfLivingNeighbours", () => {
        const grid = [];
        const output = 0;
        expect(getNumberOfLivingNeighbours(grid, 0, 0, 0, 0)).toBe(output);
    });

    it("Verify getNumberOfLivingNeighbours wokring properly", () => {
        const grid = [];
        grid[0] = [0,0];
        grid[1] = [1,1];

        const output = 2;
        expect(getNumberOfLivingNeighbours(grid, 0, 1, 2, 2)).toBe(output);
    });

    //1. Any live cell with fewer than two live neighbours dies (underpopulation).
    it("Verify rule1", () => {
        const grid = [];
        grid[0] = [0,0];
        grid[1] = [1,1];

        const output = [];
        output[0] = [0,0];
        output[1] = [0,0];

        expect(calcNextGrid(grid, 2, 2)).toEqual(output);
    });

    //2. Any live cell with two or three live neighbours lives on to the next generation.
    it("Verify rule2", () => {
        const grid = [];
        grid[0] = [1,1];
        grid[1] = [1,1];

        const output = [];
        output[0] = [1,1];
        output[1] = [1,1];
        expect(calcNextGrid(grid, 2, 2)).toEqual(output);
    });

    //3. Any live cell with more than three live neighbours dies (overcrowding).
    it("Verify rule3", () => {
        const grid = [];
        grid[0] = [1,1,1];
        grid[1] = [1,1,1];
        grid[2] = [1,1,1];

        const output = [];
        output[0] = [1,0,1];
        output[1] = [0,0,0];
        output[2] = [1,0,1];

        expect(calcNextGrid(grid, 3, 3)).toEqual(output);
    });

    //4. Any dead cell with exactly three live neighbours becomes a live cell (reproduction).
    it("Verify rule4", () => {
        const grid = [];
        grid[0] = [1,1];
        grid[1] = [1,0];

        const output = [];
        output[0] = [1,1];
        output[1] = [1,1];

        expect(calcNextGrid(grid, 2, 2)).toEqual(output);
    });

    // Verify rule2 && rule4
    it("Verify rule2 && rule4", () => {
        const grid = [];
        grid[0] = [1,0];
        grid[1] = [1,1];

        const output = [];
        output[0] = [1,1];
        output[1] = [1,1];
        expect(calcNextGrid(grid, 2, 2)).toEqual(output);
    });

    // Verify rule3 && rule4
    it("Verify rule3 and rule4", () => {
        const grid = [];
        grid[0] = [1,1,0];
        grid[1] = [1,1,1];
        grid[2] = [0,0,0];

        const output = [];
        output[0] = [1,0,1];
        output[1] = [1,0,1];
        output[2] = [0,1,0];

        expect(calcNextGrid(grid, 3, 3)).toEqual(output);
    });
});