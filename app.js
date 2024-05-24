const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const errorFName = document.getElementById('firstname')
const errorLName = document.getElementById('lastname')
const emailError = document.getElementById('email')
const passwordError = document.getElementById('password')
const svgOne = document.getElementById('svg-1')
const svgTwo = document.getElementById('svg-2')
const svgThree = document.getElementById('svg-3')
const svgFour = document.getElementById('svg-4')
const eyeContainer = document.querySelector('.eye-container')
const closeEye = document.querySelector('.close-eye')

// console.log(firstName, lastName, email, password);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);  
  
    // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    errorFName.textContent = 'Firstname cannot be empty'
    svgOne.classList.toggle('hidden')
  } else {
    firstName.classList.remove('error');
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    errorLName.textContent = 'Lastname cannot be empty'
    svgTwo.classList.toggle('hidden')
  } else {
    lastName.classList.remove('error');
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    emailError.textContent = 'Not like this is not an email'
    svgThree.classList.toggle('hidden')
  } else {
    email.classList.remove('error');
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    passwordError.textContent = 'Password cannot be empty'
    svgFour.classList.toggle('hidden')
    eyeContainer.style.display = 'none'
  } else {
    password.classList.remove('error');
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Check if the type given to the password is password then open the eyes
eyeContainer.addEventListener('click', () => {
  if (password.type === 'password' && password.value !== '') {
    password.type = 'text'
    closeEye.style.display = 'none'
  }
  else {
    password.type = 'password'
    closeEye.style.display = 'block'
  }
})

