import { useLenis } from 'lenis/react'

function BackToTop() {
  const lenis = useLenis()

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0)
      //window.scrollTo(0, 0);
    }
  }

  /*
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }
  */

  return (
    <aside
      style={{ position: 'fixed', bottom: '1.5em', right: '2em', zIndex: '10', opacity: '0' }}
      className='back-to-top'
    >
      <a onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        <div
          style={{
            backgroundColor: 'var(--graphics-color-lighter)',
            paddingInline: '2em',
            paddingBlock: '0.5em',
            borderRadius: 'var(--large-border-radius)',
            color: 'var(--graphics-color)',
            fontSize: '0.8em',
            fontWeight: '600',
          }}
        >
          Back To Top
        </div>
      </a>
    </aside>
  )
}

export default BackToTop
