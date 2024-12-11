// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation
    document.querySelectorAll('nav a, .contact-btn').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const section = document.querySelector(link.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Show education section when clicking "Education" link
    document.querySelector('.show-education').addEventListener('click', () => {
        const educationSection = document.getElementById('education');
        educationSection.classList.remove('hidden');
        educationSection.scrollIntoView({ behavior: 'smooth' });
    });
});
