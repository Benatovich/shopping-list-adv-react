import Header from './components/Header'
import { ListProvider } from './context/ListProvider'
import List from './views/List'
import './App.css'

export default function App() {
  return (
    <div className='App' style={{}}>
      <ListProvider>
        <Header />
        <div className='App-main' style={{textAlign: 'center', backgroundColor: '#232f46',  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'top', fontSize: 'calc(10px + 2vmin)', color: 'beige', margin: 0, borderRadius: 30}}>
          <List />
        </div>
      </ListProvider>
    </div>
  );
}

{/* <div className='App' style={{backgroundColor: '#232f46', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'beige', borderRadius: 30}}> */}
