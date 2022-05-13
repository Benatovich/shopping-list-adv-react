import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(() => {
    render(<App />);
});

it('displays a list of items', () => {
    const itemArray = screen.getAllByLabelText('item-container');
    const bread = screen.getByText(/loaf of bread/i);
    const eggs = screen.getByText(/dozen eggs/i);
    const milk = screen.getByText(/gallon of milk/i);

    expect(itemArray).toEqual([bread, eggs, milk])
})