let mainUbication = window.pageYOffset

// AOS start
AOS.init();

window.addEventListener('scroll', function() {
    let moveCurrent = window.pageYOffset

    if(mainUbication >= moveCurrent) {
        document.getElementsByTagName('nav')[0].style.top = "0px"
    } else {
        document.getElementsByTagName('nav')[0].style.top = "-100px"
    }

    mainUbication = moveCurrent
})

// Menu mobile

let linksHeader = document.querySelectorAll('.links-header')[0]
let semaforo = true

document.querySelectorAll('.hamburger')[0].addEventListener('click', function() {
    if(semaforo) {
        document.querySelectorAll('.hamburger')[0].style.color = '#fff'
        semaforo = false
    } else {
        document.querySelectorAll('.hamburger')[0].style.color = '#000'
        semaforo = true
    }
    linksHeader.classList.toggle('menu-two')
})