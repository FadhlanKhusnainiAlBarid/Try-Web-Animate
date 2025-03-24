import gsap from "gsap";

export const navbar_animate = (container) => {
    const links = container.querySelectorAll("ul a");

    links.forEach((link, index) => {
        gsap.set(link, {
            y: -100,
            delay: index * 0.1
        });
        gsap.to(link, {
            y: 0,
            duration: 2,
            ease: "power4.out",
            delay: index * 0.1
        });
    });

    gsap.set(container.querySelector("#logo"), {
        y: -50
    });

    gsap.to(container.querySelector("#logo"), {
        y: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.5,
    });
}