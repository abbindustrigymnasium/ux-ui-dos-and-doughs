import Navbar from './components/Navbar/Navbar.tsx'
import FixedNavbar from './components/Navbar/FixedNavbar.tsx'
import BackToTop from './components/BackToTop/BackToTop.tsx'
import Footer from './components/Footer/Footer.tsx'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)

import { Outlet, useLocation } from 'react-router-dom'

import Lenis from './components/Lenis.tsx'

function Layout() {
    const location = useLocation();

    let specialOffers : any;

    if (document.getElementById('special-offers')) {
        specialOffers = document.getElementById('special-offers')
    }

    useGSAP(() => {
        gsap.fromTo(".fixed-navbar", {
            opacity: 0,
            y: -20,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: specialOffers,
                toggleActions: "play none none reverse",
            },
            ease: "power1.inOut",
        });

        gsap.fromTo(".back-to-top", {
            opacity: 0,
            x: 20,
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
                trigger: specialOffers,
                toggleActions: "play none none reverse",
            },
            ease: "power1.inOut",
        });

        let titles = gsap.utils.toArray("h1") as HTMLElement[];

        titles.forEach((title : HTMLElement) => {
            gsap.fromTo(title, {
                opacity: 0,
                y: -10,
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: title,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
                ease: "power1.inOut",
            });
        });

        let paragraphs = gsap.utils.toArray("p") as HTMLElement[];

        paragraphs.forEach((paragraph : HTMLElement) => {
            gsap.fromTo(paragraph, {
                opacity: 0,
                x: -5,
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: paragraph,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
                ease: "power1.inOut",
            });
        });

        let titles2 = gsap.utils.toArray("h2") as HTMLElement[];

        titles2.forEach((title2 : HTMLElement) => {
            gsap.fromTo(title2, {
                opacity: 0,
                x: -5,
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: title2,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
                ease: "power1.inOut",
            });
        });

        let buttons = gsap.utils.toArray("button") as HTMLElement[];

        buttons.forEach((button : HTMLElement) => {
            gsap.fromTo(button, {
                opacity: 0,
                x: -5,
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: button,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
                ease: "power1.inOut",
            });
        });

        // Reveal image animation
        let imgContainers = gsap.utils.toArray(".img-container") as HTMLElement[];

        imgContainers.forEach((container : HTMLElement) => {
            let img = container.querySelector("img") as HTMLImageElement;

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    toggleActions: "restart none none reset",
                },
            })

            tl.set(container, {autoAlpha: 1});

            tl.from(container, 1.5, {
                xPercent: -100,
                //opacity: 0,
                ease: "Power2.out"
              });

            tl.from(img, 1.5, {
                xPercent: 100,
                scale: 1.2,
                //opacity: 1,
                delay: -1.5,
                ease: "Power2.out"
            });
        });

        // Video player animation
        let videoPlayers = gsap.utils.toArray(".video-container") as HTMLElement[];

        videoPlayers.forEach((video : HTMLElement) => {
            gsap.fromTo(video, {
                opacity: 0,
                x: 20,
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: video,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
                ease: "power1.inOut",
            });
        });

        // Footer animation
        gsap.fromTo("#footer", {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: "#footer",
                toggleActions: "play none none reverse",
            },
            ease: "power1.inOut",
        });
    });

    return (
        <>
            <Lenis>
                <Navbar currentPage={location.pathname} />
                <FixedNavbar />
                <BackToTop />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </Lenis>
        </>
    )
}

export default Layout
