// Obtener usuarios del localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

// Capturar el formulario de inicio de sesión
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = getUsers();
    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        localStorage.setItem('loggedInUser', JSON.stringify(validUser));
        window.location.href = 'home.html';
    } else {
        errorMessage.textContent = 'Correo o contraseña incorrectos.';
    }
});