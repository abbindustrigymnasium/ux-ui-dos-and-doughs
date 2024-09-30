import './CustomButton.css'

import { Link } from 'react-router-dom'

function CustomButton(p: any) {
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
        className={p.inv ? 'button inv' : 'button'}
      >
        <span>
          <span>{p.content}</span>
        </span>
      </button>
    </Link>
  )
}

export default CustomButton
