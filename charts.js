// ============================================
// CONFIGURAÇÃO DOS GRÁFICOS COM CHART.JS
// ============================================

// Cores do tema
const chartColors = {
    primary: '#6366F1',
    secondary: '#06B6D4',
    accent: '#F59E0B',
    bg: '#1E293B',
    text: '#F1F5F9',
    textMuted: '#94A3B8'
};

// Configuração padrão do Chart.js
Chart.defaults.color = chartColors.textMuted;
Chart.defaults.borderColor = 'rgba(100, 116, 139, 0.2)';
Chart.defaults.font.family = "'Space Grotesk', sans-serif";

// ============================================
// GRÁFICO DE LINGUAGENS DE PROGRAMAÇÃO
// ============================================

const languagesCtx = document.getElementById('languagesChart');
if (languagesCtx) {
    new Chart(languagesCtx, {
        type: 'doughnut',
        data: {
            labels: ['Python', 'JavaScript', 'Java', 'TypeScript', 'C#', 'Outros'],
            datasets: [{
                data: [26.98, 18.5, 12.3, 10.8, 8.2, 23.2],
                backgroundColor: [
                    '#6366F1',
                    '#06B6D4',
                    '#F59E0B',
                    '#EC4899',
                    '#8B5CF6',
                    'rgba(100, 116, 139, 0.3)'
                ],
                borderColor: '#1E293B',
                borderWidth: 2,
                borderRadius: 8,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: chartColors.text,
                        padding: 15,
                        font: {
                            size: 12,
                            weight: '500'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    titleColor: chartColors.text,
                    bodyColor: chartColors.text,
                    borderColor: chartColors.primary,
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

// ============================================
// GRÁFICO DE SALÁRIOS POR EXPERIÊNCIA
// ============================================

const salaryCtx = document.getElementById('salaryChart');
if (salaryCtx) {
    new Chart(salaryCtx, {
        type: 'bar',
        data: {
            labels: ['Estagiário', 'Júnior', 'Pleno', 'Sênior', 'Especialista'],
            datasets: [
                {
                    label: 'Salário Mínimo (R$)',
                    data: [1700, 4000, 7000, 12000, 18000],
                    backgroundColor: 'rgba(99, 102, 241, 0.5)',
                    borderColor: '#6366F1',
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false,
                    hoverBackgroundColor: '#6366F1'
                },
                {
                    label: 'Salário Médio (R$)',
                    data: [2000, 5500, 9500, 16000, 25000],
                    backgroundColor: 'rgba(6, 182, 212, 0.5)',
                    borderColor: '#06B6D4',
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false,
                    hoverBackgroundColor: '#06B6D4'
                },
                {
                    label: 'Salário Máximo (R$)',
                    data: [3000, 8000, 14000, 22000, 35000],
                    backgroundColor: 'rgba(245, 158, 11, 0.5)',
                    borderColor: '#F59E0B',
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false,
                    hoverBackgroundColor: '#F59E0B'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            indexAxis: 'x',
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: chartColors.text,
                        padding: 15,
                        font: {
                            size: 12,
                            weight: '500'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    titleColor: chartColors.text,
                    bodyColor: chartColors.text,
                    borderColor: chartColors.primary,
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': R$ ' + context.parsed.y.toLocaleString('pt-BR');
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(100, 116, 139, 0.1)',
                        drawBorder: false
                    },
                    ticks: {
                        color: chartColors.textMuted,
                        callback: function(value) {
                            return 'R$ ' + value.toLocaleString('pt-BR');
                        }
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        color: chartColors.textMuted
                    }
                }
            }
        }
    });
}

// ============================================
// ANIMAÇÃO DE NÚMEROS (CONTADOR)
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString('pt-BR');
    }, 16);
}

// Iniciar animação dos números quando a seção ficar visível
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            
            // Animar números nas caixas de estatísticas
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent.trim();
                const number = parseInt(text.replace(/\D/g, ''));
                if (!isNaN(number)) {
                    animateCounter(stat, number, 2000);
                }
            });
        }
    });
}, observerOptions);

// Observar a seção de mercado
const marketSection = document.getElementById('mercado');
if (marketSection) {
    observer.observe(marketSection);
}

// ============================================
// EFEITOS DE SCROLL
// ============================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.4)';
    }
});

// ============================================
// PARALLAX EFFECT (HERO)
// ============================================

window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrollY = window.scrollY;
        heroBackground.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});


