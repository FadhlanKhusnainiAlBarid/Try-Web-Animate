import gsap from "gsap"
import SplitType from "split-type"

export const text_animate = (container) => {
    const originalText = container.querySelector("h1").innerHTML;
    const Text = new SplitType(container.querySelector("h1"), { types: "chars" })

    gsap.set(Text.chars, {
        y: 1000,
    });

    gsap.to(Text.chars, {
        y: 0,
        duration: 1.6,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.3,
        onComplete: () => {
            container.querySelector("h1").innerHTML = originalText;
        }
    });
}