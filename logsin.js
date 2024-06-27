function login() {
    const emailInput = document.getElementById('login-email');
    const passwordInput = document.getElementById('login-password');
    const successMessage = document.getElementById('login-success');

    if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {

      successMessage.textContent = 'Login successful!';
      emailInput.style.display = 'none';
      passwordInput.style.display = 'none';
    } else {
      successMessage.textContent = 'Invalid email or password. Please try again.';
    }
  }

  function signup() {
    const nameInput = document.getElementById('signup-name');
    const emailInput = document.getElementById('signup-email');
    const passwordInput = document.getElementById('signup-password');
    const successMessage = document.getElementById('signup-success');

    if (validateName(nameInput.value) && validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
      successMessage.textContent = 'Sign Up successful!';
      nameInput.style.display = 'none';
      emailInput.style.display = 'none';
      passwordInput.style.display = 'none';
    } else {
      successMessage.textContent = 'Invalid input. Please check your information and try again.';
    }
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function validatePassword(password) {
    return password.length >= 6;
  }

  function validateName(name) {
    return name.trim() !== '';
  }

  function showSignup() {
    document.getElementById('signup-popup').style.display = 'flex';
    document.getElementById('login-container').style.display = 'none';
  }

  function showLogin() {
    document.getElementById('signup-popup').style.display = 'none';
    document.getElementById('login-container').style.display = 'flex';
  }

  function closeSignup() {
    document.getElementById('signup-popup').style.display = 'none';
    document.getElementById('login-container').style.display = 'flex';
  }