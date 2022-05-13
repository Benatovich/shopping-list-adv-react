import { useList } from '../context/ListProvider'

export default function Header() {
  const { items } = useList();

  return (
    <div style={{backgroundColor: 'orange', borderRadius: 30, padding: 0, margin: 5, minHeight: '10vh', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'right', fontSize: 'calc(10px + 1.5vmin)'}}>
      <p style={{backgroundColor: '#232f46', color: 'beige', borderRadius: 10, padding: 5}}>Total items: </p>
      <p style={{backgroundColor: 'beige', color: '#232f46', borderRadius: 10, padding: 5, paddingLeft: 10, paddingRight: 10, marginLeft: 10, marginRight: 10}}>{items.length}</p>
    </div>
  )
}
