// Obtener el usuario logueado
const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (!loggedInUser) {
    window.location.href = 'login.html';
}

// Mostrar el nombre del usuario
document.getElementById('username').textContent = loggedInUser.name;

// Cerrar sesión
document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
});