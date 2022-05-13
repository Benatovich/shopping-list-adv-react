import { useList } from '../context/ListProvider'

export default function Header() {
  const { items } = useList();

  return (
    <div>Number of Shopping List Items Remaining: {items.length}</div>
  )
}
