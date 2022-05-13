import { useState } from 'react'

export default function Item({ item, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

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
                Update Item
            </button>
          </form>
      );
  } else {
      content = (
          <div>
              <p className='item'>
                  {item.text}
              </p>
              <button
                type='button'
                onClick={() => setIsEditing(true)}
                aria-label={`Edit ${item.text}`}>
                Edit Item
              </button>
          </div>
      );
  }

  return (
    <div>
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
        {content}
        <button
          type='button'
          onClick={() => onDelete(item.id)}
          aria-label={`Delete ${item.text}`}>
            Delete Item
        </button>
    </div>
  );
}
