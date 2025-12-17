/**
 * Indalturf - Premium JavaScript
 * Advanced animations, scroll effects, and microinteractions
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Add js-loaded class to enable animations
    document.body.classList.add('js-loaded');
    
    // ============================================
    // Scroll Progress Indicator
    // ============================================
    const scrollProgress = document.getElementById('scrollProgress');
    
    function updateScrollProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        if (scrollProgress) {
            scrollProgress.style.width = scrollPercent + '%';
        }
    }
    
    window.addEventListener('scroll', updateScrollProgress);
    
    // ============================================
    // Navbar Scroll Effect
    // ============================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    // Active section tracking
    const navLinks = document.querySelectorAll('.navbar-link');
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            
            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
    
    // ============================================
    // Mobile Menu
    // ============================================
    const navbarToggle = document.getElementById('navbarToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    
    function openMobileMenu() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (navbarToggle) {
        navbarToggle.addEventListener('click', openMobileMenu);
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // ============================================
    // Smooth Scroll for Anchor Links
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                closeMobileMenu();
                
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // Scroll Reveal Animation
    // ============================================
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
    
    // ============================================
    // FAQ Accordions
    // ============================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
    
    // ============================================
    // Image Lazy Loading with Fade
    // ============================================
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });
    
    
    // ============================================
    // Stagger Animation for Grid Items
    // ============================================
    const gridContainers = document.querySelectorAll('.values-grid, .surfaces-grid, .grass-grid, .why-grid');
    
    gridContainers.forEach(grid => {
        const items = grid.children;
        Array.from(items).forEach((item, index) => {
            item.classList.add('reveal');
            item.classList.add(`stagger-${Math.min(index + 1, 6)}`);
            revealObserver.observe(item);
        });
    });
    
    // ============================================
    // Magnetic Button Effect
    // ============================================
    // Counter Animation for Stats
    // ============================================
    const statValues = document.querySelectorAll('.stat-value[data-count]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                const suffix = target.textContent.includes('+') ? '+' : '';
                const duration = 2000;
                const steps = 60;
                const stepValue = countTo / steps;
                let current = 0;
                let step = 0;
                
                const timer = setInterval(() => {
                    step++;
                    current = Math.round(stepValue * step);
                    
                    if (step >= steps) {
                        current = countTo;
                        clearInterval(timer);
                    }
                    
                    target.textContent = current.toLocaleString() + suffix;
                }, duration / steps);
                
                counterObserver.unobserve(target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    statValues.forEach(stat => {
        counterObserver.observe(stat);
    });
    
    // Parallax removed per request
    
    // ============================================
    // Cursor Trail Effect (Desktop only)
    // ============================================
    if (window.innerWidth > 1024) {
        const cursor = document.createElement('div');
        cursor.className = 'cursor-trail';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid var(--color-primary);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.15s ease, opacity 0.3s ease;
            opacity: 0;
        `;
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
            cursor.style.opacity = '1';
        });
        
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });
        
        // Scale on hovering links/buttons
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.borderColor = 'var(--color-accent)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.borderColor = 'var(--color-primary)';
            });
        });
    }
    
    
    // ============================================
    // Animate Guarantee Cards on Scroll
    // ============================================
    const guaranteeCards = document.querySelectorAll('.guarantee-card');
    
    guaranteeCards.forEach((card, index) => {
        card.classList.add('reveal-left');
        card.style.transitionDelay = `${index * 0.1}s`;
        revealObserver.observe(card);
    });
    
    // ============================================
    // Why Items Animation
    // ============================================
    const whyItems = document.querySelectorAll('.why-item');
    
    whyItems.forEach((item, index) => {
        item.classList.add(index % 2 === 0 ? 'reveal-left' : 'reveal-right');
        item.style.transitionDelay = `${index * 0.1}s`;
        revealObserver.observe(item);
    });
    
    // ============================================
    // Section Headers Animation
    // ============================================
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        header.classList.add('reveal');
        revealObserver.observe(header);
    });
    
    // ============================================
    // Surfaces Slider Controls
    // ============================================
    const surfacesSlider = document.getElementById('surfacesSlider');
    const sliderPrev = document.getElementById('sliderPrev');
    const sliderNext = document.getElementById('sliderNext');
    
    if (surfacesSlider && sliderPrev && sliderNext) {
        const scrollAmount = 440;
        
        sliderNext.addEventListener('click', () => {
            const maxScroll = surfacesSlider.scrollWidth - surfacesSlider.clientWidth;
            if (surfacesSlider.scrollLeft >= maxScroll - 10) {
                // Loop back to start
                surfacesSlider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                surfacesSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        });
        
        sliderPrev.addEventListener('click', () => {
            if (surfacesSlider.scrollLeft <= 10) {
                // Loop to end
                const maxScroll = surfacesSlider.scrollWidth - surfacesSlider.clientWidth;
                surfacesSlider.scrollTo({ left: maxScroll, behavior: 'smooth' });
            } else {
                surfacesSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        });
    }
    
    // ============================================
    // Keyboard Navigation for FAQ
    // ============================================
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
            
            if (e.key === 'ArrowDown' && faqItems[index + 1]) {
                faqItems[index + 1].querySelector('.faq-question').focus();
            }
            
            if (e.key === 'ArrowUp' && faqItems[index - 1]) {
                faqItems[index - 1].querySelector('.faq-question').focus();
            }
        });
    });
    
    // ============================================
    // Performance: Throttle scroll events
    // ============================================
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateScrollProgress();
                handleNavbarScroll();
                updateActiveNavLink();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // ============================================
    // Page Load Animation
    // ============================================
    document.body.classList.add('loaded');
    
    // Trigger initial reveals for elements in viewport
    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('active');
            }
        });
    }, 100);
    
});

// ============================================
// Preloader (optional - add HTML if needed)
// ============================================
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('hidden');
        setTimeout(() => preloader.remove(), 500);
    }
});

// ============================================
// Netlify Form Handler
// ============================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const button = contactForm.querySelector('button[type="submit"]');
        const buttonText = button.querySelector('.btn-text');
        const originalText = buttonText.textContent;
        
        // Show loading state
        buttonText.textContent = 'Sending...';
        button.disabled = true;
        
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            // Show success message
            formMessage.style.display = 'block';
            contactForm.reset();
            
            // Reset button
            buttonText.textContent = originalText;
            button.disabled = false;
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        })
        .catch(() => {
            // Show error
            formMessage.innerHTML = '<p style="color: #dc2626; font-weight: 600; margin: 0;">⚠️ Error sending. Please try again.</p>';
            formMessage.style.display = 'block';
            
            // Reset button
            buttonText.textContent = originalText;
            button.disabled = false;
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        });
    });
}
