/* ============================================
   JL TRUCKING — MAIN JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Active Nav Link ---- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPage) link.classList.add('active');
  });

  /* ---- Navbar Scroll ---- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* ---- Mobile Toggle ---- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navCta = document.querySelector('.nav-cta');
  if (toggle) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      if (navCta) navCta.classList.toggle('open');
      const spans = toggle.querySelectorAll('span');
      spans[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translate(5px,5px)' : '';
      spans[1].style.opacity  = navLinks.classList.contains('open') ? '0' : '1';
      spans[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translate(5px,-5px)' : '';
    });
  }

  /* ---- FAQ Accordion ---- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  /* ---- Form Submission (Formspree + spam protection) ---- */
  function showNotify(message, isError) {
    const notify = document.getElementById('notification');
    if (!notify) return;
    notify.textContent = message;
    notify.style.borderLeftColor = isError ? '#dc2626' : 'var(--accent)';
    notify.classList.add('show');
    setTimeout(() => notify.classList.remove('show'), 5000);
  }

  document.querySelectorAll('form[data-netlify]').forEach(form => {
    form.addEventListener('submit', async e => {
      e.preventDefault();

      // 1. Honeypot check — if the hidden field is filled, it's a bot. Silently stop.
      const honeypot = form.querySelector('input[name="bot-field"]');
      if (honeypot && honeypot.value.trim() !== '') {
        return; // pretend nothing happened
      }

      // 2. Client-side rate limit — block repeat submits within 30 seconds.
      const lastSubmit = Number(sessionStorage.getItem('jl_last_submit') || 0);
      const now = Date.now();
      if (now - lastSubmit < 30000) {
        showNotify('Please wait a moment before submitting again.', true);
        return;
      }

      // 3. Basic required-field validation (Netlify re-checks server-side too).
      const required = form.querySelectorAll('[required]');
      for (const field of required) {
        if (!field.value.trim()) {
          showNotify('Please fill in all required fields.', true);
          field.focus();
          return;
        }
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) { submitBtn.disabled = true; submitBtn.innerHTML = 'Sending...'; }

      // 4. Submit to Netlify Forms.
      //    Locally (Live Server / opened as a file) there is no Netlify backend,
      //    so we run a harmless demo. Once deployed to Netlify, real submissions
      //    appear in your Netlify dashboard under Forms.
      const isLocal = location.protocol === 'file:' ||
                      location.hostname === 'localhost' ||
                      location.hostname === '127.0.0.1';
      try {
        if (isLocal) {
          await new Promise(r => setTimeout(r, 600));
          showNotify('✓ Demo mode: deploy to Netlify to receive real submissions.', false);
          form.reset();
        } else {
          const body = new URLSearchParams(new FormData(form)).toString();
          const res = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body
          });
          if (res.ok) {
            sessionStorage.setItem('jl_last_submit', String(now));
            showNotify('✓ Your message was sent! We\'ll contact you shortly.', false);
            form.reset();
          } else {
            showNotify('Something went wrong. Please call us at 951-833-8122.', true);
          }
        }
      } catch (err) {
        showNotify('Network error. Please call us at 951-833-8122.', true);
      } finally {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = originalText; }
      }
    });
  });

  /* ---- Scroll Reveal ---- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .why-card, .testimonial-card, .faq-item, .rate-factor').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

});
