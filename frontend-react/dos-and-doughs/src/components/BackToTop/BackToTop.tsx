import { useLenis } from 'lenis/react';

function BackToTop() {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0);  // Use Lenis to scroll smoothly to the top
    }
  };

  return (
    <aside style={{ position: 'fixed', bottom: '1.5em', right: '2em' }} className="back-to-top">
      <div style={{backgroundColor: 'var(--graphics-color-lighter)', paddingInline: '2em', paddingBlock: '0.5em', borderRadius: 'var(--large-border-radius)', color: 'var(--graphics-color)', fontSize: '0.8em', fontWeight: '600'}}>
        <a onClick={scrollToTop} style={{ cursor: 'pointer' }}>Back To Top</a>
      </div>
    </aside>
  );
}

export default BackToTop;