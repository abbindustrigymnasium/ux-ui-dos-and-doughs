import './MaskAnimation.css'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function MaskAnimation() {
    useGSAP(() => {
        gsap.fromTo(".mask-animation", {
            width: "0",
            height: "0",
        }, {
            width: "250vw",
            height: "350vh",
            scrollTrigger: {
                trigger: "#mask-animation-trigger",
                toggleActions: "play none none reverse",
                start: "top 130%",
                scrub: true,
                //markers: true,
            },
            ease: "power1.inOut",
        });

        gsap.fromTo(".mask-animation", {
            width: "250vw",
            height: "350vw",
        }, {
            width: "0",
            height: "0",
            scrollTrigger: {
                trigger: "#mask-animation-close-trigger",
                toggleActions: "play none none reverse",
                start: "200px 100%",
                scrub: true,
                //markers: true,
            },
            ease: "power1.inOut",
        });

        gsap.fromTo("#what-students-say", {
            opacity: 1,
        }, {
            opacity: 0,
            scrollTrigger: {
                trigger: "#mask-animation-close-trigger",
                toggleActions: "play none none reverse",
                start: "600px 100%",
                //markers: true,
            },
            ease: "power1.inOut",
        });
    });

    return (
        <div className='mask-animation-container'>
            <div className='animation-wrapper'>
                <div className='animation-center'>
                    <div className="mask-animation"></div>
                </div>
            </div>
        </div>
    )
}

export default MaskAnimation