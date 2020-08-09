document.addEventListener('DOMContentLoaded',function(){
  const hero = new Slider;
})

class Slider {
  constructor(){
    this.swiper = this._initSwiper(); 
  }

  _initSwiper(){
    return new Swiper('.swiper-container', {
      loop: true,
      grabCursor:true,
      effect:'coverflow',
      centeredSlides:true,
      slidesPerView:1,
      speed:2000,
      breakpoints: {
        1024: {
        slidesPerView: 2,
        }
      },
      autoplay:{
        delay:4000,
        disableOnInteraction:false,
      }
    })
  }

}


