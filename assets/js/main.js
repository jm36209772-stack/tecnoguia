// TecnoGuía — interacciones básicas

// Menú móvil
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const abierto = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });
}

// Formulario de newsletter
// NOTA: para recibir suscriptores de verdad, conecta un servicio de email
// (Mailchimp, Brevo, ConvertKit). Instrucciones en GUIA-MONETIZACION.md.
document.querySelectorAll('.newsletter-form').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = form.parentElement.querySelector('.newsletter-msg');
    if (msg) {
      msg.textContent = '¡Gracias! Te avisaremos de las mejores ofertas.';
      msg.style.display = 'block';
    }
    form.reset();
  });
});

// Aviso de cookies (requerido si usas AdSense)
if (!localStorage.getItem('cookiesAceptadas')) {
  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.innerHTML =
    '<span>Usamos cookies para mejorar tu experiencia y mostrar publicidad. ' +
    'Consulta nuestra <a href="cookies.html">política de cookies</a>.</span>' +
    '<button id="acceptCookies">Aceptar</button>';
  document.body.appendChild(banner);
  document.getElementById('acceptCookies').addEventListener('click', () => {
    localStorage.setItem('cookiesAceptadas', '1');
    banner.remove();
  });
}

// Año actual en el pie de página
document.querySelectorAll('.year').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Aparición suave de tarjetas al hacer scroll (respeta "reducir movimiento")
const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!sinMovimiento && 'IntersectionObserver' in window) {
  const objetivos = document.querySelectorAll(
    '.product-card, .article-card, .category-card, .product-box, .pick-box, .oferta-card, .section-head'
  );
  objetivos.forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 3) * 90 + 'ms';
  });
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        const el = entrada.target;
        el.classList.add('visible');
        observador.unobserve(el);
        // al terminar la animación, devolver el elemento a su estado normal
        // para no interferir con las transiciones de hover
        setTimeout(() => {
          el.classList.remove('reveal', 'visible');
          el.style.transitionDelay = '';
        }, 950);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  objetivos.forEach((el) => observador.observe(el));
}
