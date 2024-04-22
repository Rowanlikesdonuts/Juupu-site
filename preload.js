// Dit is een script dat alle pagina's van de site van te voren downloadt op de achtergrond. Dat zorgt voor een snellere site.
function preloadPagesWithDelay(pages, delay) {
    setTimeout(() => {
        pages.forEach(page => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = page;
            link.as = 'document';
            document.head.appendChild(link);
        });
    }, delay);
}

// Preload na 2 seconden
window.addEventListener('DOMContentLoaded', (event) => {
    const pagesToPreload = ['index.html', 'contact.html', 'informatie.html', 'titlebar.html']; //BELANGRIJK: VUL IN DE LIJST ALLE PAGINA'S IN DIE GEPRELOADT MOETEN WORDEN!
    preloadPagesWithDelay(pagesToPreload, 2000);
});
