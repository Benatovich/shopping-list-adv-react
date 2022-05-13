import { useState } from 'react'
import styles from './Item.css'

export default function Item({ item, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
//   const [isDone, setIsDone] = useState(false);

  let content;

  if (isEditing) {
      content = (
          <form
            onSubmit={(e) => {
                e.preventDefault();
                setIsEditing(false);
            }}
          >
            <input
              value={item.text}
              onChange={(e) => {
                  onUpdate({
                      ...item,
                      text: e.target.value
                  });
              }}
            />

            <button type='submit'>
                Save Changes
            </button>
          </form>
      );
  } else {
      content = (
          <div>
              <p aria-label='item-container' style={{ textDecoration: item.done ? 'line-through' : null }}>
                  {item.text}
              </p>
              {/* <button
                type='button'
                onClick={() => setIsEditing(true)}
                aria-label={`Edit ${item.text}`}>
                Update Item
              </button> */}
          </div>
      );
  }

  return (
    <div className='item-container' style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} >
        <input
          type='checkbox'
          checked={item.done}
          onChange={(e) => {
              onUpdate({
                  ...item,
                  done: e.target.checked,
              });
          }}
        />
            <div>
                {content}
            </div>
        <button
          type='button'
          style={{ visibility: isEditing ? 'hidden' : !'hidden' }}
          onClick={() => setIsEditing(true)}
          aria-label={`Edit ${item.text}`}>
            Update Item
        </button>
        <button
          type='button'
          style={{ visibility: isEditing ? 'hidden' : !'hidden' }}
          onClick={() => onDelete(item.id)}
          aria-label={`Delete ${item.text}`}>
            Delete Item
        </button>
        <hr/>
    </div>
  );
}
