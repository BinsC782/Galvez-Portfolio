const modals = document.querySelectorAll('.modal');
const clickableImages = document.querySelectorAll('.clickable-img');
const viewButtons = document.querySelectorAll('.view-details-btn');
const closeButtons = document.querySelectorAll('.close-modal');

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

clickableImages.forEach(img => {
    img.addEventListener('click', () => {
        const modalId = img.dataset.modal;
        openModal(modalId);
    });
});

viewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const modalId = btn.dataset.modal;
        openModal(modalId);
    });
});

closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        closeModal(modal);
    });
});

modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modals.forEach(modal => {
            if (modal.classList.contains('active')) {
                closeModal(modal);
            }
        });
    }
});

let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        if (window.scrollY > 50) {
            sidebar.classList.add('scrolled');
        } else {
            sidebar.classList.remove('scrolled');
        }
    }
});

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
