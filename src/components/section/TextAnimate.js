'use client'

import { useRef } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { text_animate } from "../../animate/text_animate"

gsap.registerPlugin(useGSAP);

const TextAnimate = () => {
    const container = useRef()

    useGSAP(() => {
        text_animate(container.current)
    }, { scope: container })

    return (
        <div className="h-screen flex justify-center items-center" ref={container}>
            <h1 className="font-[family-name:var(--font-lilita-one)] text-[500px] text-white leading-none overflow-hidden">
                aXLan
            </h1>
        </div>
    )
}

export default TextAnimate