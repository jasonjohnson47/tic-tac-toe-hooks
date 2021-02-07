import { useState } from 'react';
import Board from './Board';
import History from './History';
import {calculateWinner} from './logic';

type squaresArr = (string | null)[];

interface historyObj {
    squares: squaresArr;
}

function Game():JSX.Element {

    const [history, setHistory]: [historyObj[], React.Dispatch<React.SetStateAction<historyObj[]>>] = useState([
        { squares: Array(9).fill(null) }
    ]);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);
    const current: historyObj = history[stepNumber];
    
    const winner: string | null = calculateWinner(current.squares);
    let status: string;
    if (winner !== null) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    function handleSquareClick(i: number): void {
        const squares: squaresArr = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory(history.concat([{squares: squares}]));
        setXIsNext(!xIsNext);
        setStepNumber(history.length);
    }

    function jumpToStepInHistory(step: number) {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }

    return (
        <div className="game" data-testid="game">
            <h1 className="sr-only">Tic Tac Toe</h1>
            <Board
                squares={current.squares}
                onClick={(i: number) => handleSquareClick(i)}
            />
            <div className="game-info">
                <div className="status" aria-live="assertive" aria-atomic="true">{status}</div>
                <h2>Game History</h2>
                <History history={history} jumpToStepInHistory={jumpToStepInHistory} currentStep={stepNumber} />
            </div>
        </div>
    );
}

export default Game;