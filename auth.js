const loginForm = document.querySelector('#loginForm');
const registerForm = document.querySelector('#registerForm');

loginForm?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Demo login: connect this form to the backend authentication API.');
  location.href = 'dashboard.html';
});

registerForm?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Demo registration: connect this form to the backend API.');
  location.href = 'dashboard.html';
});
