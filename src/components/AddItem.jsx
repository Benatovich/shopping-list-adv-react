import { useState } from 'react'
import { useList } from '../context/ListProvider';

export default function AddItem() {
    const [newItem, setNewItem] = useState('');
    const { handleAddItem } = useList();

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddItem(newItem);
        setNewItem('');
    };

  return (
    <form onSubmit={handleSubmit}>
        <input
            type='text'
            name='newItem'
            placeholder='Enter shopping list item here'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button type='submit'>
            Add Item
        </button>
    </form>
  )
}
