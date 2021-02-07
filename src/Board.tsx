import Square from './Square';

interface boardProps {
    squares: (string | null)[];
    onClick: (i: number) => void;
}

function Board(props: boardProps):JSX.Element {

    const {squares, onClick} = props;

    function renderSquare(i: number):JSX.Element {
        return (
            <Square
                value={squares[i]}
                onClick={() => onClick(i)}
                key={i}
                testid={'square-' + i}
            />
        );
    }

    function createBoard(): JSX.Element[] {
        const board: JSX.Element[] = [];
        let k: number = 0;

        for (let i = 0; i < 3; i++) {
            let squares: JSX.Element[] = [];
            for (let j = 0; j < 3; j++) {
                squares.push(renderSquare(k));
                k++;
            }
            board.push(<div className="board-row" key={i}>{squares}</div>);
        }
        return board;
    }

    return (
        <div className="game-board" data-testid="game-board" role="region" aria-label="Tic Tac Toe Board">
            {createBoard()}
        </div>
    );
}

export default Board;