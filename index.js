// DOM ELEMENTS

// INPUT
const input = document.getElementById('password');
// LI ELEMS 
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
    // Check if contains
    function containsCapitalLetter(str) {
        const capitalChars = /[A-Z]/;
        return capitalChars.test(str);
    }
    // If contains apply style
    if (containsCapitalLetter(password)){
        capitalRule.innerHTML = '<i class="fa-solid fa-check"></i> At least 1 capital letter'
        capitalRule.classList.add('text-success')
    }

    // NUMBER RULE
    if (password.includes(1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9) ) {
        numberRule.innerHTML = '<i class="fa-solid fa-check"></i> At least 1 number'
        numberRule.classList.add('text-success')
    }

    // SPECIAL RULE
    // Check if contains
    function containsSpecialChars(str) {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(str);
    }
    // If contains apply style
    if (containsSpecialChars(password)) {
        specialRule.innerHTML = '<i class="fa-solid fa-check"></i> At least a special characters'
        specialRule.classList.add('text-success')
    }
})
