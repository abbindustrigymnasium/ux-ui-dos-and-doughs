import './ProductCard.css'

export type productCardProps = {
  imageUrl: string
  title: string
  description?: string
  subtitle: string
  price: number | string
}

function ProductCard(props: productCardProps) {
  return (
    <div className='product-card img-styling' style={{ backgroundImage: `url(${props.imageUrl})` }}>
      <div className='cake-info'>
        <h1 className='cake-title'>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
    </div>
  )
}

export default ProductCard
