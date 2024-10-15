// DOM ELEMENTS
// INPUT
const input = document.getElementById('password');
// LI RULES 
const charRule = document.getElementById('char-rule');
const capitalRule = document.getElementById('capital-rule');
const numberRule = document.getElementById('number-rule');
const specialRule = document.getElementById('special-rule');
// DOM ELEMENTS

// VARS
let password = '';
// VARS

// FUNCTIONS
input.addEventListener('keyup', (e) => {
    // SAVE PASSWORD
    password += e.key

    // PASS LENGTH RULE
    if (password.length > 8 ) {
        charRule.innerHTML = '<i class="fa-solid fa-check"></i> At least 9 characters'
        charRule.classList.add('text-success')
    }

    // CAPITAL RULE
    if (password.length > 8 ) {
        capitalRule.innerHTML = '<i class="fa-solid fa-check"></i> At least 1 capital letter'
        capitalRule.classList.add('text-success')
    }

    // NUMBER RULE
    if (password.length > 8 ) {
        numberRule.innerHTML = '<i class="fa-solid fa-check"></i> At least 1 number'
        numberRule.classList.add('text-success')
    }

    // SPECIAL RULE
    if (password.length > 8 ) {
        specialRule.innerHTML = '<i class="fa-solid fa-check"></i> At least a special characters'
        specialRule.classList.add('text-success')
    }
})
