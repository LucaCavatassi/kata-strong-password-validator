// VARS
let password = '';

// DOM ELEMENTS
// Input
const input = document.getElementById('password');
// Li elems 
const charRule = document.getElementById('char-rule');
const capitalRule = document.getElementById('capital-rule');
const numberRule = document.getElementById('number-rule');
const specialRule = document.getElementById('special-rule');

// FUNCTIONS
// Password Checker
input.addEventListener('keyup', (e) => {
    // SAVE PASSWORD
    password = input.value

    // PASS LENGTH RULE
    if (password.length > 8 ) {
        charRule.innerHTML = '<i class="fa-solid fa-check"></i> At least 9 characters';
        charRule.classList.add('text-success');
    } else {
        charRule.innerHTML = '<i class="fa-solid fa-x"></i> At least 9 characters';
        charRule.classList.remove('text-success');
    }

    // CAPITAL RULE
    // Check if contains
    function containsCapitalLetter(str) {
        const capitalChars = /[A-Z]/;
        return capitalChars.test(str);
    }
    // If contains apply style
    if (containsCapitalLetter(password)){
        capitalRule.innerHTML = '<i class="fa-solid fa-check"></i> At least 1 capital letter';
        capitalRule.classList.add('text-success');
    } else {
        capitalRule.innerHTML = '<i class="fa-solid fa-x"></i> At least 1 capital letter'
        capitalRule.classList.remove('text-success');
    }

    // NUMBER RULE
    // Check if contains
    function containsNumbers(str) {
        const numberChars = /[0-9]/;
        return numberChars.test(str);
    }
    // If contains apply style
    if (containsNumbers(password)) {
        numberRule.innerHTML = '<i class="fa-solid fa-check"></i> At least 1 number';
        numberRule.classList.add('text-success');
    } else {
        numberRule.innerHTML = '<i class="fa-solid fa-x"></i> At least 1 number'
        numberRule.classList.remove('text-success');
    }

    // SPECIAL RULE
    // Check if contains
    function containsSpecialChars(str) {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialChars.test(str);
    }
    // If contains apply style
    if (containsSpecialChars(password)) {
        specialRule.innerHTML = '<i class="fa-solid fa-check"></i> At least a special characters';
        specialRule.classList.add('text-success');
    } else {
        specialRule.innerHTML = '<i class="fa-solid fa-x"></i> At least a special characters'
        specialRule.classList.remove('text-success');
    }
})
