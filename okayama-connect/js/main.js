// Okayama Connect - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.hamburger') && !e.target.closest('.mobile-nav')) {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
      }
    });
  }

  // Fade in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // Form validation
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const nameField = this.querySelector('input[name="name"]');
      const emailField = this.querySelector('input[name="email"]');
      const messageField = this.querySelector('textarea[name="message"]');

      if (!nameField.value.trim()) {
        e.preventDefault();
        alert('お名前を入力してください');
        return false;
      }

      if (!emailField.value.trim()) {
        e.preventDefault();
        alert('メールアドレスを入力してください');
        return false;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
        e.preventDefault();
        alert('有効なメールアドレスを入力してください');
        return false;
      }

      if (!messageField.value.trim()) {
        e.preventDefault();
        alert('お問い合わせ内容を入力してください');
        return false;
      }
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
