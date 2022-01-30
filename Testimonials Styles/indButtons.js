const testimonials = document.querySelector('.testimonials');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Starting with Jashwanth's Profile

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        testimonials.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})