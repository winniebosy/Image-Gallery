//initializing the swiper obj
new Swiper(".swiper-container", {
    speed: 400,
    spaceBetween: 100,
    //pagination
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});