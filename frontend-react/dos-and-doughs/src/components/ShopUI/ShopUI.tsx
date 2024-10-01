import { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ShopUI.css'

import { productCardProps } from '../ProductCard/ProductCard'

import SectionDivider from '../SectionDivider/SectionDivider.tsx'

function Shop() {
  // state for products
  const [products, setProducts] = useState<productCardProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/cakes.json')
        if (!response.ok) {
          throw new Error('Something went wrong')
        }
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.log(error)
        setError(true)
      } finally {
        console.log('Finished fetching product images')
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (error) {
    return <h1 className='error'>Something went wrong</h1>
  }

  if (loading) {
    return <h1 className='loading'>Loading...</h1>
  }

  return (
    <>
      <div className='shop-nav-container'>
        <div className='shop-header'>
          <SectionDivider />
          <h1>Order anything anywhere</h1>
        </div>
        <div className='shop-spread'>
          <p>Added total items: 0</p>
          <p>Cart</p>
        </div>
        <div className='shop-spread'>
          <div>Cakes</div>
          <div className='vertical-line'></div>
          <div>Drinks</div>
          <div className='vertical-line'></div>
          <div>Snacks</div>
        </div>
        <div>
          Presets
          Sort by
        </div>
      </div>
      {products.map((product: productCardProps, index: number) => (
        <ProductCard
          key={index}
          title={product.title}
          price={product.price}
          description={product.description}
          subtitle={product.subtitle}
          imageUrl={product.imageUrl}
        />
      ))}
    </>
  )
}

export default Shop
