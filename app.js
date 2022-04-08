let bars = document.querySelector(".bars")
let resNav = document.querySelector(".res-nav")
let bgModal = document.querySelector(".bg-modal")
let open = document.querySelector('.open')
let close = document.querySelector('.close')
let obuna = document.querySelector('.obuna')
let ring = document.querySelector('.ring')

bars.addEventListener('click', () =>{
    resNav.classList.toggle('shownav')
})

open.addEventListener('click', ()=>{
    bgModal.classList.add('showmodal')
})

close.addEventListener('click', ()=>{
    bgModal.classList.remove('showmodal')
})
obuna.addEventListener('click', ()=>{
    bgModal.classList.remove('showmodal')
    ring.classList.add('showring')
    const audio = new Audio('bell.mp3')
    audio.play()
    setTimeout(() => {
        ring.classList.remove('showring')
        audio.pause()
    }, 6000);
})