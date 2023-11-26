// script.js
webSocket = new WebSocket('ws://localhost:3003');
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const registerHere = document.getElementById('register');

    registerHere.addEventListener('click',function(){
      window.location.href ='register.html'
    });

    loginButton.addEventListener('click', function () {
      const emailInput = document.getElementById('form2Example17').value;
      const passwordInput = document.getElementById('form2Example27').value;

    console.log(emailInput);
    console.log(passwordInput)
    fetch('http://localhost:3003/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify({
            email: emailInput,
            password: passwordInput
        })
      })
      .then(response => {
        if(response.ok){
            window.location.href = 'index.html'
        }
        else{        }
      })
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
  });
  