// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   };
  
//   function checkReservation() {
//     const name = document.getElementById('nameInput').value;
//     const messageElement = document.getElementById('message');
  
//     if (name === '' || !name.trim()) {
//       messageElement.textContent = `Please enter a valid name`;
//       return;
//     }
  
//     if (reservations.hasOwnProperty(name)) {
//       if (!reservations[name].claimed) {
//         messageElement.textContent = `Welcome, ${name}`;
//       } else {
//         messageElement.textContent = `Hmm, someone already claimed this reservation`;
//       }
//     } else {
//       messageElement.textContent = `You have no reservation`;
//     }
//   }
  

//   ------------------------------------------------------------


function validateForm() {
    const name = document.getElementById('nameInput').value.trim();
    const salary = parseFloat(document.getElementById('salaryInput').value);
    const birthday = document.getElementById('birthdayInput').value;
    const phone = document.getElementById('phoneInput').value;
  
    const errorMessages = [];
  
    if (name.length <= 2) {
      errorMessages.push("Name must be longer than 2 characters.");
    }
  
    if (!(salary > 10000 && salary < 16000)) {
      errorMessages.push("Salary must be greater than 10,000 but less than 16,000.");
    }
  
    if (!birthday) {
      errorMessages.push("Birthday may not be null.");
    }
  
    if (phone.length !== 10) {
      errorMessages.push("Phone must be 10 digits long.");
    }
  
    if (errorMessages.length === 0) {
        hideFormAndShowWelcomeMessage(name);
    
        const inputFields = document.querySelectorAll('input[type="text"], input[type="number"], input[type="date"], input[type="tel"]');
        const firstFieldColor = inputFields[0].style.backgroundColor;
        const allSameColor = Array.from(inputFields).every(field => field.style.backgroundColor === firstFieldColor);
    
        if (allSameColor) {
          displaySameColorMessage("Nice job!");
        } else {
          displaySameColorMessage(""); 
        }
      } else {
        displayErrors(errorMessages);
      }
    }
    
    function displaySameColorMessage(message) {
      const sameColorMessage = document.getElementById('sameColorMessage');
      sameColorMessage.textContent = message;
    }
  
   function displayErrors(errors) {
        const errorContainer = document.getElementById('errorMessages');
        errorContainer.innerHTML = '';
      
        for (let i = 0; i < errors.length; i++) {
          const error = errors[i];
          const errorMessage = document.createElement('p');
          errorMessage.textContent = error;
          errorContainer.appendChild(errorMessage);
        }
    }

  
  function hideFormAndShowWelcomeMessage(name) {
    const form = document.getElementById('signupForm');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const errorMessages = document.getElementById('errorMessages');

    errorMessages.style.opacity = 0;  
    form.style.display = 'none';
    welcomeMessage.style.display = 'block';
    welcomeMessage.textContent = `Welcome, ${name}!`;
}

  

// Q1 - Arrow & call back func ----------------------

// const pushPull = (func) => {
//     func();
//   };

// --------------------------
// const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }

//   const getTime = (func) => {
//     const currentTime = new Date();
//     func(currentTime);
//   };
  
//   getTime(returnTime)

// -------------------------------

//   const sumOfTheenumbers= (a,b,c) => a+b+c;
  
// -------------------------------

// let capitalize = (string) => {   
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }




// console.log (capitalize("bOb")) 
// console.log(capitalize("BArAA")) 
// console.log(capitalize("MagHKIKi")) 