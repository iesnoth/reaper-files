import {useState} from 'react'
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import Home from './components/Home'
import CurrentAssign from './components/CurrentAssign'
import ObitResults from './components/ObitResults'
import TheRules from './components/TheRules'
import './App.css'

function App() {
  let [search,setSearch] = useState('')
  let[data, setData] = useState([])
  return (
    <div className="App">
      <Router>
      <header style={{textAlign:"center"}}>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/rules">The Rules</Link>
          <Link className="link" to="/current">Your Current Assignment</Link>
          <Link className="link" to="/past">Past Assignments</Link>
      </header>

      <div className="display">
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/rules" element= {<TheRules/>} />
          <Route path="/current" element= {<CurrentAssign/>} />
          <Route path="/past" element= {<ObitResults/>} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
