// ==========================================
// Enhanced Animations & Wire Harness Effects
// ==========================================

// Animated Wire Lines Background
function createWireBackground() {
    const wireCanvas = document.createElement('canvas');
    wireCanvas.id = 'wire-bg-canvas';
    wireCanvas.style.position = 'fixed';
    wireCanvas.style.top = '0';
    wireCanvas.style.left = '0';
    wireCanvas.style.width = '100%';
    wireCanvas.style.height = '100%';
    wireCanvas.style.zIndex = '0';
    wireCanvas.style.pointerEvents = 'none';
    wireCanvas.style.opacity = '0.15';
    document.body.insertBefore(wireCanvas, document.body.firstChild);

    const ctx = wireCanvas.getContext('2d');
    let width = wireCanvas.width = window.innerWidth;
    let height = wireCanvas.height = window.innerHeight;

    // Wire nodes
    const nodes = [];
    const nodeCount = 50;

    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 1
        });
    }

    function animateWires() {
        ctx.clearRect(0, 0, width, height);

        // Update and draw nodes
        nodes.forEach((node, i) => {
            node.x += node.vx;
            node.y += node.vy;

            // Bounce off edges
            if (node.x < 0 || node.x > width) node.vx *= -1;
            if (node.y < 0 || node.y > height) node.vy *= -1;

            // Draw node
            ctx.fillStyle = '#00d4ff';
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fill();

            // Connect to nearby nodes
            nodes.slice(i + 1).forEach(otherNode => {
                const dx = otherNode.x - node.x;
                const dy = otherNode.y - node.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 150) {
                    const opacity = (1 - distance / 150) * 0.5;
                    const gradient = ctx.createLinearGradient(node.x, node.y, otherNode.x, otherNode.y);
                    gradient.addColorStop(0, `rgba(0, 212, 255, ${opacity})`);
                    gradient.addColorStop(0.5, `rgba(255, 0, 255, ${opacity})`);
                    gradient.addColorStop(1, `rgba(0, 212, 255, ${opacity})`);

                    ctx.strokeStyle = gradient;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(otherNode.x, otherNode.y);
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animateWires);
    }

    // Handle resize
    window.addEventListener('resize', () => {
        width = wireCanvas.width = window.innerWidth;
        height = wireCanvas.height = window.innerHeight;
    });

    animateWires();
}

// Floating Wire Elements
function createFloatingWires() {
    const container = document.createElement('div');
    container.className = 'floating-wires-container';
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    document.body.appendChild(container);

    for (let i = 0; i < 8; i++) {
        const wire = document.createElement('div');
        wire.className = 'floating-wire';
        wire.style.cssText = `
            position: absolute;
            width: ${Math.random() * 200 + 100}px;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00d4ff, transparent);
            opacity: 0.3;
            animation: float-wire ${Math.random() * 20 + 15}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            transform: rotate(${Math.random() * 360}deg);
        `;
        container.appendChild(wire);
    }
}

// Sticky Wire Connection Indicator
function createStickyWireIndicator() {
    const indicator = document.createElement('div');
    indicator.id = 'wire-indicator';
    indicator.innerHTML = `
        <div class="wire-connector">
            <div class="connector-dot"></div>
            <div class="wire-line"></div>
        </div>
    `;
    document.body.appendChild(indicator);

    let isSticky = false;
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                if (!isSticky) {
                    indicator.classList.add('active');
                    isSticky = true;
                }
            }
        });
    });
}

// Parallax Wire Effect
function initParallaxWires() {
    const parallaxElements = document.querySelectorAll('.parallax-wire');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach((el, index) => {
            const speed = (index + 1) * 0.1;
            el.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.05}deg)`;
        });
    });
}

// Interactive Wire Trail (follows mouse)
function createMouseWireTrail() {
    const trail = [];
    const maxTrailLength = 15;

    document.addEventListener('mousemove', (e) => {
        trail.push({ x: e.clientX, y: e.clientY, time: Date.now() });

        if (trail.length > maxTrailLength) {
            trail.shift();
        }

        drawWireTrail(trail);
    });

    function drawWireTrail(points) {
        // Remove old trail
        document.querySelectorAll('.mouse-wire-trail').forEach(el => el.remove());

        if (points.length < 2) return;

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add('mouse-wire-trail');
        svg.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
        `;

        for (let i = 0; i < points.length - 1; i++) {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            const opacity = (i / points.length) * 0.5;

            line.setAttribute('x1', points[i].x);
            line.setAttribute('y1', points[i].y);
            line.setAttribute('x2', points[i + 1].x);
            line.setAttribute('y2', points[i + 1].y);
            line.setAttribute('stroke', '#00d4ff');
            line.setAttribute('stroke-width', '2');
            line.setAttribute('opacity', opacity);
            svg.appendChild(line);
        }

        document.body.appendChild(svg);

        // Fade out and remove
        setTimeout(() => svg.remove(), 100);
    }
}

// Draggable Wire Elements
function initDraggableWires() {
    const draggables = document.querySelectorAll('.draggable-wire');

    draggables.forEach(element => {
        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;
        let xOffset = 0;
        let yOffset = 0;

        element.addEventListener('mousedown', dragStart);
        element.addEventListener('touchstart', dragStart);

        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag);

        document.addEventListener('mouseup', dragEnd);
        document.addEventListener('touchend', dragEnd);

        function dragStart(e) {
            if (e.type === 'touchstart') {
                initialX = e.touches[0].clientX - xOffset;
                initialY = e.touches[0].clientY - yOffset;
            } else {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
            }

            if (e.target === element) {
                isDragging = true;
                element.style.cursor = 'grabbing';
            }
        }

        function drag(e) {
            if (isDragging) {
                e.preventDefault();

                if (e.type === 'touchmove') {
                    currentX = e.touches[0].clientX - initialX;
                    currentY = e.touches[0].clientY - initialY;
                } else {
                    currentX = e.clientX - initialX;
                    currentY = e.clientY - initialY;
                }

                xOffset = currentX;
                yOffset = currentY;

                setTranslate(currentX, currentY, element);
            }
        }

        function dragEnd(e) {
            initialX = currentX;
            initialY = currentY;
            isDragging = false;
            element.style.cursor = 'grab';
        }

        function setTranslate(xPos, yPos, el) {
            el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
        }
    });
}

// Scroll-Triggered Wire Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
}

// Pulsing Wire Connections
function createPulsingConnections() {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section, index) => {
        const pulse = document.createElement('div');
        pulse.className = 'wire-pulse';
        pulse.style.cssText = `
            position: absolute;
            top: 50%;
            left: -20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(0, 212, 255, 0.5) 0%, transparent 70%);
            animation: pulse-glow ${2 + index * 0.3}s ease-in-out infinite;
            z-index: 10;
        `;
        section.style.position = 'relative';
        section.appendChild(pulse);
    });
}

// Initialize all animations
function initAllAnimations() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            startAnimations();
        });
    } else {
        startAnimations();
    }
}

function startAnimations() {
    createWireBackground();
    createFloatingWires();
    initParallaxWires();
    createMouseWireTrail();
    initDraggableWires();
    initScrollAnimations();
    createPulsingConnections();

    console.log('✨ Wire harness animations initialized!');
}

// Start animations
initAllAnimations();
