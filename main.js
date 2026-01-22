// ==========================================
// Swiper Slider Initialization (Reference-based)
// ==========================================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {

    // Initialize hero slider with reference configuration
    const heroSwiper = new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
            delay: 10000, // 10 seconds like reference
            disableOnInteraction: false,
        },
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (_index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Pause on hover
        on: {
            init: function() {
                const swiper = this;
                swiper.el.addEventListener('mouseenter', function() {
                    swiper.autoplay.stop();
                });
                swiper.el.addEventListener('mouseleave', function() {
                    swiper.autoplay.start();
                });
            }
        }
    });

    // ==========================================
    // Navigation
    // ==========================================

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');

    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', function() {
            nav.classList.toggle('nav--active');
            mobileToggle.classList.toggle('is-active');

            // Animate hamburger
            const spans = mobileToggle.querySelectorAll('span');
            if (mobileToggle.classList.contains('is-active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!nav.contains(event.target) && !mobileToggle.contains(event.target)) {
                nav.classList.remove('nav--active');
                mobileToggle.classList.remove('is-active');

                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ==========================================
    // Header Scroll Effects
    // ==========================================

    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            // Add shadow on scroll
            if (currentScroll > 100) {
                header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            }
        }, { passive: true });
    }

    // ==========================================
    // Counter Animation (Reference-inspired)
    // ==========================================

    const animateCounter = (element) => {
        if (element.dataset.counted) return;

        const text = element.textContent;
        const hasPlus = text.includes('+');
        const target = parseInt(text.replace(/\D/g, ''));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target + (hasPlus ? '+' : '');
                clearInterval(timer);
                element.dataset.counted = 'true';
            } else {
                element.textContent = Math.floor(current) + (hasPlus ? '+' : '');
            }
        }, 16);
    };

    // ==========================================
    // Intersection Observer for Scroll Animations
    // ==========================================

    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate counters
                if (entry.target.classList.contains('stat__number')) {
                    animateCounter(entry.target);
                }

                // Fade in animations
                entry.target.classList.add('is-visible');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe animated elements
    const animatedElements = document.querySelectorAll('.service-card, .stat, .cta-box');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Observe counter numbers
    document.querySelectorAll('.stat__number').forEach(el => {
        observer.observe(el);
    });

    // ==========================================
    // Image Lazy Loading Enhancement
    // ==========================================

    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }

    // ==========================================
    // Performance: Pause animations when tab is hidden
    // ==========================================

    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            if (heroSwiper && heroSwiper.autoplay) {
                heroSwiper.autoplay.stop();
            }
        } else if (heroSwiper && heroSwiper.autoplay) {
            heroSwiper.autoplay.start();
        }
    });

    // ==========================================
    // Keyboard Navigation Enhancement
    // ==========================================

    document.addEventListener('keydown', function(e) {
        if (heroSwiper) {
            // Left arrow - previous slide
            if (e.key === 'ArrowLeft') {
                heroSwiper.slidePrev();
            }
            // Right arrow - next slide
            if (e.key === 'ArrowRight') {
                heroSwiper.slideNext();
            }
        }
    });

    // ==========================================
    // Console Log (Development)
    // ==========================================

    console.log('%c🚀 Raj Industries Website Loaded', 'color: #d60f3c; font-size: 16px; font-weight: bold;');
    console.log('%cPowered by Swiper.js & Reference Design', 'color: #1a1a1a; font-size: 12px;');
});

// ==========================================
// Window Load Event
// ==========================================

window.addEventListener('load', function() {
    // Remove any loading states
    document.body.classList.add('loaded');

    // Trigger initial animations
    const heroSlide = document.querySelector('.swiper-slide-active');
    if (heroSlide) {
        heroSlide.classList.add('is-loaded');
    }
});
