const sendForm = () => {

  if(!document.getElementById('contacts')) {
    return;
    }

  const formUser = document.querySelector('#form-user');
  const formbtn = document.querySelector('.form-btn');

  // валидатор input
  let inputValid = formUser.querySelectorAll('input');
      inputValid.forEach((elem) => {

        elem.addEventListener('input', (e) => {

          if(elem.matches('[type=email]')) {
            let email = document.querySelector('[type=email]');
            let reg = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;

            if(!reg.test(email.value)){
              email.style.cssText = `border: 1px solid red`;
              formbtn.disabled = true;
            }else if(reg.test(email.value)){
              email.style.cssText = '';
              formbtn.disabled = !reg.test(elem.value);
            }
          }
          
        if (elem.matches('[type=text]')){
          elem.value = elem.value.replace(/[^а-яА-Яa-zA-Z]/,  '');
        }
        
        
          
      });
    });

    // валидатор для textarea
    let message = document.querySelector('.message')
      message.addEventListener('input', () => {
        message.value = message.value.replace(/[^а-яА-Яa-zA-Z\s\,\.\?\!\-\;\:]/,  '');
      });

  formUser.addEventListener('submit', event => {
    event.preventDefault();
    
    const formData = new FormData(formUser);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });

    fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    .then((response) => {
      if(response.status === 200) {
        formUser.querySelectorAll('input').forEach(i => i.value = '');
      } else {
        formUser.querySelectorAll('input').forEach(i => i.value = '');
        console.error(response.status);
      }
    })
  });

};

export default sendForm;