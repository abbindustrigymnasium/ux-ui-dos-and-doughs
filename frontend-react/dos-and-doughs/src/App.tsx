import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/home.tsx'
import Shop from './pages/shop.tsx'
import Visit from './pages/visit.tsx'

import Layout from './layout.tsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="visit" element={<Visit />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App