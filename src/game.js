import React, { Component } from 'react';
import {getRandomGrid, calcNextGrid} from './utils';
// import {example1, example2, example3} from './examples';
import {CustomRow} from './customRow';
const NUM_OF_ROWS = 50;
const NUM_OF_COLS = 50;
const TICKS = 0.4 * 1000; // 0.4 seconds

class Game extends Component {
    constructor(props) {
        super(props);
        this.renderGrid = this.renderGrid.bind(this);
        this.state = {
          // NUM_OF_ROWS X NUM_OF_COLS
          grid: getRandomGrid(NUM_OF_ROWS, NUM_OF_COLS), //example3() : if you want to run one example
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.updateGrid(this.state.grid), TICKS);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateGrid = (grid) => {
        let newGrid = calcNextGrid(grid, NUM_OF_ROWS, NUM_OF_COLS);
        this.setState({grid: newGrid});
    };

    // render grid of (NUM_OF_ROWS X NUM_OF_COLS) according to the given matrix
    renderGrid = (grid) => {
        const rows = [];
        for (let rowsIdx = 0; rowsIdx < NUM_OF_ROWS; rowsIdx++) {
            const cols = [];
            for (let colsIdx = 0; colsIdx < NUM_OF_COLS; colsIdx++) {
                let col ='';
                if(grid[rowsIdx][colsIdx]) {
                    col = <td key={rowsIdx + '_' + colsIdx} className='living' style={{background: 'black',width: '10px',height: '10px'}}/>;
                }
                else {
                    col = <td key={rowsIdx + '_' + colsIdx} className='dead' style={{background: 'white',width: '10px',height: '10px'}}/>;
                }
                cols.push(col);
            }
            rows.push(<CustomRow key={rowsIdx} cols={cols} idx={rowsIdx}/>);
        }
        return rows;
    };

    render() {
        return (
            <div className="game-body" style={{display: 'inline-table'}}>
                <table>
                    <tbody>
                        {this.renderGrid(this.state.grid).map(row=> {
                            return row;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Game;
