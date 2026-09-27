(function () {
    function removeLoader() {
      const loader = document.getElementById("loading-screen");
      if (loader) {
        loader.classList.add("hidden");
        setTimeout(() => {
          loader.remove();
        }, 100);
      }
    }
    if (document.readyState === "complete") {
      removeLoader();
    } else {
      window.addEventListener("load", removeLoader);
      document.addEventListener("DOMContentLoaded", removeLoader);
    }
    setTimeout(removeLoader, 2500);
  })();
window.tailwind = window.tailwind || {};
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: '#8b5cf6',
                dark: '#0f172a', 
                card: '#1e293b' 
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});