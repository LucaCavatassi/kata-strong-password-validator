// *****VARS*****
let password = '';
// *****VARS*****

// *****DOM ELEMENTS*****
// Input
const input = document.getElementById('password');
// Li elems 
const charRule = document.getElementById('char-rule');
const capitalRule = document.getElementById('capital-rule');
const numberRule = document.getElementById('number-rule');
const specialRule = document.getElementById('special-rule');
// Progress bar
const progressBar = document.getElementById('bar');
// Show password btn
const showBtn = document.getElementById('show-password');
// *****DOM ELEMENTS*****

// *****FUNCTIONS*****
// HELPERS
// Capitals check
function containsCapitalLetter(str) {
    const capitalChars = /[A-Z]/;
    return capitalChars.test(str);
}

// Numbers check
function containsNumbers(str) {
    const numberChars = /[0-9]/;
    return numberChars.test(str);
}

// Special chars check
function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=$begin:math:display$$end:math:display${};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

// UPDATE PROGRESS BAR
function updateProgressBar(conditionCount) {
    // Multiply 25 by the number of conditions met
    const widthPercentage = conditionCount * 25;
    // Apply to width
    progressBar.style.width = `${widthPercentage}%`;

    // Update bar based on percentage
    // Remove every class may be applied
    progressBar.classList.remove('bg-danger', 'bg-warning', 'bg-info', 'bg-success');
    // If a condition is met apply class and text
    if (widthPercentage === 25) {
        // Apply color
        progressBar.classList.add('bg-danger');
        // Info text progress
        progressBar.innerHTML = 'Your password is weak!';
        // Set aria value
        progressBar.setAttribute('aria-valuenow', widthPercentage);
    } else if (widthPercentage === 50) {
        progressBar.classList.add('bg-warning');
        progressBar.innerHTML = 'Your password is still weak!';
        progressBar.setAttribute('aria-valuenow', widthPercentage);
    } else if (widthPercentage === 75) {
        progressBar.classList.add('bg-info');
        progressBar.innerHTML = "C'mon you can make it!";
        progressBar.setAttribute('aria-valuenow', widthPercentage);
    } else if (widthPercentage === 100) {
        progressBar.classList.add('bg-success');
        progressBar.innerHTML = "Now we're good!";
        progressBar.setAttribute('aria-valuenow', widthPercentage);
    }
    // // Type the percentage as text
    // progressBar.innerHTML += `${widthPercentage}%`;
}

// CHECK PASSWORD
function checkPassword() {
    // Count the number of condition met
    // This reset keeps the bar always updated because each time i add or remove chars it reset to 0
    // rechecks (so every condition it's checked) and count how many conditions are met, then update the bar conditionally based on the function that to that
    let conditionCount = 0;

    // PASS LENGTH RULE
    if (password.length > 8 ) {
        // Increase condition met
        conditionCount++;
        // Text style
        charRule.innerHTML = '<i class="fa-solid fa-check"></i> At least 9 characters';
        charRule.classList.add('text-success');
    } else {
        // Removes style if for exemple i delete chars and the condition it's no longer met
        charRule.innerHTML = '<i class="fa-solid fa-x"></i> At least 9 characters';
        charRule.classList.remove('text-success');
    }

    // CAPITAL RULE
    if (containsCapitalLetter(password)){
        conditionCount++;
        capitalRule.innerHTML = '<i class="fa-solid fa-check"></i> At least 1 capital letter';
        capitalRule.classList.add('text-success');
    } else {
        capitalRule.innerHTML = '<i class="fa-solid fa-x"></i> At least 1 capital letter';
        capitalRule.classList.remove('text-success');
    }

    // NUMBER RULE
    if (containsNumbers(password)) {
        conditionCount++;
        numberRule.innerHTML = '<i class="fa-solid fa-check"></i> At least 1 number';
        numberRule.classList.add('text-success');
    } else {
        numberRule.innerHTML = '<i class="fa-solid fa-x"></i> At least 1 number';
        numberRule.classList.remove('text-success');
    }

    // SPECIAL CHAR RULE
    if (containsSpecialChars(password)) {
        conditionCount++;
        specialRule.innerHTML = '<i class="fa-solid fa-check"></i> At least 1 special character';
        specialRule.classList.add('text-success');
    } else {
        specialRule.innerHTML = '<i class="fa-solid fa-x"></i> At least 1 special character';
        specialRule.classList.remove('text-success');
    }

    // Update the progress bar based on number of conditions met
    updateProgressBar(conditionCount);
}

function showPassword() {
    if (input.type === 'password') {
        input.type = 'text';
        showBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        input.type = 'password'
        showBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
}
// *****FUNCTIONS*****

// *****EVENT LISTENERS*****
// Check password
input.addEventListener('keyup', () => {
    password = input.value;
    checkPassword();
});
// Show/Hide password on click
showBtn.addEventListener('click', () => {
    showPassword();
})
// Show/Hide password tooltip
document.addEventListener('DOMContentLoaded', function () {
    const tooltipTrigger = document.getElementById('show-password');
    new bootstrap.Tooltip(tooltipTrigger);
});
// *****EVENT LISTENERS*****
