const navbarWrapper = document.querySelector('#navbarWrapper')

window.addEventListener('scroll', () => {
    if (window.scrollY > 40){
       navbarWrapper.classList.add('scrolled')
    } else {
       navbarWrapper.classList.remove('scrolled')
    }
 })

 AOS.init();

const cardWrapper = document.querySelector('.cardWrapper');
let card = document.createElement('div');
card.classList.add("col-12", "col-lg-4", "col-md-6", "mb-5", "d-flex", "justify-content-center");
card.innerHTML = ` <div style="width: 18rem;">
<div class="figure" >
    <figure>
        <img src="https://picsum.photos/300/300" class="card-img-top" alt="Image">
    </figure>   
</div>
<div class="card-body">
    <h5 class="card-title text-center mt-2">Wild West Hoodie</h5>
    <p class="card-text text-center">Lorem ipsum dolor sit amet consectetur, adipisicing</p>
    <div class="text-center ">
        <span class="meta-icons mr-3 mx-3"><a href="#" class="mr-2"><i class="fa-solid fa-star "></i></a> 5.0</span>
        <span class="meta-icons wishlist mx-3"><a href="#" class="mr-2"><i class="fa-solid fa-heart heart"></i></a> 29</span>   
    </div>
</div>
<div class="d-flex align-items-center justify-content-center pb-3">
    <a href="#" class="btnCard1  btn-outline-dark text-center float-left mt-3 mx-1"><span class="card-text-button ">CART</span></a> 
    <a href="#" class="btnCard2 btn-outline-dark text-center float-left mt-3 mx-1"><span class="card-text-button">VIEW</span></a>
</div>
</div>`;
cardWrapper.appendChild(card);





