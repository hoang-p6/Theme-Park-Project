import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import AddRide from './components/AddRide'

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createRide" element={<AddRide />} />

        </Routes>
      </main>
    </div>
  )
}

export default App
