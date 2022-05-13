import { createContext, useContext, useEffect, useReducer } from 'react';

const storedItems = localStorage.getItem('list');
const initialItems = storedItems
    ? JSON.parse(storedItems)
    : [
        { id: 0, text: 'Loaf of bread', done: false },
        { id: 1, text: 'Dozen eggs', done: false },
        { id: 2, text: 'Gallon of milk', done: false },
      ]
const saveToStorage = (list) => localStorage.setItem('list', JSON.stringify(list))

function itemsReducer(items, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            return [
                ...items,
                {
                    id: action.id,
                    text: action.text,
                    done: false
                },
            ]
        }
        case 'UPDATE_ITEM': {
            return items.map((item) => {
                if (item.id === action.task.id) {
                    return action.task
                }
                return item
            })
        }
        case 'DELETE_ITEM': {
            return items.filter((item) => item.id !== action.id)
        }
        case 'CLEAR_LIST': {
            return []
        }
        default: {
            throw Error(`Unknown action: ${action.type}`)
        }
    }
}

export const ListContext = createContext()

export const ListProvider = ({ children }) => {
    const [items, dispatch] = useReducer(itemsReducer, initialItems)

    useEffect(() => {
        saveToStorage(items)
    }, [items])

    const handleAddItem = (text) => {
        dispatch({
            type: 'ADD_ITEM',
            id: items.length,
            text
        })
    }

    const handleUpdateItem = (task) => {
        dispatch({
            type: 'UPDATE_ITEM',
            task
        })
    }

    const handleDeleteItem = (taskId) => {
        dispatch({
            type: 'DELETE_ITEM',
            id: taskId,
        })
    }

    const handleClearList = () => {
        dispatch({
            type: 'CLEAR_LIST'
        })
    }

    return (
        <ListContext.Provider
            value={{ items, handleAddItem, handleUpdateItem, handleDeleteItem, handleClearList }} >
            {children}
        </ListContext.Provider>
    )
}

export const useList = () => {
    const context = useContext(ListContext)

    if (context === undefined)
        throw new Error('useList must be called from within a ListProvider');

  return context;
};
