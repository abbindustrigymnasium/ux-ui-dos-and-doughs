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

  const [totalItems, setTotalItems] = useState(0)

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

  // Function to increment the total number of items
  const incrementTotalItems = () => {
    setTotalItems(prev => prev + 1)
  }

  // Function to decrement the total number of items
  const decrementTotalItems = () => {
    setTotalItems(prev => (prev > 0 ? prev - 1 : 0)) // Ensure it doesn't go negative
  }

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
        <div className='shop-tabs'>
          <div>Cakes</div>
          <div className='vertical-line'></div>
          <div>Drinks</div>
          <div className='vertical-line'></div>
          <div>Snacks</div>
        </div>
        <div className='shop-extra'>
          <div className='shop-filters'>
            <div className='shop-filter'>Sort by</div>
            <div style={{ display: 'flex', columnGap: '0.5em', alignItems: 'start' }}>
              <div className='shop-filter'>Presets</div>
              <img src='/help-icon.svg' alt='help icon' />
            </div>
          </div>
          <div className='shop-go-to-cart link'>
            <img src='/cart-icon.svg' alt='cart icon' />
            <span>
              To cart (<span>{totalItems}</span> items)
            </span>
          </div>
        </div>
      </div>
      <div className='products-layout'>
        {products.map((product: productCardProps, index: number) => (
          <ProductCard
            key={index}
            title={product.title}
            price={product.price}
            description={product.description}
            subtitle={product.subtitle}
            imageUrl={product.imageUrl}
            onIncrement={incrementTotalItems}
            onDecrement={decrementTotalItems}
          />
        ))}
      </div>
    </>
  )
}

export default Shop
