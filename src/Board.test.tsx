import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Board from './Board';

it('renders the board', () => {
    const squares: (string | null)[] = Array(9).fill(null);
    const onClick: ()=> void = ( /* i: number */ ) => { /* handleSquareClick(i) */ };
    render(<Board squares={squares} onClick={onClick} />);
    expect(screen.getByTestId('game-board')).toBeInTheDocument();
});