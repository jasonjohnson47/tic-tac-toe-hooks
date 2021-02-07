import {calculateWinner} from './logic';

type squaresArr = (string | null)[];

it('returns "X" - X wins across top row', () => {
    const squares: squaresArr = ['X', 'X', 'X', null, null, null, null, null, null];
    const expected = 'X';
    const result = calculateWinner(squares);
    expect(result).toEqual(expected);
});

it('returns "O" - O wins along left column', () => {
    const squares: squaresArr = ['O', null, null, 'O', null, null, 'O', null, null];
    const expected = 'O';
    const result = calculateWinner(squares);
    expect(result).toEqual(expected);
});

it('returns "X" - X wins on a diagonal', () => {
    const squares: squaresArr = ['X', null, null, null, 'X', null, null, null, 'X'];
    const expected = 'X';
    const result = calculateWinner(squares);
    expect(result).toEqual(expected);
});

it('returns null - empty board', () => {
    const squares: squaresArr = [null, null, null, null, null, null, null, null, null];
    const expected = null;
    const result = calculateWinner(squares);
    expect(result).toEqual(expected);
});

it('returns null - no winner', () => {
    const squares: squaresArr = ['O', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'X'];
    const expected = null;
    const result = calculateWinner(squares);
    expect(result).toEqual(expected);
});