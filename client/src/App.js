import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Routes></Routes>
      </main>
    </div>
  )
}

export default App
