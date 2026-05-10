// Dynamic greeting on the homepage
const greetingElement = document.getElementById('greeting');
if (greetingElement) {
    const text = "> Root access granted. Welcome to my portfolio.";
    let i = 0;
    greetingElement.innerHTML = '';

    function typeWriter() {
        if (i < text.length) {
            greetingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
}

// Form submission handler on the contact page
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the page from reloading
        const name = document.getElementById('name').value;
        alert(`Payload received, ${name}. I will establish contact shortly.`);
        contactForm.reset();
    });
}