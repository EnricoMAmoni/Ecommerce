const navbarWrapper = document.querySelector('#navbarWrapper')

window.addEventListener('scroll', () => {
    if (window.scrollY > 40){
       navbarWrapper.classList.add('scrolled')
    } else {
       navbarWrapper.classList.remove('scrolled')
    }
 })

 AOS.init();

 /* let stelline = document.querySelectorAll('.stelline');
 stelline.forEach(stellina =>
 stellina.addEventListener('mouseover', () => {
   if(mouseover){
   stellina.classList.remove('fa-regular')
   stellina.classList.add('fa-solid')
} else {
   stellina.classList.add('fa-regular')
   stellina.classList.remove('fa-solid')
}
 }))
 */
 let stelline = document.querySelectorAll('.stelline');
 stelline.forEach(stellina =>
   stellina.addEventListener('mouseover', () => 
   stellina.innerHTML = `<i class="fa-solid fa-star"></i>`
 ),

 stelline.forEach(stellina =>
   stellina.addEventListener('mouseleave', () =>
   stellina.innerHTML = `<i class="fa-regular fa-star"></i>`
   ))
)

/* stelline.forEach(stellina => {
   if(stellina.addEventListener('mouseover') == true){
      stellina.innerHTML = `<i class="fa-solid fa-star"></i>`
   } else {
      stellina.innerHTML = `<i class="fa-regular fa-star"></i>`
   }
   return stellina
}) */





