const slider = () => {

  const sliderContent = document.querySelector('.slider-content'),
  slide = document.querySelectorAll('.slider-item'),
  dash = document.querySelectorAll('.dash');

  let currentSlide = 0,
  interval;



  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'open');
    prevSlide(dash, currentSlide, 'active');
    currentSlide++;
    if(currentSlide >= slide.length){
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'open');
    nextSlide(dash, currentSlide, 'active');
  };

  const startSlide = () => {
    interval = setInterval(autoPlaySlide, 3000);
  };

  startSlide();

};

export default slider;

