function validateLogin() {
    let errorMessage = '';
    
    if (document.getElementById('email').value === '') {
      errorMessage += 'Please enter your email address.\n';
    } else if (!validateEmail(document.getElementById('email').value)) {
      errorMessage += 'Please enter a valid email address.\n';
    }
  
    if (document.getElementById('password').value === '') {
      errorMessage += 'Please enter your password.\n';
    }
  
    
    if (errorMessage !== '') {
      document.getElementById('error-message').innerText = errorMessage;
      return false; 
    }
  
    return true; 
  }
  
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }
  