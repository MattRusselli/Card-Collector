import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import SetDetails from './pages/SetDetails'
import ViewSet from './pages/ViewSet'
import Collections from './pages/Collections'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/sets" element={<SetDetails />} />
          <Route path="/sets/cards/:card" element={<ViewSet />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
