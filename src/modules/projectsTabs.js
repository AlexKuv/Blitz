  const projectsTabs = () => {

  if(!~document.location.pathname.indexOf('projects')) {
    return;
  }
  const navMenu = document.querySelector('.nav-menu'),
  navLi = navMenu.querySelectorAll('li>a'),
  projectPage = document.querySelectorAll('.project-page');

  const filter = (category, items) => {
    
    items.forEach(item => {
      const itemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === 'all';

      if(itemFiltered && !isShowAll) {
        item.style.display = 'none'
      } else{
        item.style.display = 'block'
      }
    })
  };

    navLi.forEach(item => {

      item.addEventListener('click', e => {
        e.preventDefault();
        let target = e.target;
        navLi.forEach(i => i.classList.remove('nav-link_active'));
        target.classList.add('nav-link_active')

        filter(target.dataset.category, projectPage)

      });
  });

  
};

export default projectsTabs;