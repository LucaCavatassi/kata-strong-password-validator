const input = document.getElementById('password');
let password = '';

input.addEventListener('keyup', (e) => {
    password += e.key
})

