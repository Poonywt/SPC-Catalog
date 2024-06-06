function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 2,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },  
});


const TileCards =  document.querySelectorAll(".Tiles-card");

TileCards.forEach((TileCard) => {
   TileCard.addEventListener("click", ()=> {
     TileCard.classList.toggle("Active");
   });

  TileCard.addEventListener("pointerleave", () => {
    TileCard.classList.remove("Active");
  });
});
