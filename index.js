const navToggle = document.querySelector('#nav-toggle')
const navLinks = document.querySelectorAll('.nav-link')
const intro = document.querySelector('.intro')
const logo = document.querySelector('.logo-header')
const logoSpan = document.querySelectorAll('.logo')
const typingModalBtn = document.querySelector('#typing-modal-switch')
const hairModalBtn = document.querySelector('#hair-modal-switch')
const portfolioModalBtn = document.querySelector('#portfolio-modal-switch')
const colorModalBtn = document.querySelector('#color-modal-switch')
const typingModal = document.querySelector('#typing-modal')
const hairModal = document.querySelector('#hair-modal')
const portfolioModal = document.querySelector('#portfolio-modal')
const colorModal = document.querySelector('#color-modal')
const closeModal = document.querySelectorAll('.close-modal-btn')
const allModals = document.querySelectorAll('.modal')

typingModalBtn.addEventListener('click', function(){
  typingModal.classList.remove('hidden')
  navToggle.classList.add('hidden')
})
hairModalBtn.addEventListener('click', function(){
  hairModal.classList.remove('hidden')
  navToggle.classList.add('hidden')
})
portfolioModalBtn.addEventListener('click', function(){
  portfolioModal.classList.remove('hidden')
  navToggle.classList.add('hidden')
})
colorModalBtn.addEventListener('click', function(){
  colorModal.classList.remove('hidden')
  navToggle.classList.add('hidden')
})

navToggle.addEventListener('click', function(){
	document.body.classList.toggle('nav-open')
})
closeModal.forEach(closeModal => {
  closeModal.addEventListener('click',function(){
    allModals.forEach(modal => {
    modal.classList.add('hidden')
  })
  navToggle.classList.remove('hidden')
  })
})


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.classList.remove('nav-open')
  } else {
		document.body.classList.add('nav-open')
  }
}

var x = window.matchMedia("(max-width: 750px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

window.addEventListener('DOMContentLoaded', ()=> {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(()=> {
        span.classList.add('active')
      }, (idx + 1) * 400)
    })
    
    setTimeout(()=> {
      logoSpan.forEach((span,idx)=> {
        setTimeout(()=>{
          span.classList.remove('active')
          span.classList.add('fade')

        }, (idx + 1) * 50)
      })
    },2000)

    setTimeout(()=>{
      intro.style.top = "-100vh"
    },2300)


  });
})








