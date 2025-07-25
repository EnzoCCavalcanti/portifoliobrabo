
gsap.registerPlugin(ScrollTrigger) 
gsap.registerPlugin(CustomEase);


























const quadrados = gsap.utils.toArray(".quadrado");

CustomEase.create("turbo", "0.95, 0, 0.3, 1");
CustomEase.create("jao", "0.9, 0.45, 0.2, 1");

const tl = gsap.timeline();

tl.fromTo(quadrados[0], {
    scale: 0.5,
    y: 0,
    opacity: 0,
}, {
    scale: 1,
    opacity: 1,
    y: 400,
    duration: 2,
    ease: "turbo"
})

gsap.fromTo(quadrados[1], {
    x: -600,
},{
     x:0,
    scrollTrigger:{
        trigger: ".container2",
        start: "20% 50%",
        markers: false,
        toggleActions: "restart reverse restart reverse"
    },
     ease: "jao",
     duration: 1,   
})