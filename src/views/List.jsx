import Item from '../components/Item'
import AddItem from '../components/AddItem'
import { useList } from '../context/ListProvider'

export default function List() {
  const { items, handleUpdateItem, handleDeleteItem } = useList();


  return (
    <div>
      <h1>Shopping List:</h1>
      <AddItem />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item
              item={item}
              onUpdate={handleUpdateItem}
              onDelete={handleDeleteItem}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
