document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            setTimeout(() => {
                const rect = targetElement.getBoundingClientRect();
                window.scrollBy({
                    top: rect.top - 100,
                    behavior: 'smooth'
                });
            }, 50);
        }
    });
});
