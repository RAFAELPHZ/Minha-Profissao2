// ============================================
// INTERAÇÕES E ANIMAÇÕES DO SITE
// ============================================

// ============================================
// SMOOTH SCROLL PARA LINKS DE NAVEGAÇÃO
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// ANIMAÇÃO DE ENTRADA DE ELEMENTOS
// ============================================

const animateOnScroll = () => {
    const elements = document.querySelectorAll('.card, .area-card, .language-item, .skill-item, .stat-box');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
};

// Executar animação quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateOnScroll);
} else {
    animateOnScroll();
}

// ============================================
// EFEITO DE HOVER NOS CARDS
// ============================================

const addCardHoverEffect = () => {
    const cards = document.querySelectorAll('.card, .area-card, .language-item, .skill-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });
};

addCardHoverEffect();

// ============================================
// ATIVAÇÃO DE LINKS DE NAVEGAÇÃO
// ============================================

const updateActiveNavLink = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.5
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
};

updateActiveNavLink();

// ============================================
// ADICIONAR CLASSE ACTIVE AO NAV-LINK
// ============================================

const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #F1F5F9;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ============================================
// EFEITO DE DIGITAÇÃO NO HERO
// ============================================

const typewriterEffect = () => {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let index = 0;
    
    const typeInterval = setInterval(() => {
        if (index < text.length) {
            heroTitle.textContent += text[index];
            index++;
        } else {
            clearInterval(typeInterval);
        }
    }, 50);
};

// Executar efeito de digitação quando a página carregar
window.addEventListener('load', () => {
    setTimeout(typewriterEffect, 300);
});

// ============================================
// RIPPLE EFFECT NOS BOTÕES
// ============================================

const addRippleEffect = () => {
    const buttons = document.querySelectorAll('.cta-button, .cta-button-large');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
};

// Adicionar CSS para o ripple effect
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .cta-button, .cta-button-large {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

addRippleEffect();

// ============================================
// CONTADOR DE SCROLL PROGRESS
// ============================================

const addScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #6366F1, #06B6D4);
        z-index: 999;
        width: 0%;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

addScrollProgress();

// ============================================
// TOOLTIP PARA TAGS
// ============================================

const addTooltips = () => {
    const tags = document.querySelectorAll('.tag');
    
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(15, 23, 42, 0.95);
                color: #F1F5F9;
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                font-size: 0.85rem;
                white-space: nowrap;
                pointer-events: none;
                z-index: 1000;
                border: 1px solid rgba(99, 102, 241, 0.3);
                bottom: 100%;
                left: 50%;
                transform: translateX(-50%);
                margin-bottom: 0.5rem;
            `;
            
            // Adicionar conteúdo do tooltip (pode ser customizado)
            tooltip.textContent = this.textContent + ' - Tecnologia Popular';
            this.style.position = 'relative';
            this.appendChild(tooltip);
            
            setTimeout(() => {
                tooltip.remove();
            }, 3000);
        });
    });
};

addTooltips();

// ============================================
// DARK MODE TOGGLE (Opcional)
// ============================================

const initThemeToggle = () => {
    // Verificar preferência do usuário
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // O site já está em dark mode por padrão
    // Aqui você pode adicionar um toggle se desejar
};

initThemeToggle();

// ============================================
// LAZY LOADING DE IMAGENS
// ============================================

const initLazyLoading = () => {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
};

initLazyLoading();

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c🚀 O Mundo do Programador', 'font-size: 20px; font-weight: bold; color: #6366F1;');
console.log('%cBem-vindo! Explore o universo da programação.', 'font-size: 14px; color: #06B6D4;');
console.log('%cDesenvolvido com ❤️ para programadores', 'font-size: 12px; color: #F59E0B;');


