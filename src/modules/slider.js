const slider = () => {
  const sliderContent = document.querySelector('.slider-content'),
  slide = document.querySelectorAll('.slider-item'),
  dash = document.querySelectorAll('.dash'),
  slideDescription = document.querySelectorAll('.slide-description');

  let currentSlide = 0,
  interval;

  if(!~document.location.pathname.indexOf('index') && 
  !~document.location.pathname.indexOf('/')) {
    return;
  }

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  // авто-проигрывание слайдера
  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'open');
    prevSlide(dash, currentSlide, 'active');
    prevSlide(slideDescription, currentSlide , 'description-active')
    currentSlide++;
    if(currentSlide >= slide.length){
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'open');
    nextSlide(dash, currentSlide, 'active');
    nextSlide(slideDescription, currentSlide, 'description-active')
  };

  const startSlide = () => {
    interval = setInterval(autoPlaySlide, 2000);
  };
  const stopSlide = () => {
    clearInterval(interval);
  };

 
  sliderContent.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;

    if(!target.matches('.dash')) {
      return;
    }

    prevSlide(slide, currentSlide, 'open');
    prevSlide(dash, currentSlide, 'active');
    prevSlide(slideDescription, currentSlide , 'description-active')

    if(target.matches('.dash')) {
      dash.forEach((item, index) => {
        if (item === target) {
          currentSlide = index;
        }
      });
    }


    nextSlide(slide, currentSlide, 'open');
    nextSlide(dash, currentSlide, 'active');
    nextSlide(slideDescription, currentSlide , 'description-active')
  });

  sliderContent.addEventListener('mouseover', (event) => {
    
    if (event.target.matches('.dash')) {
      stopSlide();
    }
  });

  sliderContent.addEventListener('mouseout', (event) => {
    
    if (event.target.matches('.dash')) {
      startSlide();
    }
  });







  startSlide();

};

export default slider;

