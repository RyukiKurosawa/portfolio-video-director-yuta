// Mobile menu toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const iconBars = document.getElementById('menu-icon-bars');
const iconTimes = document.getElementById('menu-icon-times');

if (btn && menu && iconBars && iconTimes) {
const toggleMenu = () => {
    const isHidden = menu.classList.contains('hidden');

    if (isHidden) {
    menu.classList.remove('hidden');
    iconBars.classList.remove('opacity-100', 'rotate-0');
    iconBars.classList.add('opacity-0', '-rotate-90');
    iconTimes.classList.remove('opacity-0', 'rotate-90');
    iconTimes.classList.add('opacity-100', 'rotate-0');
    } else {
    menu.classList.add('hidden');
    iconBars.classList.remove('opacity-0', '-rotate-90');
    iconBars.classList.add('opacity-100', 'rotate-0');
    iconTimes.classList.remove('opacity-100', 'rotate-0');
    iconTimes.classList.add('opacity-0', 'rotate-90');
    }
};

btn.addEventListener('click', toggleMenu);

menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
    if (!menu.classList.contains('hidden')) toggleMenu();
    });
});
}

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealElements.length > 0) {
const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
    }
    });
};

const revealOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});
}

// 動画制作歴・チャンネル運営歴の年数計算
document.addEventListener('DOMContentLoaded', () => {
const calcYears = startYear => {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
};

const videoEl = document.getElementById('videoYears');
const ytEl = document.getElementById('ytYears');

if (videoEl) videoEl.textContent = calcYears(2020);
if (ytEl) ytEl.textContent = calcYears(2022);
});

const yearEl = document.getElementById('currentYear');
if (yearEl) {
yearEl.textContent = new Date().getFullYear();
}

// アニメーションロゴの制御
(() => {
const loader = document.getElementById('logo-loader');
const loadingIndicator = document.getElementById('loading-indicator');
const progressFill = document.getElementById('progress-fill');

if (!loader) return;

const animationDuration = 3200;

setTimeout(() => {
    loader.classList.add('logo-exit');

    const isStillLoading = document.readyState !== 'complete';

    if (isStillLoading && loadingIndicator) {
    loadingIndicator.classList.add('visible');

    let progress = 0;

    const checkProgress = () => {
        if (document.readyState === 'loading') {
        progress = Math.min(progress + 2, 70);
        } else if (document.readyState === 'interactive') {
        progress = Math.min(progress + 5, 90);
        } else if (document.readyState === 'complete') {
        progress = 100;
        }

        if (progressFill) {
        progressFill.style.width = `${progress}%`;
        }

        if (document.readyState === 'complete' && progress >= 100) {
        setTimeout(() => {
            hideLoader();
        }, 300);
        } else {
        setTimeout(checkProgress, 100);
        }
    };

    checkProgress();
    } else {
    setTimeout(() => {
        hideLoader();
    }, 1500);
    }
}, animationDuration);

function hideLoader() {
    loader.classList.add('hidden');
    setTimeout(() => {
    loader.remove();
    }, 1500);
}

window.addEventListener('load', () => {
    if (loadingIndicator && loadingIndicator.classList.contains('visible')) {
    if (progressFill) {
        progressFill.style.width = '100%';
    }
    }
});
})();
