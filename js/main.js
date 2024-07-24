const navTriggerBtn = document.getElementById('nav_trigger_btn')
const navMenu = document.getElementById('nav_menu')

navTriggerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-is-open')
})
// swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // breakpoint
    slidesPerView: 3,
    spaceBetween: 20,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        960: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
})

// scroll reveal animations
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2000,
    delay: 300,
    // reset: true
}
);
// hero
sr.reveal('.hero__text', { origin: 'top' })
// step

sr.reveal('.step__step', { distance: '100px', interval: 100 })
// about

sr.reveal('.about__text', { origin: 'left' })
sr.reveal('.about__img', { origin: 'right', delay: 800 })
// testimonial

sr.reveal('.testimonial__bg', { delay: 800 })
sr.reveal('testimonial__title')
sr.reveal('.testimonial__slider', { delay: 1000 })
// brand

sr.reveal('.brand__img', { delay: 600, distance: '100px', interval: 100 })
// work

sr.reveal('.work__title', { origin: 'top' })
sr.reveal('.work__subtitle', { origin: 'bottom', delay: 600 })
sr.reveal('.work__grid', { delay: 1000 })
// start

sr.reveal('.start')
sr.reveal('.start__item', { distance: '100px', interval: 100 })
// news

sr.reveal('.news__title')
sr.reveal('.news__subtitle', { delay: 800 })
sr.reveal('.news__item', { distance: '100px', interval: 100, delay: 1000 })
// contact

sr.reveal('.contact__container')
sr.reveal('.contact__text', { delay: 800 })
// footer item

sr.reveal('.footer__item', { distance: '100px', interval: 100 })

