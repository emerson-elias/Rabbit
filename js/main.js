// Inicializa as animações de scroll (AOS)
AOS.init();

// Evento de envio do formulário (simulação)
document.getElementById('formContato')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Obrigado por seu contato! Em breve nossa equipe entrará em contato.');
    this.reset();
});

// Muda o fundo da navbar ao rolar a página
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    const nav = document.querySelector('.navbar');
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
        nav.classList.add('shadow');
    } else {
        nav.classList.remove('shadow');
    }

    // Verifica se a tela é maior que o breakpoint 'lg' do Bootstrap (991px)
    if (window.innerWidth > 991) {
        if (currentScroll > lastScrollTop && currentScroll > 100) {
            nav.classList.add('navbar-hidden');
        } else {
            nav.classList.remove('navbar-hidden');
        }
    } else {
        // Em telas menores, garante que a navbar fique sempre visível
        nav.classList.remove('navbar-hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
