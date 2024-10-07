import './ProductCard.css'

import { useState } from 'react'

export type productCardProps = {
  imageUrl: string
  title: string
  description?: string
  subtitle: string
  price: number | string
  onIncrement: () => void
  onDecrement: () => void
}

function ProductCard(props: productCardProps) {
  const [numAddedState, setNumAddedState] = useState(0)

  const increment = () => {
    setNumAddedState(prev => prev + 1)
    props.onIncrement() // Call the parent increment function
  }

  const decrement = () => {
    if (numAddedState > 0) {
      setNumAddedState(prev => prev - 1)
      props.onDecrement() // Call the parent decrement function
    }
  }

  return (
    <div className='product-card-container'>
      <div className='product-card-description'>
        <h1>{props.title}</h1>
        <p>
          {props.subtitle}
          <br />
          <span style={{ fontWeight: '600', fontSize: '1.2rem' }}>&nbsp;&nbsp;{props.price}€</span>
        </p>
        <div className='product-button-row'>
          <div onClick={decrement}>
            <img src='/remove-icon.svg' alt='minus icon' />
          </div>

          <p>
            Added:&nbsp;&nbsp;<span>{numAddedState}</span>
          </p>
          <div onClick={increment}>
            <img src='/add-icon.svg' alt='plus icon' />
          </div>
        </div>
      </div>
      <div>
        <img className='product-img img-styling' src={props.imageUrl} alt='product image' />
      </div>
    </div>
  )
}

export default ProductCard
