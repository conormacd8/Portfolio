const navToggle = document.querySelector('#nav-toggle')
const navLinks = document.querySelectorAll('.nav-link')
const intro = document.querySelector('.intro')
const logo = document.querySelector('.logo-header')
const logoSpan = document.querySelectorAll('.logo')

navToggle.addEventListener('click', function(){
	document.body.classList.toggle('nav-open')
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








