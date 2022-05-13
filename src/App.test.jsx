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

it('creates a new item', () => {
    const inputBox = screen.getByRole('textbox');
    userEvent.type(inputBox, 'new item');
    
    const button = screen.getByRole('button', {  name: /add item/i});
    userEvent.click(button);

    const newItem = screen.getByText(/new item/i);
    
    expect(newItem).toBeInTheDocument();
})

it('updates an existing item', () => {
    // const milk = screen.getByText(/gallon of milk/i);
    const updateButton = screen.getByRole('button', {  name: /edit gallon of milk/i});
    userEvent.click(updateButton);

    // const list = screen.getByRole('list');
    // const inputBox = within(list).getByRole('textbox');
    const inputBox = screen.getByDisplayValue(/gallon of milk/i)
    userEvent.type(inputBox, 'beer');

    const saveButton = screen.getByRole('button', {  name: /save changes/i});
    userEvent.click(saveButton);

    const beer = screen.getByText(/beer/i);
    expect(beer).toBeInTheDocument();
})

// it('should increment the counter when increment pressed', () => {
//     const counter = screen.getByRole('heading');
//     expect(counter).toHaveTextContent('0');
//     expect(counter).toHaveStyle(`color: ${yellow}`);
  
//     const incrementButton = screen.getByRole('button', { name: 'increment' });
//     userEvent.click(incrementButton);
//     expect(counter).toHaveTextContent('1');
//     expect(counter).toHaveStyle(`color: ${green}`);
  
//     userEvent.click(incrementButton);
//     expect(counter).toHaveTextContent('2');
//     expect(counter).toHaveStyle(`color: ${green}`);
//   });
  