// Portfolio Website JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Mobile Navigation
    initNavbar();
    
    // Initialize GSAP Animations
    initGSAP();
    
    // Initialize Contact Form
    initContactForm();
    
    // Set Current Year in Footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

// Mobile Navigation Toggle
function initNavbar() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        });
    });
}

// GSAP Animations
function initGSAP() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    
    // Hero Section Animations
    gsap.to('.gsap-fade-in', {
        opacity: 1,
        duration: 1,
        delay: 0.2
    });
    
    gsap.to('.gsap-fade-in-delay-1', {
        opacity: 1,
        duration: 1,
        delay: 0.5
    });
    
    gsap.to('.gsap-fade-in-delay-2', {
        opacity: 1,
        duration: 1,
        delay: 0.8
    });
    
    gsap.to('.gsap-fade-in-delay-3', {
        opacity: 1,
        duration: 1,
        delay: 1.1
    });
    
    // Name text animation
    gsap.from('.gsap-text-animation', {
        duration: 1.5,
        delay: 0.3,
        opacity: 0,
        color: '#fff',
        textShadow: '0 0 20px rgba(255, 123, 84, 0.8)',
        ease: 'power3.out'
    });
    
    // Typewriter effect
    const typewriterText = document.querySelector('.gsap-typewriter');
    if (typewriterText) {
        const text = typewriterText.textContent;
        typewriterText.textContent = '';
        
        gsap.to('.gsap-typewriter', {
            duration: 2,
            delay: 0.7,
            text: {
                value: text,
                delimiter: ''
            },
            ease: 'none'
        });
    }
    
    // About Section Animations
    gsap.to('.gsap-slide-right', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%'
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out'
    });
    
    gsap.to('.gsap-slide-left', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%'
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out'
    });
    
    // Reveal animations for about section
    gsap.to('.gsap-reveal', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    gsap.to('.gsap-reveal-delay-1', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power2.out'
    });
    
    gsap.to('.gsap-reveal-delay-2', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power2.out'
    });
    
    // Skills Section Animations
    gsap.to('.gsap-skill-item', {
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 80%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'back.out(1.5)',
        stagger: 0.2
    });
    
    // Projects Section Animations
    gsap.to('.gsap-project-item', {
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 80%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'back.out(1.5)',
        stagger: 0.2
    });
    
    // Contact Form Animation
    gsap.to('.gsap-slide-up', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
    
    // Create scroll-based animations for section titles
    const titles = document.querySelectorAll('h2.title.gsap-fade-in');
    titles.forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    });
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Normally here you would collect form data and send to backend
            // For demo purposes, let's just show a success message
            const formFields = contactForm.querySelectorAll('input, textarea');
            let isValid = true;
            
            // Basic validation
            formFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-danger');
                } else {
                    field.classList.remove('is-danger');
                }
            });
            
            if (isValid) {
                // Success message (in real application, you would send data to server)
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields before submitting.');
            }
        });
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Adjusted for fixed navbar
                behavior: 'smooth'
            });
        }
    });
}); 