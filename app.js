window.addEventListener('load', function(){
    new Glider (document.querySelector('.carousel-list'), {
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: true,
        dots: '.dots',
        arrows: {
          prev: '.carousel-prev',
          next: '.carousel-next'
    },
    responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 775,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 'auto',
            slidesToScroll: 'auto',
            itemWidth: 150,
            duration: 0.25
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
          }
        }
      ]
})
})

