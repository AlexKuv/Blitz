const sendForm = () => {

  if(!document.getElementById('contacts')) {
    return;
    }

  const formUser = document.querySelector('#form-user');

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