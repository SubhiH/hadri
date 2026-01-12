// ===========================
// Smooth Scroll Navigation
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Interactive System Map
// ===========================
const systemNodes = document.querySelectorAll('.node');

systemNodes.forEach(node => {
    // Add hover effect
    node.addEventListener('mouseenter', function() {
        const section = this.getAttribute('data-section');
        
        // Highlight connected lines
        const connections = document.querySelectorAll('.connection');
        connections.forEach(conn => {
            conn.style.opacity = '0.6';
            conn.style.strokeWidth = '3';
        });
    });
    
    node.addEventListener('mouseleave', function() {
        // Reset connections
        const connections = document.querySelectorAll('.connection');
        connections.forEach(conn => {
            conn.style.opacity = '0.3';
            conn.style.strokeWidth = '2';
        });
    });
    
    // Navigate on click
    node.addEventListener('click', function() {
        const section = this.getAttribute('data-section');
        const targetElement = document.getElementById(section);
        
        if (targetElement) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Add pulse effect to the clicked node
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);
        }
    });
});

// ===========================
// Scroll-based Section Animation
// ===========================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// ===========================
// Navbar Scroll Effect
// ===========================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ===========================
// Pipeline Stages Animation
// ===========================
const pipelineStages = document.querySelectorAll('.pipeline-stage');

const pipelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 150);
        }
    });
}, { threshold: 0.2 });

pipelineStages.forEach((stage, index) => {
    stage.style.opacity = '0';
    stage.style.transform = 'translateY(30px)';
    stage.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    pipelineObserver.observe(stage);
});

// ===========================
// Module Cards Stagger Animation
// ===========================
const moduleCards = document.querySelectorAll('.module-card');

const moduleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 100;
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, delay);
        }
    });
}, { threshold: 0.2 });

moduleCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    moduleObserver.observe(card);
});

// ===========================
// Project Cards Animation
// ===========================
const projectCards = document.querySelectorAll('.project-card');

const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 150;
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, delay);
        }
    });
}, { threshold: 0.2 });

projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    projectObserver.observe(card);
});

// ===========================
// Active Navigation Link
// ===========================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const navHeight = navbar.offsetHeight;
        
        if (window.pageYOffset >= (sectionTop - navHeight - 100)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.style.color = 'var(--accent)';
        }
    });
});

// ===========================
// Mobile Menu Toggle (for future enhancement)
// ===========================
// If you want to add a hamburger menu for mobile, you can implement it here

// ===========================
// Prevent animations on page load
// ===========================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===========================
// Easter egg: Konami code
// ===========================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg: Make all nodes glow
        systemNodes.forEach(node => {
            const circle = node.querySelector('circle');
            circle.style.filter = 'drop-shadow(0 0 30px var(--accent))';
            setTimeout(() => {
                circle.style.filter = '';
            }, 2000);
        });
        console.log('🎉 You found the easter egg!');
    }
});
