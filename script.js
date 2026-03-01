/* ============================================
   JHULIA DA COSTA — PORTFOLIO INTERACTIVITY
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // ===== SCROLL REVEAL ANIMATION =====
    const revealElements = document.querySelectorAll(
        '.section, .project-card, .project-featured, .about-content, .education, .skills-grid, .footer-content'
    );

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Don't unobserve — let it re-trigger if you want
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // ===== SKILL BAR ANIMATION =====
    const skillBars = document.querySelectorAll('.skill-fill');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const targetWidth = bar.style.width;
                bar.style.width = '0%';
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        bar.style.width = targetWidth;
                    });
                });
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.3 });

    skillBars.forEach(bar => skillObserver.observe(bar));

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== SPIN STARS ON SCROLL =====
    const stars = document.querySelectorAll('.spin-star');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        stars.forEach((star, index) => {
            const speed = 0.15 + (index * 0.05);
            star.style.transform = `rotate(${scrollY * speed}deg)`;
        });
    }, { passive: true });

    // ===== HERO BADGE SUBTLE GLOW ANIMATION =====
    const heroBadge = document.querySelector('.hero-badge');
    if (heroBadge) {
        heroBadge.addEventListener('mouseenter', () => {
            heroBadge.style.boxShadow = '0 0 25px rgba(22, 70, 217, 0.5)';
        });
        heroBadge.addEventListener('mouseleave', () => {
            heroBadge.style.boxShadow = 'none';
        });
    }

    // ===== SCROLL INDICATOR FADE ON SCROLL =====
    const scrollIndicator = document.getElementById('scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            const opacity = Math.max(0, 1 - window.scrollY / 400);
            scrollIndicator.style.opacity = opacity;
        }, { passive: true });
    }
});
