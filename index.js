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

// open modal on 'more info' click
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



// on click, hide all modals
closeModal.forEach(closeModal => {
  closeModal.addEventListener('click',function(){
    allModals.forEach(modal => {
    modal.classList.add('hidden')
  })
  navToggle.classList.remove('hidden')
  })
})

// Listen for outside click
window.addEventListener('click', clickOutside)

// Function to close modal if outside click
function clickOutside(e){
  allModals.forEach(modal => {
    if (!modal.classList.contains('hidden')){
      if (e.target == modal){
        modal.classList.add('hidden')
      }
    }
  })
}
// Listen for tab on focus
window.addEventListener('keydown', closeFocus)

// Function to check if we are in modal and tab key is being used 
function closeFocus(e){
  if (e.key === "Tab" || e.keyCode === 9){
    closeModal.forEach(closeModal => {
      if(document.activeElement === closeModal){
      closeModal.focus()
      e.preventDefault()
    }
    })
    
  }
}

// Open and close navigation
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

navToggle.addEventListener('click', function(){
	document.body.classList.toggle('nav-open')
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