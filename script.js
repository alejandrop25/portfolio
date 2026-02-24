// 1. Configuração do Tailwind CSS (Precisa ser executada antes do Tailwind carregar)
window.tailwind = window.tailwind || {};
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: '#8b5cf6', // Roxo (Violet-500). Tente '#3b82f6' para azul.
                dark: '#0f172a',  // Fundo escuro
                card: '#1e293b'   // Fundo dos cartões
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
};

// 2. Lógica de Interatividade (Executada após o carregamento do HTML)
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});