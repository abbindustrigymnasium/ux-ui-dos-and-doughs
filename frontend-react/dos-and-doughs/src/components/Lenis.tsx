import { ReactLenis } from 'lenis/react'

function Lenis({ children }: any) {
    return (
        <ReactLenis root>{children}</ReactLenis>
    )
}

export default Lenis