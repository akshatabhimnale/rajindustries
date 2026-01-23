// ==========================================
// Swiper Slider Initialization (Reference-based)
// ==========================================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {

    // Initialize hero slider with reference configuration
    const heroSwiper = new Swiper('.js-slider', {
        loop: true,
        autoHeight: false, // Disable auto-height to ensure consistent height
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
        // Pause on hover and handle video playback
        on: {
            init: function() {
                const swiper = this;
                swiper.el.addEventListener('mouseenter', function() {
                    swiper.autoplay.stop();
                });
                swiper.el.addEventListener('mouseleave', function() {
                    swiper.autoplay.start();
                });

                // Play video on first slide if exists
                const firstSlide = swiper.slides[swiper.activeIndex];
                const video = firstSlide?.querySelector('video');
                if (video) {
                    video.play().catch(err => console.log('Video autoplay prevented:', err));
                }
            },
            slideChange: function() {
                const swiper = this;

                // Pause all videos
                swiper.slides.forEach(slide => {
                    const video = slide.querySelector('video');
                    if (video) {
                        video.pause();
                    }
                });

                // Play video on active slide
                const activeSlide = swiper.slides[swiper.activeIndex];
                const activeVideo = activeSlide?.querySelector('video');
                if (activeVideo) {
                    activeVideo.currentTime = 0;
                    activeVideo.play().catch(err => console.log('Video autoplay prevented:', err));
                }
            }
        }
    });

    // ==========================================
    // Navigation
    // ==========================================

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.js-mobile-nav-toggle');
    const mobileNav = document.querySelector('.js-mobile-nav');

    if (mobileToggle && mobileNav) {
        mobileToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('is-open');
            mobileToggle.classList.toggle('is-active');
            document.body.classList.toggle('nav-is-open');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileNav.contains(event.target) && !mobileToggle.contains(event.target)) {
                mobileNav.classList.remove('is-open');
                mobileToggle.classList.remove('is-active');
                document.body.classList.remove('nav-is-open');
            }
        });

        // Close mobile menu when clicking a link
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('is-open');
                mobileToggle.classList.remove('is-active');
                document.body.classList.remove('nav-is-open');
            });
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
                    const headerHeight = document.querySelector('.c-page-head')?.offsetHeight || 80;
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

    const header = document.querySelector('.c-page-head');
    const stickyHeader = document.querySelector('.js-sticky-header');

    if (header && stickyHeader) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            // Add sticky and shrunk states on scroll
            if (currentScroll > 100) {
                header.classList.add('header-is-sticky', 'header-is-shrunk');
                stickyHeader.classList.add('is-sticky', 'is-shrunk');
            } else {
                header.classList.remove('header-is-sticky', 'header-is-shrunk');
                stickyHeader.classList.remove('is-sticky', 'is-shrunk');
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
    // Image Lazy Loading Enhancement & Fix
    // ==========================================

    // Immediately load all slider images to prevent visibility issues
    const lazyImages = document.querySelectorAll('img[data-lazy], img[data-srcset]');
    lazyImages.forEach(img => {
        // Set the actual src from data-lazy or data-srcset
        if (img.dataset.lazy) {
            img.src = img.dataset.lazy;
            img.srcset = img.dataset.srcset || img.dataset.lazy;
        }
        // Remove lazy loading class to show image immediately
        img.classList.remove('u-lazyload', 'js-lazyload');
        img.classList.add('lazyloaded');
        // Ensure image is visible
        img.style.opacity = '1';
    });

    // Standard lazy loading for other images
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
    // Dark Mode Toggle
    // ==========================================

    const themeToggle = document.getElementById('themeToggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');

            // Save theme preference
            const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);

            // Optional: Add animation effect
            themeToggle.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                themeToggle.style.transform = '';
            }, 300);
        });
    }

    // Listen for system theme changes
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            if (e.matches) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
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
