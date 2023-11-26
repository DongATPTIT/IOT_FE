// register.js
webSocket = new WebSocket('ws://localhost:3003');


document.addEventListener('DOMContentLoaded', function () {
    // Lắng nghe sự kiện click của nút "Sign up"
    const signupButton = document.querySelector('#signupButton');
    signupButton.addEventListener('click', function (event) {
      event.preventDefault();
  
      const fullName = document.querySelector('#form3Example1').value;
      const email = document.querySelector('#form3Example3').value;
      const address = document.querySelector('#form3Example4').value;
      const formData = {
        name:'',
        email:'',
        address:'',
      };
      formData.name = fullName;
      formData.email = email;
      formData.address= address;
      
      fetch('http://localhost:3003/api/createUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify({
            name: fullName,
            email: email   ,
            address: address
        })
      })
      .then(response => {
        if(response.ok){
            window.location.href = 'login.html'
        }
        else{
            alert("Error")
        }
      })
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });
    
    

  });
  