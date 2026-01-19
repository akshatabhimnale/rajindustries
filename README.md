# Raj Industries - Wire Harness Manufacturing Website

A modern, high-performance website for Raj Industries, featuring stunning Three.js 3D animations and comprehensive information about wire harness manufacturing services.

## Features

### 1. 5 Complete Pages
- **Home (index.html)** - Landing page with 3D wire harness animation
- **About (about.html)** - Company history, mission, vision, and facilities
- **Products (products.html)** - Detailed product catalog with images
- **Services (services.html)** - Manufacturing services and capabilities
- **Contact (contact.html)** - Contact information and inquiry form

### 2. Three.js 3D Animation
- Interactive wire harness visualization on homepage
- 6 animated wire strands with glowing effects
- Responsive and optimized for performance
- Automatic pause when tab is inactive

### 3. Modern Design
- Dark theme with cyan/magenta gradient accents
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- Professional business aesthetic

### 4. Performance Optimized
- Lazy loading for images
- CDN-hosted libraries
- Optimized Three.js settings
- GPU-accelerated animations
- Debounced event handlers

### 5. Image Integration
- Product showcase with wire harness images
- Facility galleries
- Placeholder images with fallbacks
- Supports custom images

## Getting Started

### Quick Start
1. Open `index.html` in a web browser
2. Navigate between pages using the menu
3. All pages work offline (Three.js loaded from CDN)

### Adding Your Own Images

Images are organized in the `/images` folder:

```
images/
├── products/         # Product-specific wire harness images
│   ├── automotive-harness-1.jpg
│   ├── automotive-harness-2.jpg
│   ├── industrial-harness-1.jpg
│   └── ...
├── gallery/          # General factory/process images
│   ├── factory-1.jpg
│   ├── manufacturing-1.jpg
│   └── ...
└── about/            # Company facility images
    ├── facility-exterior.jpg
    ├── manufacturing-floor.jpg
    └── ...
```

**Image Recommendations:**
- Format: JPG or WebP
- Product images: 800x600px minimum
- Gallery images: 1200x800px minimum
- Compress images for faster loading

**Free Image Sources:**
- Unsplash.com
- Pexels.com
- Pixabay.com
- Search terms: "wire harness", "cable assembly", "automotive wiring", "manufacturing"

### Customization

#### Update Company Information
Edit the HTML files to update:
- Company name and tagline
- Contact details (phone, email, address)
- Product descriptions
- Service offerings

#### Change Colors
Edit `styles.css` variables:
```css
:root {
    --primary-color: #00d4ff;    /* Change main accent color */
    --secondary-color: #ff00ff;  /* Change secondary color */
    --dark-bg: #0a0a0a;          /* Change background */
}
```

#### Modify Three.js Animation
Edit `main.js` - Look for the `createWireHarness()` function to:
- Change number of wires
- Modify colors
- Adjust animation speed
- Update wire paths

## File Structure

```
rajindustries/
├── index.html           # Homepage with 3D animation
├── about.html           # About page
├── products.html        # Products page
├── services.html        # Services page
├── contact.html         # Contact page
├── styles.css           # Main stylesheet
├── main.js              # JavaScript & Three.js code
├── images/              # Image assets
│   ├── products/
│   ├── gallery/
│   ├── about/
│   └── README.md
└── README.md            # This file
```

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** Three.js requires WebGL support. Most modern browsers support this.

## Performance Tips

1. **Optimize Images:** Compress images before uploading
2. **Image Formats:** Use WebP for better compression
3. **Lazy Loading:** Already implemented for all images
4. **CDN:** Three.js is loaded from CDN for faster loading

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript ES6+** - Modern JavaScript features
- **Three.js** - 3D graphics and animations
- **Intersection Observer API** - Scroll animations

## Features Breakdown

### Homepage
- Full-screen 3D wire harness animation
- Hero section with CTAs
- Quick overview sections
- Responsive navigation

### About Page
- Company story and values
- Mission & Vision cards
- Animated statistics counters
- Facility gallery with hover effects
- Certifications showcase

### Products Page
- 4 Product categories (Automotive, Industrial, Aerospace, Custom)
- Detailed product cards with images
- Specifications lists
- Product gallery
- Request quote CTAs

### Services Page
- Service cards with images
- Manufacturing capabilities
- Process timeline
- Additional services grid

### Contact Page
- Comprehensive contact information
- Multi-field contact form
- Social media links
- Map placeholder
- Quick contact options

## Customization Guide

### Adding a New Product

1. Add product image to `/images/products/`
2. Open `products.html`
3. Copy existing `.product-item` div
4. Update:
   - Image source
   - Product name
   - Description
   - Specifications

### Changing Navigation

Edit the navigation menu in each HTML file:
```html
<ul class="nav-menu" id="navMenu">
    <li><a href="index.html" class="nav-link">Home</a></li>
    <!-- Add more menu items here -->
</ul>
```

### Form Submission

Currently, the contact form shows an alert. To integrate with a backend:

1. Open `main.js`
2. Find the `contactForm.addEventListener('submit', ...)` function
3. Replace with your form handling code (AJAX, fetch API, etc.)

Example:
```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Send to your backend
    await fetch('/api/contact', {
        method: 'POST',
        body: formData
    });
});
```

## Support

For issues or questions about customization, refer to:
- Three.js Documentation: https://threejs.org/docs/
- MDN Web Docs: https://developer.mozilla.org/

## License

This website template is created for Raj Industries. Customize as needed for your business.

## Credits

- **Three.js** - 3D graphics library
- **Design** - Custom modern business design
- **Icons** - Emoji icons (universal support)

---

**Version:** 1.0
**Created:** 2026
**Last Updated:** January 2026
