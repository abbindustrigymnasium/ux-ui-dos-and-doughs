import './AddButton.css'

import { Link } from 'react-router-dom'

function AddButton(p: any) {
  return (
    <Link to={p.href} style={{width: "min-content"}}>
      <button
        style={{
          width: p.width,
          boxShadow:
            p.shadow == 'left'
              ? '-20px 10px 40px rgba(0, 0, 0, 0.15)'
              : '20px 10px 40px rgba(0, 0, 0, 0.15)',
        }}
        className={p.inv ? 'button add-button inv' : 'button add-button'}
      >
        <span>
          <span><div className='button-deco add-button-deco'></div>{p.content}</span>
        </span>
      </button>
    </Link>
  )
}

export default AddButton
