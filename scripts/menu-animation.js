const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('main-navigation');
const main = document.getElementById('main');
const menuLinks = nav.querySelectorAll('a');

btnMenu.addEventListener('click', toggleMenu);

menuLinks.forEach(function(link) {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('click', function(e) {
    const menuIsOpen = nav.classList.contains('is-open');
    const clickedInsideNav = nav.contains(e.target);
    const clickedButton = btnMenu.contains(e.target);

    if (menuIsOpen && !clickedInsideNav && !clickedButton) {
        closeMenu();
    }
});

function toggleMenu() {
    nav.classList.toggle('is-open');
    main.classList.toggle('is-shifted');
    btnMenu.classList.toggle('is-open');
}

function closeMenu() {
    nav.classList.remove('is-open');
    main.classList.remove('is-shifted');
    btnMenu.classList.remove('is-open');
}