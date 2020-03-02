
// index page animations
const navbar = document.querySelector('#navAni') // got this id through all pages
const header = document.querySelector('#conAni')
const box1 = document.querySelector('.page-one-box')
const box2 = document.querySelector('.page-one-box2')
const box3 = document.querySelector('.page-one-box3')
const text = document.querySelector('#text-box')

gsap.fromTo(navbar, 1.2, { opacity: 0, duration: 1, x: -100 }, { x: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(header, 1.2, { x: -200, duration: 1, opacity: 0 }, { x: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(box1, 1.2, { y: -200, duration: 1, opacity: 0 }, { y: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(box2, 1.2, { x: -1000, duration: 1, opacity: 0 }, { x: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(box3, 1.2, { y: +100, duration: 1, opacity: 0 }, { y: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(text, 1.2, { x: +200, duration: 1, opacity: 0 }, { x: "0%", opacity: 1, ease: Power2.easeInOut })



// About page animations

const aboutHeader = document.querySelector('#about-header')
const aboutBox1 = document.querySelector('.page-two-box')
const aboutBox2 = document.querySelector('.page-two-box2')
const aboutBox3 = document.querySelector('.page-two-box3')
const aboutBox4 = document.querySelector('.page-two-box4')
const aboutBox5 = document.querySelector('.page-two-box5')
const aboutBox6 = document.querySelector('.page-two-box6')
const aboutText = document.querySelector('#aboutText')

gsap.fromTo(aboutHeader, 1.2, { opacity: 0, duration: 1, y: -100 }, { y: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(aboutBox1, 1.2, { opacity: 0, duration: 1, x: -100 }, { x: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(aboutBox2, 1.2, { y: -200, duration: 1, opacity: 0 }, { y: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(aboutBox3, 1.2, { y: +200, duration: 1, opacity: 0 }, { y: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(aboutBox4, 1.2, { x: +800, duration: 1, opacity: 0 }, { x: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(aboutBox5, 1.2, { y: -800, duration: 1, opacity: 0 }, { y: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(aboutBox6, 1.2, { y: -200, duration: 1, opacity: 0 }, { y: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(aboutText, 1.2, { x: -200, duration: 1, opacity: 0 }, { x: "0%", opacity: 1, ease: Power2.easeInOut })



// Contact page animations
const contactHeader = document.querySelector('#contact-header')
const contactBox1 = document.querySelector('.page-three-box')
const contactBox2 = document.querySelector('.page-three-box2')
const contactBox3 = document.querySelector('.page-three-box3')
const contactBox4 = document.querySelector('.page-three-box4')
const contactBox5 = document.querySelector('.page-three-box5')
const contactText = document.querySelector('#contactText')

gsap.fromTo(contactHeader, 1.2, { opacity: 0, duration: 1, x: -100 }, { x: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(contactBox1, 1.2, { opacity: 0, duration: 1, y: -100 }, { y: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(contactBox2, 1.2, { opacity: 0, duration: 1, x: -900 }, { x: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(contactBox3, 1.2, { opacity: 0, duration: 1, y: +500 }, { y: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(contactBox4, 1.2, { opacity: 0, duration: 1, x: +800 }, { x: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(contactBox5, 1.2, { opacity: 0, duration: 1, y: +100 }, { y: "0%", opacity: 1, ease: Power2.easeInOut })
gsap.fromTo(contactText, 1.2, { opacity: 0, duration: 1, x: +300 }, { x: "0%", opacity: 1, ease: Power2.easeInOut })


