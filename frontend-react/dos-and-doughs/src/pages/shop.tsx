import ShopUI from '../components/ShopUI/ShopUI'

import { Helmet, HelmetProvider } from 'react-helmet-async';

function Shop() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Do's & Doughs | Shop</title>
      </Helmet>
      <section id='shop'>
        <ShopUI />
      </section>
    </HelmetProvider>
  )
}

export default Shop
