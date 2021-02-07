import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import History from './History';

it('renders history', () => {
    const history = [
        { squares: Array(9).fill(null) }
    ];
    render(<History history={history} jumpToStepInHistory={() => {}} currentStep={0} />);
    expect(screen.getByTestId('history')).toBeInTheDocument();
});