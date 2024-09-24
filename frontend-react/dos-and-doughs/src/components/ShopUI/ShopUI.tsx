import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ShopUI.css'

import { productCardProps } from '../ProductCard/ProductCard'

// example products
const products: productCardProps[] = [
  {
    title: 'Product 1',
    price: '$20',
    description: 'some description',
    subtitle: 'some subtitle',
    imageUrl: '/images/tiramisu.webp',
  },
  {
    title: 'Product 2',
    price: '$30',
    description: 'some description',
    subtitle: 'some subtitle',
    imageUrl: '/images/m-m-cookies.webp',
  },
]

function Shop() {
  // state for products
  const [products, setProducts] = useState<productCardProps[]>([])

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
      } finally {
        console.log('finished fetching')
      }
    }

    fetchProducts()
  }, [])
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
