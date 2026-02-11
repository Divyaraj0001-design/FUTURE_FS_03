// ========================================
// RESTAURANT WEBSITE - JAVASCRIPT
// Modern Interactions & Functionality
// ========================================

// ===== SMOOTH SCROLL NAVIGATION =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      navLinks.classList.remove('active');
    }
  });
});

// ===== HEADER SCROLL EFFECT =====
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===== MOBILE MENU TOGGLE =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Animate button
  if (navLinks.classList.contains('active')) {
    mobileMenuBtn.textContent = '✕';
  } else {
    mobileMenuBtn.textContent = '☰';
  }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    navLinks.classList.remove('active');
    mobileMenuBtn.textContent = '☰';
  }
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add delay for staggered animation
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// ===== MENU FILTERING =====
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    const filter = button.getAttribute('data-filter');
    
    menuItems.forEach(item => {
      const category = item.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        item.style.display = 'flex';
        // Trigger animation
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 100);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => {
          item.style.display = 'none';
        }, 400);
      }
    });
  });
});

// ===== FORM VALIDATION & SUBMISSION =====
const reservationForm = document.getElementById('reservationForm');
const formMessage = document.getElementById('formMessage');

reservationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(reservationForm);
  const data = Object.fromEntries(formData);
  
  // Validate form
  if (!validateForm(data)) {
    return;
  }
  
  // Show loading state
  const submitBtn = reservationForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Processing...';
  submitBtn.disabled = true;
  
  // Simulate API call
  setTimeout(() => {
    // Show success message
    formMessage.textContent = `Thank you, ${data.name}! Your reservation for ${data.guests} on ${formatDate(data.date)} at ${formatTime(data.time)} has been confirmed. We'll send a confirmation email to ${data.email}.`;
    formMessage.className = 'form-message success';
    
    // Reset form
    reservationForm.reset();
    
    // Reset button
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    
    // Hide message after 10 seconds
    setTimeout(() => {
      formMessage.style.display = 'none';
      setTimeout(() => {
        formMessage.className = 'form-message';
      }, 400);
    }, 10000);
  }, 1500);
});

function validateForm(data) {
  // Validate name
  if (data.name.trim().length < 2) {
    showError('Please enter a valid name.');
    return false;
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    showError('Please enter a valid email address.');
    return false;
  }
  
  // Validate phone
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  if (!phoneRegex.test(data.phone) || data.phone.length < 10) {
    showError('Please enter a valid phone number.');
    return false;
  }
  
  // Validate date
  const selectedDate = new Date(data.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (selectedDate < today) {
    showError('Please select a future date.');
    return false;
  }
  
  // All validations passed
  return true;
}

function showError(message) {
  formMessage.textContent = message;
  formMessage.className = 'form-message error';
  
  setTimeout(() => {
    formMessage.style.display = 'none';
    setTimeout(() => {
      formMessage.className = 'form-message';
    }, 400);
  }, 5000);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function formatTime(timeString) {
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}

// ===== PARALLAX EFFECT FOR HERO =====
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.hero-bg');
      
      parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
      
      ticking = false;
    });
    
    ticking = true;
  }
});

// ===== SET MINIMUM DATE FOR RESERVATION =====
const dateInput = document.getElementById('date');
if (dateInput) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
  const day = String(tomorrow.getDate()).padStart(2, '0');
  
  dateInput.min = `${year}-${month}-${day}`;
}

// ===== GALLERY ITEM INTERACTION =====
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    // Add a subtle click effect
    item.style.transform = 'scale(0.95)';
    setTimeout(() => {
      item.style.transform = '';
    }, 200);
    
    // Here you could add a lightbox/modal functionality
    console.log('Gallery item clicked - Lightbox functionality can be added here');
  });
});

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images when they come into view
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Image loading is handled by browser, but we can add effects
        img.style.opacity = '1';
        imageObserver.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===== CONSOLE WELCOME MESSAGE =====
console.log('%c🍽️ Welcome to Savoria Fine Dining', 'color: #8B1538; font-size: 20px; font-weight: bold;');
console.log('%cWebsite crafted with passion for culinary excellence', 'color: #D4AF37; font-size: 14px;');

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
  // Add fade-in-up animation to hero content
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.classList.add('fade-in-up');
  }
});

// ===== ACTIVE NAV LINK HIGHLIGHTING =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});
