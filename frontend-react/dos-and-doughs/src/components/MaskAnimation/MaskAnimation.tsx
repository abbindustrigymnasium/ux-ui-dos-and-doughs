import './MaskAnimation.css'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function MaskAnimation() {
    useGSAP(() => {
        let mm = gsap.matchMedia();

        // Over 1500px
        mm.add("(min-width: 1500px)", () => {
            gsap.fromTo(".mask-animation", {
                width: "0",
                height: "0",
            }, {
                width: "250vw",
                height: "350vh",
                scrollTrigger: {
                    trigger: "#mask-animation-trigger",
                    toggleActions: "play none none reverse",
                    start: "-320px bottom",
                    scrub: true,
                    //markers: true,
                },
                ease: "power1.inOut",
                onComplete: () => {
                    gsap.fromTo(".mask-animation", {
                        width: "250vw",
                        height: "350vw",
                    }, {
                        width: "0",
                        height: "0",
                        scrollTrigger: {
                            trigger: "#mask-animation-close-trigger",
                            toggleActions: "play none none reverse",
                            start: "-320px bottom",
                            end: "top -100%",
                            scrub: true,
                            //markers: true,
                        },
                        ease: "power1.inOut",
                    });
                }
            });
    
            // Fade whole section
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
        })

        // Under 1500px
        mm.add("(max-width: 1500px)", () => {
            gsap.fromTo(".mask-animation", {
                width: "0",
                height: "0",
            }, {
                width: "250vw",
                height: "450vh",
                scrollTrigger: {
                    trigger: "#mask-animation-trigger",
                    toggleActions: "play none none reverse",
                    start: "-320px bottom",
                    scrub: true,
                    //markers: true,
                },
                ease: "power1.inOut",
                onComplete: () => {
                    gsap.fromTo(".mask-animation", {
                        width: "250vw",
                        height: "450vw",
                    }, {
                        width: "0",
                        height: "0",
                        scrollTrigger: {
                            trigger: "#mask-animation-close-trigger",
                            toggleActions: "play none none reverse",
                            start: "0px bottom",
                            end: "200px -100%",
                            scrub: true,
                            //markers: true,
                        },
                        ease: "power1.inOut",
                    });
                }
            });
    
            // Fade whole section
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
        })

        return () => mm.revert();
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