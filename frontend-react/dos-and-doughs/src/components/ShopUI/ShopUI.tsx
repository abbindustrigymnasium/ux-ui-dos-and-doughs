import { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ShopUI.css'

import { productCardProps } from '../ProductCard/ProductCard'

function Shop() {
  // state for products
  const [products, setProducts] = useState<productCardProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/cakes-api.json')
        if (!response.ok) {
          throw new Error('Something went wrong')
        }
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.log(error)
        setError(true)
      } finally {
        console.log('finished fetching')
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
    <div className='shop'>
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
    </div>
  )
}

export default Shop
