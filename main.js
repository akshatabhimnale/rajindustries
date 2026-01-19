// ==========================================
// Three.js Wire Harness Animation
// ==========================================

let scene, camera, renderer, wireGroup;
let animationId;

function initThreeJS() {
    const container = document.getElementById('canvas-container');

    // Scene setup
    scene = new THREE.Scene();

    // Camera setup
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 30;

    // Renderer setup with optimized settings
    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: window.innerWidth > 768,
        powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    container.appendChild(renderer.domElement);

    // Create wire harness animation
    createWireHarness();

    // Add ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Start animation
    animate();
}

function createWireHarness() {
    wireGroup = new THREE.Group();

    // Create multiple wire strands with different colors
    const colors = [0x00ffff, 0xff00ff, 0xffff00, 0x00ff00, 0xff0000, 0x0066ff];
    const numWires = 6;

    for (let i = 0; i < numWires; i++) {
        const points = [];
        const segments = 50;
        const radius = 8;
        const angle = (i / numWires) * Math.PI * 2;

        // Create curved wire path
        for (let j = 0; j <= segments; j++) {
            const t = j / segments;
            const x = Math.cos(angle + t * Math.PI * 2) * radius * Math.cos(t * Math.PI);
            const y = Math.sin(t * Math.PI * 4) * 3;
            const z = Math.sin(angle + t * Math.PI * 2) * radius * Math.cos(t * Math.PI);

            points.push(new THREE.Vector3(x, y, z));
        }

        // Create wire geometry
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        // Create glowing material
        const material = new THREE.LineBasicMaterial({
            color: colors[i],
            linewidth: 2,
            transparent: true,
            opacity: 0.8
        });

        const wire = new THREE.Line(geometry, material);
        wire.userData = {
            initialRotation: angle,
            speed: 0.001 + Math.random() * 0.002
        };
        wireGroup.add(wire);
    }

    // Add connection nodes
    const nodeGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const nodeMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0x00ffff,
        emissiveIntensity: 0.5,
        metalness: 0.8,
        roughness: 0.2
    });

    for (let i = 0; i < 12; i++) {
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        const angle = (i / 12) * Math.PI * 2;
        node.position.set(
            Math.cos(angle) * 8,
            Math.sin(i * 0.5) * 3,
            Math.sin(angle) * 8
        );
        wireGroup.add(node);
    }

    scene.add(wireGroup);
}

function animate() {
    animationId = requestAnimationFrame(animate);

    // Rotate wire group
    if (wireGroup) {
        wireGroup.rotation.y += 0.003;
        wireGroup.rotation.x = Math.sin(Date.now() * 0.0005) * 0.1;

        // Animate individual wires
        wireGroup.children.forEach((child) => {
            if (child.userData.speed) {
                child.rotation.y += child.userData.speed;
            }
        });
    }

    renderer.render(scene, camera);
}

// Handle window resize
function handleResize() {
    if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

// Debounced resize handler for performance
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 150);
});

// ==========================================
// Navigation & UI Interactions
// ==========================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky navbar
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
}, { passive: true });

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smart navigation - handles both page links and section scrolling
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // If it's a hash link (starts with #), scroll to section
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');

                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        } else {
            // For page links (.html files), just let them navigate normally
            // Close mobile menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// ==========================================
// Intersection Observer for Animations
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Trigger counter animation if it's a stat number
            if (entry.target.classList.contains('stat-number')) {
                animateCounter(entry.target);
            }
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.product-card, .capability-item, .about-content, .about-image, .stat-item'
    );
    animatedElements.forEach(el => observer.observe(el));
});

// ==========================================
// Counter Animation
// ==========================================

function animateCounter(element) {
    if (element.classList.contains('counted')) return;

    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
            element.classList.add('counted');
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ==========================================
// Form Handling
// ==========================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    console.log('Form submitted:', formData);

    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// ==========================================
// Loading Screen
// ==========================================

window.addEventListener('load', () => {
    const loader = document.getElementById('loader');

    // Initialize Three.js
    initThreeJS();

    // Hide loader after a short delay
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);
});

// ==========================================
// Performance Optimization
// ==========================================

// Pause Three.js animation when tab is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    } else {
        if (renderer) {
            animate();
        }
    }
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (renderer) {
        renderer.dispose();
    }
    if (scene) {
        scene.traverse((object) => {
            if (object.geometry) {
                object.geometry.dispose();
            }
            if (object.material) {
                if (Array.isArray(object.material)) {
                    object.material.forEach(material => material.dispose());
                } else {
                    object.material.dispose();
                }
            }
        });
    }
});
