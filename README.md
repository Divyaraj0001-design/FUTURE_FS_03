# 🍽️ Savoria - Fine Dining Restaurant Website

A stunning, modern restaurant website built with HTML, CSS, and JavaScript featuring premium UI/UX design, smooth animations, and responsive layouts.

## ✨ Features

### Design Excellence
- **Premium Color Palette**: Sophisticated burgundy, warm gold, and elegant neutrals
- **Modern Typography**: Playfair Display for headings, Inter for body text
- **Glassmorphism Effects**: Contemporary frosted glass UI elements
- **Smooth Animations**: Scroll-triggered animations using Intersection Observer API
- **Parallax Scrolling**: Dynamic hero background effect

### Sections
1. **Hero Section**: Full-viewport splash with compelling CTA
2. **About**: Restaurant story with statistics and imagery
3. **Menu**: Filterable menu with categories (Starters, Mains, Desserts, Drinks)
4. **Gallery**: Image grid with hover effects
5. **Chef Profile**: Meet the culinary team
6. **Testimonials**: Customer reviews and ratings
7. **Reservations**: Interactive booking form with validation
8. **Contact**: Location, hours, and social media

### Interactive Features
- Smooth scroll navigation
- Dynamic header on scroll
- Mobile-responsive menu
- Menu filtering system
- Form validation
- Scroll animations
- Hover effects and transitions

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended for best experience)

### Quick Start

1. **Open directly in browser**:
   ```bash
   open index.html
   ```

2. **Or use a local server** (recommended):
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Then visit: http://localhost:8000
   ```

3. **Or use Node's http-server**:
   ```bash
   npx http-server -p 8000
   ```

## 📁 Project Structure

```
FUTURE_FS_03/
├── index.html          # Main HTML structure
├── style.css           # Complete CSS design system
├── script.js           # JavaScript functionality
├── README.md           # This file
└── [images]            # Restaurant and food photography
    ├── hero-bg.jpg
    ├── about-image.jpg
    ├── chef-image.jpg
    ├── menu-*.jpg (12 menu item images)
    └── gallery-*.jpg (6 gallery images)
```

## 🎨 Design System

### Colors
- Primary: `#8B1538` (Burgundy)
- Secondary: `#D4AF37` (Gold)
- Accent: `#2D5D4D` (Emerald)
- Neutral: `#2C2C2C` (Charcoal), `#F5F5DC` (Cream)

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (sans-serif, modern)
- Responsive font sizes using `clamp()`

### Spacing
Consistent spacing scale from `0.5rem` to `8rem`

## 💻 Technologies Used

- **HTML5**: Semantic markup, SEO-optimized
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript**: No dependencies, modern ES6+
- **Google Fonts**: Playfair Display, Inter

## 🌟 Key Highlights

### Performance
- No external dependencies (except Google Fonts)
- Optimized images
- Efficient CSS with custom properties
- Lazy loading implementation

### Accessibility
- Semantic HTML5 elements
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast text

### SEO
- Proper meta tags
- Semantic structure
- Optimized headings hierarchy
- Alt text for images

## 📱 Responsive Design

The website is fully responsive across all devices:
- **Mobile**: < 640px
- **Tablet**: 640px - 968px
- **Desktop**: > 968px

## 🎯 Portfolio Features

This website showcases:
- ✅ Modern UI/UX trends (glassmorphism, micro-animations)
- ✅ Professional food photography presentation
- ✅ Interactive filtering and form validation
- ✅ Smooth scrolling and navigation
- ✅ Clean, maintainable code
- ✅ Fully responsive design

## 🛠️ Customization

### Changing Colors
Edit the CSS custom properties in `style.css`:
```css
:root {
  --color-primary: #8B1538;
  --color-secondary: #D4AF37;
  /* ... */
}
```

### Adding Menu Items
Add new HTML blocks in the menu section of `index.html`:
```html
<div class="menu-item" data-category="mains">
  <!-- Your content -->
</div>
```

### Modifying Fonts
Change the Google Fonts import in `index.html` and update CSS variables.

## 📝 Future Enhancements

Potential additions for client projects:
- Backend integration for reservations
- Online ordering system
- Google Maps integration
- Gallery lightbox
- Newsletter signup functionality
- Multi-language support
- Admin panel for menu management

## 📄 License

This project is a portfolio demonstration piece. Feel free to use it as inspiration for your own projects!

## 👨‍💻 Developer

Created as a portfolio demonstration of modern restaurant website design.

**Contact for freelance work**: [Add your contact information]

---

**Note**: This is a demonstration website built to showcase modern web development skills and design capabilities for potential restaurant clients.
