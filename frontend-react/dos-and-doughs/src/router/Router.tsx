import { Routes, Route } from 'react-router-dom'

import Home from '../pages/home.tsx'
import Shop from '../pages/shop.tsx'
import Visit from '../pages/visit.tsx'
import Account from '../pages/account.tsx'

function Router() {
    return (
        <Routes>
          <Route path='/' element={<><Home /></>} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/visit' element={<Visit />} />
          <Route path='/account' element={<Account />} />
        </Routes>
    )
}

export default Router