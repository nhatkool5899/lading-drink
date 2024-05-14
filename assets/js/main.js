$('.banner-slick').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });


  
window.addEventListener('scroll', event => {
  var navbarScroll = function () {
      const headerTop = document.body.querySelector('.header');
      if (!headerTop) {
          return;
      }
      if (window.scrollY === 0) {
          headerTop.classList.remove('active')
      } 
      if(window.scrollY > 90){
          headerTop.classList.add('active')
      }

  };

  navbarScroll();


});