// function login() {
//     const emailInput = document.getElementById('login-email');
//     const passwordInput = document.getElementById('login-password');
//     const successMessage = document.getElementById('login-success');

//     if (validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {

//       successMessage.textContent = 'Login successful!';
//       emailInput.style.display = 'none';
//       passwordInput.style.display = 'none';
//     } else {
//       successMessage.textContent = 'Invalid email or password. Please try again.';
//     }
//   }

//   function signup() {
//     const nameInput = document.getElementById('signup-name');
//     const emailInput = document.getElementById('signup-email');
//     const passwordInput = document.getElementById('signup-password');
//     const successMessage = document.getElementById('signup-success');

//     if (validateName(nameInput.value) && validateEmail(emailInput.value) && validatePassword(passwordInput.value)) {
//       successMessage.textContent = 'Sign Up successful!';
//       nameInput.style.display = 'none';
//       emailInput.style.display = 'none';
//       passwordInput.style.display = 'none';
//     } else {
//       successMessage.textContent = 'Invalid input. Please check your information and try again.';
//     }
//   }

//   function validateEmail(email) {
//     return /\S+@\S+\.\S+/.test(email);
//   }

//   function validatePassword(password) {
//     return password.length >= 6;
//   }

//   function validateName(name) {
//     return name.trim() !== '';
//   }

//   function showSignup() {
//     document.getElementById('signup-popup').style.display = 'flex';
//     document.getElementById('login-container').style.display = 'none';
//   }

//   function showLogin() {
//     document.getElementById('signup-popup').style.display = 'none';
//     document.getElementById('login-container').style.display = 'flex';
//   }

//   function closeSignup() {
//     document.getElementById('signup-popup').style.display = 'none';
//     document.getElementById('login-container').style.display = 'flex';
//   }


// Function to handle login
async function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const successMessage = document.getElementById('login-success');

  try {
      const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
      });
      
      if (response.ok) {
          const data = await response.json();
          // Assuming your server returns a token upon successful login
          const token = data.token;
          localStorage.setItem('token', token); // Store token in localStorage
          successMessage.textContent = 'Login successful!';
          // Optionally, hide login form elements or redirect to another page
      } else {
          const errorData = await response.json();
          successMessage.textContent = errorData.message || 'Login failed. Please try again.';
      }
  } catch (error) {
      console.error('Error logging in:', error);
      successMessage.textContent = 'An error occurred. Please try again later.';
  }
}

// Function to handle signup
async function signup() {
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const successMessage = document.getElementById('signup-success');

  try {
      const response = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, password })
      });
      
      if (response.ok) {
          const data = await response.json();
          successMessage.textContent = 'Sign Up successful!';
          // Optionally, hide signup form elements or redirect to another page
      } else {
          const errorData = await response.json();
          successMessage.textContent = errorData.message || 'Signup failed. Please try again.';
      }
  } catch (error) {
      console.error('Error signing up:', error);
      successMessage.textContent = 'An error occurred. Please try again later.';
  }
}

// Function to validate email format
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// Function to validate password length
function validatePassword(password) {
  return password.length >= 6;
}

// Function to validate name (non-empty)
function validateName(name) {
  return name.trim() !== '';
}

// Function to show signup form and hide login form
function showSignup() {
  document.getElementById('signup-popup').style.display = 'flex';
  document.getElementById('login-container').style.display = 'none';
}

// Function to show login form and hide signup form
function showLogin() {
  document.getElementById('signup-popup').style.display = 'none';
  document.getElementById('login-container').style.display = 'flex';
}

// Function to close signup form and show login form
function closeSignup() {
  document.getElementById('signup-popup').style.display = 'none';
  document.getElementById('login-container').style.display = 'flex';
}
