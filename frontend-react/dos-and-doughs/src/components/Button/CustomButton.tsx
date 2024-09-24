import './CustomButton.css'

function CustomButton(p: any) {
  /*
  interface p {
    width: string,
    shadow: string,
    href: string,
    content: string,
    inv?: boolean
  }
  */

  return (
    /*
    <button>
      <div  style={{ width: p.width, boxShadow: p.shadow == "left" ? "-20px 10px 40px rgba(0, 0, 0, 0.2)" : "20px 10px 40px rgba(0, 0, 0, 0.2)",}}
          className={p.inv ? "button inv" : "button"}>
        <a href="{p.href}">
          <span>{p.content}</span>
        </a>
      </div>
    </button>
    */
    <a href={p.href}>
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
    </a>
  )
}

export default CustomButton
