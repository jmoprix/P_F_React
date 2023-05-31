import './App.css'
import Home from './pages/Home'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            element={<Home />}
            path="/"
          />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
