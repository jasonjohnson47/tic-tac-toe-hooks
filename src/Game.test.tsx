import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Game from './Game';

// Basic smoke test
it('renders Game component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Game />, div);
});

// Using Testing Library, basically another smoke test
it('renders the game div', () => {
    render(<Game />);
    expect(screen.getByTestId('game')).toBeInTheDocument();
});

it('the status shows the next player', () => {
    render(<Game />);
    expect(screen.getByText(/Next player: [XO]/i)).toBeInTheDocument();
});

it('declares X the winner', () => {
    render(<Game />);
    userEvent.click(screen.getByTestId('square-0')); // X top left
    userEvent.click(screen.getByTestId('square-3')); // O middle left
    userEvent.click(screen.getByTestId('square-1')); // X top middle
    userEvent.click(screen.getByTestId('square-4')); // O middle middle
    userEvent.click(screen.getByTestId('square-2')); // X top right
    expect(screen.getByText('Winner: X')).toBeInTheDocument();
});

it('adds an X or an O when an empty square is clicked', () => {
    render(<Game />);
    const square = screen.getByTestId('square-0');
    userEvent.click(square);
    expect(square).toHaveTextContent(/[XO]/);
});

it('does not change the value of a square if it is already set', () => {
    render(<Game />);
    const square = screen.getByTestId('square-0');
    let value: string | null = square.textContent;
    userEvent.click(square);
    value = square.textContent;
    expect(square).toHaveTextContent(value !== null ? value : '');
    userEvent.click(square);
    value = square.textContent;
    expect(square).toHaveTextContent(value !== null ? value : '');
});