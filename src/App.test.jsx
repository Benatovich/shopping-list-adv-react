import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(() => {
    render(<App />);
});

it('displays a list of items', () => {
    const item = screen.getAllByLabelText('item-container');

    expect(item).toStrictEqual(expect.arrayContaining([]))
})