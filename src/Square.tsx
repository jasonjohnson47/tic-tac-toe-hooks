interface SquareProps {
    value: string | null;
    onClick: () => void;
    key: number;
    testid: string;
}

function Square(props: SquareProps) {
    const {onClick, testid} = props;
    return (
        <button className="square" onClick={onClick} data-testid={testid}>
            {props.value}
        </button>
    );
}

export default Square;