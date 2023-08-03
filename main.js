// SCROLL

window.addEventListener('scroll', onScroll)

function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection()
}

function activateMenuAtCurrentSection() {
    const targetLine = scrollY + innerHeight / 2

    // Verificar se a seção passou da linha
    
    // Quais dados vou precisar?
}

function showNavOnScroll() {
    var navigation = document.querySelector('nav')
    
    if (scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    var backToTopButton = document.querySelector('#backToTopButton')

    if (scrollY > 800) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }

    // console.log(scrollY)
}


// MENU EXPANDED

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}


// ScrollReveal Library

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home, 
#home .woman-image, 
#home .metrics, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#contact,
#contact header,
#contact .content`);