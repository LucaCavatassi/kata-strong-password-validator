// *****VARS*****
let password = '';

// *****DOM ELEMENTS*****
// Input
const input = document.getElementById('password');
// Li elems 
const charRule = document.getElementById('char-rule');
const capitalRule = document.getElementById('capital-rule');
const numberRule = document.getElementById('number-rule');
const specialRule = document.getElementById('special-rule');
// Progress bar
const progressBar = document.getElementById('Bar')
// Counter for conditions meeting
let conditionCount = 0;


// *****FUNCTIONS*****

// HELPERS
// Capital rule
function containsCapitalLetter(str) {
    const capitalChars = /[A-Z]/;
    return capitalChars.test(str);
}

// Number rule
function containsNumbers(str) {
    const numberChars = /[0-9]/;
    return numberChars.test(str);
}

// Special char rule
function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}
// HELPERS

// UPDATE PROGRESS BAR
function updateProgressBar() {
    // Multiply 25 by the time each condition is met
    const widthPercentage = conditionCount * 25;

    // Set the width of the bar
    progressBar.style.width = `${widthPercentage}%`;
    
    // Set style-color conditionally
    if (progressBar.style.width === '25%') {
        progressBar.classList.add('bg-danger');
        progressBar.innerHTML = '25%';
    } else if (progressBar.style.width === '50%') {
        progressBar.classList.remove('bg-danger');
        progressBar.classList.add('bg-warning');
        progressBar.innerHTML = '50%';
    } else if (progressBar.style.width === '75%') {
        progressBar.classList.remove('bg-warning');
        progressBar.classList.add('bg-info');
        progressBar.innerHTML = '75%';
    } else if (progressBar.style.width === '100%') {
        progressBar.classList.remove('bg-info');
        progressBar.classList.add('bg-success');
        progressBar.innerHTML = '100%';
    }
}

// CHECK PASSWORD
function checkPassword (str) {
    // PASS LENGTH RULE
    if (password.length > 8 ) {
        charRule.innerHTML = '<i class="fa-solid fa-check"></i> At least 9 characters';
        charRule.classList.add('text-success');
    } else {
        charRule.innerHTML = '<i class="fa-solid fa-x"></i> At least 9 characters';
        charRule.classList.remove('text-success');
    }

    // Capital rule applied
    if (containsCapitalLetter(password)){
        capitalRule.innerHTML = '<i class="fa-solid fa-check"></i> At least 1 capital letter';
        capitalRule.classList.add('text-success');
    } else {
        capitalRule.innerHTML = '<i class="fa-solid fa-x"></i> At least 1 capital letter'
        capitalRule.classList.remove('text-success');
    }


    // Number rule applied
    if (containsNumbers(password)) {
        numberRule.innerHTML = '<i class="fa-solid fa-check"></i> At least 1 number';
        numberRule.classList.add('text-success');
    } else {
        numberRule.innerHTML = '<i class="fa-solid fa-x"></i> At least 1 number'
        numberRule.classList.remove('text-success');
    }

    // Special char applied
    if (containsSpecialChars(password)) {
        specialRule.innerHTML = '<i class="fa-solid fa-check"></i> At least 1 special character';
        specialRule.classList.add('text-success');
    } else {
        specialRule.innerHTML = '<i class="fa-solid fa-x"></i> At least 1 special character'
        specialRule.classList.remove('text-success');
    }
}

//*****EVENT LISTENERS*****
input.addEventListener('keyup', (e) => {
    // Save password
    password = input.value
    checkPassword(password)
})
