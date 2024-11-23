function validateForm() {
    let errorMessage = '';
    let form = document.getElementById('registration-form');
  
    
    if (document.getElementById('last-name').value === '') {
      errorMessage += 'Please enter your last name.\n';
    }

    if (document.getElementById('first-name').value === '') {
      errorMessage += 'Please enter your first name.\n';
    }
  
    
    if (document.getElementById('gender').value === '') {
      errorMessage += 'Please select your gender.\n';
    }
  
    
  
    
    if (document.getElementById('dob').value === '') {
      errorMessage += 'Please enter your date of birth.\n';
    }
  
  
    if (document.getElementById('email').value === '') {
      errorMessage += 'Please enter your email address.\n';
    } else if (!validateEmail(document.getElementById('email').value)) {
      errorMessage += 'Please enter a valid email address.\n';
    }
  
    
    if (errorMessage !== '') {
      document.getElementById('error-message').innerText = errorMessage;
      return false; 
    }
  
    
    document.getElementById('error-message').innerText = '';
    document.getElementById('success-message').style.display = 'block'; 
  
  
    return true; 
  }
  
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }