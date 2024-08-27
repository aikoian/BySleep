let aiMenu = document.getElementById('ai-menu')
let menu = document.getElementById('menu-mobile')
let Overlay = document.getElementById('overlay-menu')

aiMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

Overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

