'use client'

import { Navbar } from "flowbite-react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navbar_animate } from "../animate/navbar_animated";

gsap.registerPlugin(useGSAP);

const CompNavbar = () => {
    const container = useRef();

    useGSAP(() => {
        navbar_animate(container.current)
    }, { scope: container })


    return (
        <div className="relative flex justify-center">
            <Navbar ref={container}
                rounded
                className="absolute max-w-screen-2xl w-full mx-2 mt-2 backdrop-blur-3xl bg-white/5 overflow-hidden"
            >
                <Navbar.Brand href="https://flowbite.com/" id="logo">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                        Flowbite
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <a href="/" className="text-orange-400 uppercase font-bold">
                        Home
                    </a>
                    <a href="/about" className="text-white hover:text-orange-400">About</a>
                    <a href="/services" className="text-white hover:text-orange-400">Services</a>
                    <a href="/pricing" className="text-white hover:text-orange-400">Pricing</a>
                    <a href="/contact" className="text-white hover:text-orange-400">Contact</a>
                </Navbar.Collapse>
            </Navbar >
        </div>
    );
}

export default CompNavbar;