import './ProductCard2.css'

import AddButton from '../AddButton/AddButton'
import RemoveButton from '../RemoveButton/RemoveButton.tsx'

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

  return (
    <div className='product-card-container'>
      <div className='product-card-description'>
        <h1>{props.title}</h1>
        <p>{props.subtitle}<br /><span style={{fontWeight: "600", fontSize: "1.2rem"}}>&nbsp;&nbsp;{props.price}€</span></p>
        <div className='product-button-row'>
          <AddButton content='ADD' width='104px' shadow='left' onclick={() => setNumAddedState(numAddedState + 1)}/>
          <RemoveButton content='REMOVE' width='124px' shadow='left' onclick={() => setNumAddedState(numAddedState - 1)}/>
          <p>Added:&nbsp;&nbsp;<span>{numAddedState}</span></p>
        </div>
      </div>
      <div>
        <img className='product-img img-styling' src={props.imageUrl} alt="product image" />
      </div>
    </div>
  )
  /*
  return (
    <div className='product-card img-styling' style={{ backgroundImage: `url(${props.imageUrl})` }}>
      <div className='cake-info'>
        <h1 className='cake-title'>{props.title}</h1>
        <p className='cake-subtitle'>{props.subtitle}</p>
      </div>
      <div className='cake-business'>
        <h1 className='cake-price'>${props.price}</h1>
        <button className='order-button'>Add to Cart</button>
      </div>
    </div>
  )
  */
}

export default ProductCard
