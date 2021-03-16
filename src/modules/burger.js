const burger = () => {

  const burgerBtn = document.querySelector('.m-menu');
  const mLinks = document.querySelector('.m-links');
  
  burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('m-menu-active');
    mLinks.classList.toggle('m-links__active')
  });


};

export default burger;