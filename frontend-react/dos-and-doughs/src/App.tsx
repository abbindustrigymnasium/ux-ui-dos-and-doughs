import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/home.tsx'
import Shop from './pages/shop.tsx'
import Visit from './pages/visit.tsx'
import Account from './pages/account.tsx'

import Layout from './layout.tsx'

import ScrollToTop from './components/ScrollToTopFunc.ts';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='visit' element={<Visit />} />
          <Route path='account' element={<Account />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
