import { Routes, Route } from 'react-router-dom'

import Home from '../pages/home.tsx'
import Shop from '../pages/shop.tsx'
import Visit from '../pages/visit.tsx'

import LoginPage from '../pages/login.tsx'
import SignupPage from '../pages/signup.tsx'

function Router() {
    return (
        <Routes>
          <Route path='/' element={<><Home /></>} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/visit' element={<Visit />} />
          <Route path='/account'>
            <Route path='/account/login' element={<LoginPage />} />
            <Route path='/account/signup' element={<SignupPage />} />
          </Route>
        </Routes>
    )
}

export default Router