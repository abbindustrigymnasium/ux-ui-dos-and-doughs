import './ProductCard.css'

import { useState } from 'react'

export type productCardProps = {
  imageUrl: string
  title: string
  description?: string
  subtitle: string
  price: number | string
}

function ProductCard(props: productCardProps) {
  //let numAdded : number = 0;

  const [numAddedState, setNumAddedState] = useState(0);

  if (numAddedState < 0) {
    setNumAddedState(0);
  }

  return (
    <div className='product-card-container'>
      <div className='product-card-description'>
        <h1>{props.title}</h1>
        <p>{props.subtitle}<br /><span style={{fontWeight: "600", fontSize: "1.2rem"}}>&nbsp;&nbsp;{props.price}€</span></p>
        <div className='product-button-row'>
          <div onClick={() => {
              console.log('Decrement:', numAddedState - 1);
              setNumAddedState(numAddedState - 1);
            }}>
            <img src='/remove-icon.svg' alt='minus icon' />
          </div>
          
          <p>Added:&nbsp;&nbsp;<span>{numAddedState}</span></p>
          <div onClick={() => {
              console.log('Increment:', numAddedState + 1);
              setNumAddedState(numAddedState + 1);
            }}>
            <img src='/add-icon.svg' alt='plus icon' />
          </div>
        </div>
      </div>
      <div>
        <img className='product-img img-styling' src={props.imageUrl} alt="product image" />
      </div>
    </div>
  )
}

export default ProductCard
