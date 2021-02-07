import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Square from './Square';

it('renders the first square with no value', () => {
    render(<Square
        value={null}
        onClick={() => {}}
        key={0}
        testid={'square-0'}
    />);
    expect(screen.getByTestId('square-0')).toHaveTextContent('');
});

it('renders the second square with a value of X', () => {
    render(<Square
        value={'X'}
        onClick={() => {}}
        key={1}
        testid={'square-1'}
    />);
    expect(screen.getByTestId('square-1')).toHaveTextContent('X');
});

it('renders the third square with a value of O', () => {
    render(<Square
        value={'O'}
        onClick={() => {}}
        key={2}
        testid={'square-2'}
    />);
    expect(screen.getByTestId('square-2')).toHaveTextContent('O');
});