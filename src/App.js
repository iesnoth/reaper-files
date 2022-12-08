import {useState} from 'react'
import Home from './components/Home'

function App() {
  let [search,setSearch] = useState('')
  let[data, setData] = useState([])
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
