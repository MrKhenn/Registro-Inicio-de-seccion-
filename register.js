// Obtener usuarios del localStorage
function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

// Guardar nuevo usuario en localStorage
function saveUser(newUser) {
    const users = getUsers();
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
}

// Capturar el formulario de registro
const registerForm = document.getElementById('registerForm');
const errorMessage = document.getElementById('error-message');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = getUsers();
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        errorMessage.textContent = 'Este correo ya está registrado.';
    } else {
        saveUser({ name, email, password });
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        window.location.href = 'login.html';
    }
});