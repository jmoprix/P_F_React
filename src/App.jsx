import './App.css'
import Home from './pages/Home'
import { HashRouter, Routes, Route } from 'react-router-dom'
import AppNavBar from './components/AppNavBAr'
import Purchases from './pages/Purchases'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Loader from './components/Loader'

function App() {

  return (
    <>
      <HashRouter>
        <Loader/>
        <AppNavBar />
        <Routes>
          <Route
            element={<Home />}
            path='/'
          />
          <Route
            element={<Login />}
            path='/login' />
          <Route
            element={<ProductDetail />}
            path='/productdetail/:id'
          />
          <Route
            element={<Purchases />}
            path='/purchases'
          />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
